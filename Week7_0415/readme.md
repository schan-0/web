
<img src="https://github.com/user-attachments/assets/aedd373e-1680-44f0-8363-cd51559bd164" width="50%">


# React 고급 훅 및 최적화 기법 탐색

이 프로젝트는 React의 다양한 고급 훅(`useMemo`, `useCallback`, `useTransition`, `useId`, `useSyncExternalStore`, `useDeferredValue`, `useEffect`, `use` (React 챕터에서 설명하는 새로운 훅))과 커스텀 훅을 활용하여 성능 최적화, UI 동시성 관리, 접근성 향상, 외부 데이터 소스 동기화, 그리고 렌더링 지연 등 다양한 고급 React 패턴을 시연하는 웹 애플리케이션입니다.

## 💡 프로젝트 개요

이 프로젝트는 React 애플리케이션의 성능을 최적화하고, 복잡한 상태 관리 및 비동기 작업을 효율적으로 처리하는 방법을 심도 있게 다룹니다. 각 파일은 특정 고급 훅 또는 패턴의 사용법을 명확하게 보여주는 독립적인 예시로 구성되어 있습니다. 이를 통해 개발자는 React의 강력한 기능을 이해하고 실제 프로젝트에 적용하는 데 필요한 지식을 얻을 수 있습니다.

## 📁 파일 구성 및 역할

프로젝트는 아래와 같은 주요 파일들로 구성되어 있으며, 각 파일은 특정 고급 React 기능을 시연합니다.

* `src/main.jsx`: React 애플리케이션의 진입점입니다. 다양한 고급 훅 예시 컴포넌트들을 렌더링하여 하나의 페이지에서 여러 기능을 탐색할 수 있도록 구성되어 있습니다.
* `src/Accommodate.jsx`: `useState`와 `useEffect` 훅, 그리고 커스텀 훅(`useCounter`)을 사용하여 상태 변화에 따른 부수 효과(side effect)를 관리하고, 정원 수용 로직을 구현하는 컴포넌트입니다. `useEffect`의 의존성 배열을 통해 렌더링 최적화의 기본을 보여줍니다.
* `src/useCounter.jsx`: 카운트 값을 증가 또는 감소시키는 로직을 캡슐화한 커스텀 훅입니다. `Accommodate.jsx`와 같이 다른 컴포넌트에서 재사용될 수 있는 형태로 구현되었습니다.
* `src/ChildNoCallback.jsx`: `useCallback` 훅을 사용하지 않았을 때 부모 컴포넌트의 리렌더링이 자식 컴포넌트에도 불필요한 리렌더링을 유발할 수 있음을 보여주는 예시입니다.
* `src/ChildUseCallback.jsx`: `useCallback` 훅을 사용하여 함수를 메모이제이션함으로써, 부모 컴포넌트가 리렌더링될 때마다 자식 컴포넌트에 새로운 함수 `props`가 전달되는 것을 방지하여 자식 컴포넌트의 불필요한 리렌더링을 막는 시나리오를 설명합니다.
* `src/OptimizedCalc.jsx`: `useMemo` 훅을 사용하여 비용이 많이 드는 계산(예: 무거운 반복문)의 결과를 메모이제이션하여 불필요한 재계산을 방지하고 렌더링 성능을 최적화하는 방법을 보여줍니다.
* `src/OptimizedCalc2.jsx`: `useMemo` 훅을 사용하여 객체나 배열과 같은 참조형 데이터를 메모이제이션함으로써, 자식 컴포넌트에 `props`로 전달될 때 불필요한 리렌더링을 방지하는 방법을 보여줍니다.
* `src/ExpensiveCalc.jsx`: `useMemo`를 사용하지 않았을 때 부모 컴포넌트의 상태 변화가 매번 비용이 큰 자식 컴포넌트의 계산을 유발하여 성능 저하로 이어질 수 있음을 보여주는 대조적인 예시입니다.
* `src/ParentComponent.jsx`: (코드 스니펫에 `useCallback`이 주석 처리되어 있으나, 파일명으로 미루어 `useCallback`의 사용 예시를 보여주는 의도로 보입니다.) `useCallback` 훅을 사용하여 함수를 메모이제이션하여, 부모 컴포넌트가 리렌더링될 때마다 자식 컴포넌트에 새로운 함수 `props`가 전달되는 것을 방지함으로써 자식 컴포넌트의 불필요한 리렌더링을 막는 시나리오를 설명합니다.
* `src/Transition.jsx`: `useTransition` 훅을 사용하여 긴급하지 않은 상태 업데이트를 '트랜지션'으로 표시하고, UI 응답성을 유지하면서 복잡한 UI 변경을 처리하는 방법을 보여줍니다. 대량의 `div` 렌더링 시 로딩 상태를 보여주는 예시를 포함합니다.
* `src/DefferedValue.jsx`: `useDeferredValue` 훅을 사용하여 상태 업데이트를 지연시키는 방법을 보여줍니다. 이를 통해 긴급한 UI 업데이트를 먼저 처리하고, 덜 긴급한 업데이트는 나중에 처리하여 사용자 경험을 향상시킬 수 있습니다.
* `src/PasswordField.jsx`: `useId` 훅을 사용하여 고유하고 안정적인 ID를 생성함으로써 접근성 속성(예: `aria-describedby`)을 관리하는 방법을 보여줍니다. 이는 HTML 요소 간의 관계를 설정하여 웹 접근성을 향상시키는 데 유용합니다.
* `src/UseInnerHeight.jsx`: `useSyncExternalStore` 훅을 사용하여 React 외부의 변화하는 데이터 소스(예: `window.innerHeight`)를 구독하고 동기화하는 방법을 보여주는 커스텀 훅입니다. 이는 웹 API나 서드파티 라이브러리의 상태 변화를 React 컴포넌트에 반영할 때 유용합니다.
* `src/MouseTracker.jsx`: `useEffect` 훅을 사용하여 마우스 움직임과 같은 DOM 이벤트를 구독하고, 컴포넌트 언마운트 시 이벤트 리스너를 정리(cleanup)하는 방법을 보여줍니다. 이는 부수 효과를 관리하는 전형적인 예시입니다.
* `src/FetchData.jsx`: `useEffect` 훅을 사용하여 컴포넌트 마운트 시점에 API 데이터를 비동기적으로 가져오는 방법을 보여줍니다. 빈 의존성 배열을 통해 한 번만 데이터를 불러오도록 설정합니다.
* `src/Note.jsx`: (React 챕터의 새로운 훅인)`use` 훅의 사용법을 보여줍니다. 이는 컴포넌트 내부에서 비동기 리소스를 직접 읽는 데 사용되며, 조건부 로직 내에서도 호출될 수 있음을 강조합니다.

