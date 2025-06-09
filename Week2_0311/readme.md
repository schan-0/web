

<img src="https://github.com/user-attachments/assets/e332f189-6404-4b43-9403-a36ecd2362ad" width="70%">

# React 프로필 페이지

이 프로젝트는 React로 구현된 간단한 프로필 페이지입니다. 사용자 정보, 관심사, 최근 학습 내용 등을 시각적으로 보여줍니다.

## 프로젝트 구조 및 파일 설명

이 프로젝트는 다음과 같은 주요 파일들로 구성되어 있으며, 각 파일은 특정 역할을 수행합니다.

* `public/index.html`: 애플리케이션의 단일 HTML 진입점입니다. React 앱이 마운트되는 `#root` div를 포함합니다.
* `src/index.js`: React 애플리케이션의 시작점입니다. `App` 컴포넌트를 DOM에 렌더링하고, 웹 성능 측정을 위한 `reportWebVitals`를 초기화합니다.
* `src/App.js`: 애플리케이션의 핵심 UI 컴포넌트입니다. 사용자 프로필 정보(이름, 소개), 좋아하는 것, 최근 활동, 학습한 내용 등을 JSX를 사용하여 구조화합니다.
    * `src/App.css`: `App.js` 컴포넌트에 대한 스타일을 정의합니다.
    * `src/thumbnail.jpg`, `src/favorites-image.jpg`, `src/currently-image.jpg`: 프로필 페이지에 사용되는 이미지 리소스입니다.
* `src/reportWebVitals.js`: 웹 성능 지표(Core Web Vitals)를 측정하고 보고하는 함수를 제공합니다. 이는 `web-vitals` 라이브러리를 통해 CLS, FID, FCP, LCP, TTFB 등의 지표를 수집합니다.
* `src/App.test.js`: `App` 컴포넌트에 대한 기본적인 테스트 파일입니다. `react-testing-library`를 사용하여 컴포넌트 렌더링을 테스트합니다.
* `src/setupTests.js`: Jest 테스트 환경 설정을 위한 파일입니다. `@testing-library/jest-dom`을 import하여 DOM 노드에 대한 커스텀 Jest 매처를 추가합니다.

## 코드의 유기적 관계

1.  **진입점 (`index.js`)**: `index.js`는 `public/index.html`의 `<div id="root"></div>`에 React 애플리케이션을 주입하는 역할을 합니다. `App` 컴포넌트를 `<React.StrictMode>`로 감싸 개발 중 잠재적인 문제를 감지할 수 있도록 돕습니다.
2.  **핵심 컴포넌트 (`App.js`)**: `App.js`는 애플리케이션의 모든 시각적 요소를 정의하고 구성합니다. `index.js`에 의해 렌더링되며, 페이지의 레이아웃과 콘텐츠를 담당합니다. 사용되는 이미지(`thumbnail.jpg`, `favorites-image.jpg`, `currently-image.jpg`)는 `App.js` 내에서 import되어 UI에 포함됩니다.
3.  **성능 측정 (`reportWebVitals.js`)**: `reportWebVitals.js`는 웹 성능 데이터를 수집하며, 이 함수는 `index.js`에서 호출됩니다. 이를 통해 애플리케이션의 사용자 경험 관련 성능을 모니터링할 수 있습니다.
4.  **테스팅 (`App.test.js`, `setupTests.js`)**: `App.test.js`는 `App` 컴포넌트가 올바르게 렌더링되는지 확인하는 단위 테스트를 포함합니다. `setupTests.js`는 이러한 테스트가 DOM 관련 어설션을 더 쉽게 할 수 있도록 Jest 환경을 확장합니다.
