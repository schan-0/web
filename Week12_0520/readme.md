
<img src="https://github.com/user-attachments/assets/767678cc-823c-487f-8582-aba9d0380eee" width="50%">

# React 투두리스트 애플리케이션

이 프로젝트는 React의 주요 Hook과 상태 관리 패턴을 활용하여 제작된 간단한 투두리스트(To-Do List) 애플리케이션입니다. 사용자는 할 일을 추가, 삭제, 완료 처리할 수 있으며, 남은 작업의 개수도 확인할 수 있습니다.

## 📝 주요 기능

- **오늘 날짜 및 할 일 개수 표시**: 상단에 오늘 날짜와 요일, 완료하지 않은 할 일의 개수를 보여줍니다.
- **할 일 목록 조회**: 등록된 할 일 목록을 확인할 수 있습니다.
- **할 일 추가**: 하단의 '+' 버튼을 통해 새로운 할 일을 입력하고 추가할 수 있습니다.
- **할 일 완료/해제**: 각 할 일 항목의 체크박스를 클릭하여 완료 상태를 토글할 수 있습니다.
- **할 일 삭제**: 각 할 일 항목에 마우스를 올리면 나타나는 휴지통 아이콘을 클릭하여 삭제할 수 있습니다.

## 🛠️ 기술 스택

- **React**: UI 구축을 위한 기본 라이브러리
- **React Hooks**:
  - `useState`: 컴포넌트의 로컬 상태(입력 폼 토글 등)를 관리합니다.
  - `useReducer`, `useContext`: 애플리케이션의 전역 상태(할 일 목록)를 효율적으로 관리합니다.
  - `useRef`: 리렌더링을 유발하지 않는 데이터(다음 할 일 ID)를 관리합니다.
- **styled-components**: 컴포넌트 기반의 CSS-in-JS 스타일링을 위해 사용되었습니다.

## 📂 프로젝트 구조

```
src/
├── App.jsx            # 전체 컴포넌트를 조합하는 최상위 컴포넌트
├── main.jsx           # 애플리케이션 진입점
├── TodoContext.jsx    # 상태 관리를 위한 Context와 Reducer 정의
├── TodoTemplate.jsx   # 전체 레이아웃을 담당하는 템플릿 컴포넌트
├── TodoHead.jsx       # 날짜와 남은 할 일 개수를 표시하는 헤더
├── TodoList.jsx       # 할 일 목록을 렌더링하는 컴포넌트
├── TodoItem.jsx       # 개별 할 일 항목을 나타내는 컴포넌트
└── TodoCreate.jsx     # 새로운 할 일을 추가하는 폼 및 버튼
```

## ✨ 핵심 코드 설명

이 프로젝트는 React의 Context API와 `useReducer` Hook을 결합하여 효과적인 전역 상태 관리를 구현한 것이 핵심입니다. 이를 통해 불필요한 props drilling(속성 내려주기)을 방지하고 코드의 유지보수성을 높였습니다.

### 1. 상태 관리: `Context API` + `useReducer`

`TodoContext.jsx` 파일에서 애플리케이션의 핵심 로직인 상태 관리가 이루어집니다.

- **기능 분리**: 하나의 Context 대신 `TodoStateContext`, `TodoDispatchContext`, `TodoNextIdContext` 세 가지 Context를 만들어 역할을 분리했습니다.
  - `TodoStateContext`: 현재 할 일 목록(`todos`) 상태를 담고 있습니다.
  - `TodoDispatchContext`: 상태를 변경하는 `dispatch` 함수를 담고 있습니다.
  - `TodoNextIdContext`: 새로운 항목을 추가할 때 사용할 고유 ID 값을 관리합니다.
- **최적화**: 상태(state)와 액션(dispatch)을 분리함으로써, `dispatch`만 필요한 컴포넌트는 `todos` 상태가 변경되어도 불필요한 리렌더링을 방지할 수 있습니다.

- **`todoReducer`**: `CREATE`, `TOGGLE`, `REMOVE` 세 가지 액션 타입을 받아 상태를 업데이트하는 순수 함수입니다. `useReducer`를 통해 상태 업데이트 로직을 컴포넌트 외부로 분리하여 코드 구조를 더 명확하게 만들었습니다.

```jsx
// TodoContext.jsx
function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
```

- **커스텀 Hooks**: `useTodoState`, `useTodoDispatch`, `useTodoNextId`와 같은 커스텀 Hook을 만들어 각 컴포넌트에서 `useContext`를 직접 호출하지 않고도 간편하게 Context 값에 접근할 수 있도록 했습니다. 이는 코드의 가독성을 높이고 재사용을 용이하게 합니다.

```jsx
// TodoItem.jsx 에서의 사용 예시
function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch(); // dispatch 함수만 가져옴
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });
    // ...
}
```

### 2. 동적 스타일링: `styled-components`

`styled-components`를 사용하여 각 컴포넌트의 스타일을 정의하고, JavaScript `props`를 통해 동적으로 스타일을 변경하는 기법이 적극적으로 활용되었습니다.

- **조건부 스타일링**: `TodoItem.jsx`의 `CheckCircle`과 `Text` 컴포넌트는 `done`이라는 `props` 값에 따라 다른 스타일(테두리 색상, 텍스트 색상)을 가집니다.

```jsx
// TodoItem.jsx
const CheckCircle = styled.div`
  /* ... 기본 스타일 */
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
```

- **상호작용 스타일링**: `TodoCreate.jsx`의 `CircleButton`은 `open` `props`에 따라 색상과 회전(`transform`) 스타일이 변경되어, 버튼 클릭 시 '+' 모양이 '×' 모양으로 바뀌는 애니메이션을 구현합니다.

```jsx
// TodoCreate.jsx
const CircleButton = styled.button`
  /* ... 기본 스타일 */
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
```

이처럼 `styled-components`를 활용하여 컴포넌트의 상태와 스타일을 긴밀하게 연결함으로써, 더 직관적이고 재사용 가능한 UI 컴포넌트를 만들었습니다.