## 🎯 구현 기능 및 방법

각 파일은 독립적인 컴포넌트로, 아래와 같은 특정 React 고급 기능을 시연합니다.

* **`Accommodate.jsx` (커스텀 훅과 `useEffect`):**
    * `useCounter` 커스텀 훅을 통해 입장/퇴장 기능을 구현하여 `count` 상태를 관리합니다.
    * `useEffect`를 두 번 사용하여 `isFull` 상태 변화와 `count` 상태 변화에 따른 부수 효과를 콘솔에 로깅하여 생명주기와 의존성 배열의 역할을 시연합니다.
    * `MAX_CAPACITY`에 도달하면 '입장' 버튼을 비활성화하고 경고 메시지를 표시합니다.
* **`ChildNoCallback.jsx` (`useCallback` 미사용 시 문제점):**
    * 부모 컴포넌트(`App`)의 `count` 상태가 변경될 때마다 `handleClick` 함수가 새로 생성되고, 이로 인해 `ChildNoCallback` 컴포넌트가 불필요하게 리렌더링되는 과정을 콘솔 로그로 보여줍니다. (실제 예제에서는 `App` 컴포넌트 내부에 `ChildNoCallback`을 렌더링하고, `App` 컴포넌트 자체를 `App`이라는 이름으로 `export`하고 있습니다.)
* **`ChildUseCallback.jsx` (`useCallback`을 이용한 함수 메모이제이션):**
    * `useCallback`을 사용하여 `handleClick` 함수를 메모이제이션합니다. 부모 컴포넌트의 `count` 상태가 변경되어도 `handleClick` 함수의 참조가 변경되지 않으므로, `ChildUseCallback` 컴포넌트는 불필요하게 리렌더링되지 않습니다. 이는 특히 자식 컴포넌트가 `React.memo`로 래핑되어 있을 때 효과적입니다.
* **`OptimizedCalc.jsx` (`useMemo`를 이용한 계산 최적화):**
    * `useMemo`를 사용하여 시간이 오래 걸리는 계산(`expensiveResult`)을 `number` 상태가 변경될 때만 다시 수행하도록 합니다. `count` 상태가 변경되어 컴포넌트가 리렌더링되더라도 `expensiveResult`는 재계산되지 않아 성능이 향상됩니다.
