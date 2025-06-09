
<img src="https://github.com/user-attachments/assets/9e12d7de-9900-43e3-8ce5-2ba529cb34d8"  width="50%"/>

# React Double Counter App

이 프로젝트는 React를 사용하여 숫자를 두 배로 만들고 초기화하는 간단한 웹 애플리케이션입니다.

## 파일 설명

* `App.jsx`: 이 파일은 애플리케이션의 핵심 로직과 UI를 포함하는 React 컴포넌트입니다.
* `main.jsx`: 이 파일은 React 애플리케이션을 DOM에 렌더링하는 진입점입니다.

## 주요 기능

* **숫자 두 배로 만들기**: "Count : {숫자}" 버튼을 클릭하면 현재 숫자가 두 배가 됩니다. (단, 0에서 시작 시 1이 됩니다.)
* **숫자 초기화**: "RESET" 버튼을 클릭하면 숫자가 0으로 초기화됩니다.

## 코드 설명

### `App.jsx`

* `import { useState } from 'react'`: React의 `useState` 훅을 가져옵니다. `useState`는 함수 컴포넌트에서 상태를 관리할 수 있게 해주는 훅입니다. 여기서 `count`라는 상태 변수와 이를 업데이트하는 `setCount` 함수를 선언하여 숫자의 현재 값을 저장하고 변경합니다.
* `const [count, setCount] = useState(0)`: `useState` 훅을 사용하여 `count`라는 상태 변수를 선언하고 초기값을 `0`으로 설정합니다. `setCount`는 `count` 값을 업데이트하는 함수입니다.
* `onClick={() => setCount((count) => count == 0? count+=1 : count *= 2)}`: "Count" 버튼에 연결된 클릭 이벤트 핸들러입니다. `setCount` 함수를 사용하여 `count` 값을 업데이트합니다.
    * `count == 0 ? count += 1 : count *= 2`: 삼항 연산자입니다. `count`가 `0`이면 `count`에 `1`을 더하고, 그렇지 않으면 `count`를 두 배로 만듭니다.
* `onClick={() => setCount((count) => count = 0)}`: "RESET" 버튼에 연결된 클릭 이벤트 핸들러입니다. `setCount` 함수를 사용하여 `count` 값을 `0`으로 초기화합니다.
* `return (...)`: React 컴포넌트의 렌더링 결과를 정의합니다. JSX(JavaScript XML) 문법을 사용하여 HTML과 유사한 구조로 UI를 작성합니다.

### `main.jsx`

* `import { StrictMode } from 'react'`: React의 `StrictMode` 컴포넌트를 가져옵니다. `StrictMode`는 애플리케이션 내의 잠재적인 문제를 식별하기 위한 개발 모드 도구입니다. 프로덕션 빌드에서는 아무것도 렌더링하지 않으며, 성능을 저하시키지 않습니다.
* `import { createRoot } from 'react-dom/client'`: React DOM 클라이언트 API에서 `createRoot` 함수를 가져옵니다. 이 함수는 React 애플리케이션을 DOM에 마운트하는 데 사용됩니다.
* `createRoot(document.getElementById('root')).render(...)`: `index.html` 파일에 있는 `id`가 'root'인 HTML 요소를 찾아 해당 요소에 React 애플리케이션을 렌더링합니다. `<App />` 컴포넌트가 `StrictMode` 내에서 렌더링됩니다.