* **`OptimizedCalc2.jsx` (`useMemo`를 이용한 객체 메모이제이션):**
    * `useMemo`를 사용하여 `user` 객체를 `name` 상태가 변경될 때만 재생성합니다. `count` 상태가 변경되어도 `user` 객체는 동일한 참조를 유지하여, 이 객체를 `props`로 받는 자식 컴포넌트의 불필요한 리렌더링을 방지할 수 있습니다.
* **`ExpensiveCalc.jsx` (`useMemo` 없이 매번 계산):**
    * `useMemo`를 사용하지 않고 복잡한 계산을 수행하는 `ExpensiveCalculation` 컴포넌트를 포함합니다. 부모 컴포넌트의 `count` 상태만 변경되어도 `ExpensiveCalculation` 컴포넌트가 매번 리렌더링되며 계산을 다시 수행하는 것을 보여주어 최적화의 필요성을 강조합니다.
* **`Transition.jsx` (`useTransition`을 이용한 UI 응답성 향상):**
    * `startTransition`을 사용하여 입력 필드 (`name`) 업데이트를 '트랜지션'으로 감쌉니다. 이로 인해 대량의 `div`를 렌더링하는 무거운 작업이 백그라운드에서 처리되는 동안 '로딩 중' 메시지를 표시하고, 사용자 입력에 대한 UI의 즉각적인 응답성을 유지합니다.
* **`DefferedValue.jsx` (`useDeferredValue`를 이용한 상태 업데이트 지연):**
    * `useDeferredValue` 훅을 사용하여 `count2`의 업데이트를 지연시킵니다. `onIncrease` 버튼을 클릭하면 `count1`, `count3`, `count4`는 즉시 업데이트되지만, `deferredValue`는 `count2`의 변화가 완료된 후 약간의 지연을 두고 업데이트되어 UI 응답성을 개선하는 시나리오를 보여줍니다.
* **`PasswordField.jsx` (`useId`를 이용한 접근성):**
    * `useId` 훅을 사용하여 `aria-describedby` 속성에 사용될 고유한 ID를 동적으로 생성합니다. 이는 여러 개의 `PasswordField` 컴포넌트가 동시에 렌더링될 때 ID 충돌 없이 접근성을 유지할 수 있게 합니다.
* **`UseInnerHeight.jsx` (`useSyncExternalStore`를 이용한 외부 데이터 동기화):**
    * `useSyncExternalStore` 훅을 사용하여 브라우저의 `window.innerHeight` 값을 React 상태와 동기화하는 커스텀 훅을 구현합니다. `resize` 이벤트에 대한 구독 및 구독 해지 로직을 포함하여 외부 시스템의 변화를 효율적으로 감지하고 React 컴포넌트에 반영합니다.
* **`MouseTracker.jsx` (`useEffect`를 이용한 이벤트 구독 및 정리):**
    * `useEffect` 훅 내부에서 `mousemove` 이벤트 리스너를 추가하고, 클린업 함수에서 이 리스너를 제거합니다. 이는 컴포넌트가 마운트될 때 이벤트를 구독하고 언마운트될 때 구독을 해지하여 메모리 누수를 방지하는 전형적인 `useEffect` 사용 패턴을 보여줍니다.
* **`FetchData.jsx` (`useEffect`를 이용한 데이터 Fetching):**
    * 컴포넌트가 마운트될 때 `fetch` API를 사용하여 외부 데이터를 비동기적으로 가져옵니다. 빈 의존성 배열(`[]`)을 전달하여 이 효과가 컴포넌트 생애주기 중 단 한 번만 실행되도록 보장합니다.
* **`Note.jsx` (`use` 훅):**
    * React 챕터에서 설명하는 새로운 `use` 훅을 사용하여 비동기 함수(`fetchNote`, `fetchNoteAuthor`)의 결과를 직접 읽는 방법을 보여줍니다. `shouldIncludeAuthor` 조건에 따라 `use` 훅이 조건부로 호출될 수 있음을 강조하여 불필요한 데이터 fetching을 방지합니다.

## 🚀 시작하기

이 프로젝트를 로컬 환경에서 실행하려면, 다음 단계를 따르세요:

1.  저장소를 클론합니다.
2.  프로젝트 디렉토리로 이동합니다.
3.  의존성 패키지를 설치합니다 (`npm install` 또는 `yarn`).
4.  개발 서버를 시작합니다 (`npm start` 또는 `yarn start`).
