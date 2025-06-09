

<img src="https://github.com/user-attachments/assets/e332f189-6404-4b43-9403-a36ecd2362ad" width="70%">
# React 프로필 페이지

이 프로젝트는 React를 사용하여 구현된 간단한 프로필 페이지입니다. 사용자 정보, 관심사, 최근 학습 내용 등을 시각적으로 보여주는 것을 목표로 합니다.

## 💡 프로젝트 개요

이 프로젝트는 정적인 프로필 정보를 효과적으로 시각화하기 위해 React를 활용했습니다. 일반적인 React 템플릿에서 제공하는 기본 기능 외에, 사용자의 개인적인 정보를 명확하고 직관적으로 전달할 수 있도록 커스텀 컴포넌트와 스타일을 적용하여 개발되었습니다.

## 📁 파일 구성 및 역할

프로젝트는 아래와 같은 주요 파일들로 구성되어 있으며, 각 파일은 특정 역할을 수행합니다.

* `public/index.html`: 애플리케이션의 단일 HTML 진입점입니다. React 앱이 렌더링될 `#root` div를 포함합니다.
* `src/index.js`: React 애플리케이션의 시작점입니다. `App` 컴포넌트를 DOM에 렌더링하며, 웹 성능 측정을 위한 `reportWebVitals` 함수를 호출합니다.
* `src/App.js`: 이 애플리케이션의 핵심 UI 컴포넌트입니다. 사용자 프로필 정보(이름, 소개), 좋아하는 것, 최근 활동, 학습한 내용 등을 JSX를 사용하여 구조화합니다.
    * `src/App.css`: `App.js` 컴포넌트의 시각적인 스타일을 정의합니다.
    * `src/thumbnail.jpg`, `src/favorites-image.jpg`, `src/currently-image.jpg`: 프로필 페이지에 사용되는 이미지 리소스 파일입니다.
* `src/reportWebVitals.js`: 웹 성능 지표(Core Web Vitals)를 측정하고 보고하는 기능을 제공합니다. `web-vitals` 라이브러리를 통해 CLS, FID, FCP, LCP, TTFB 등의 지표를 수집합니다.
* `src/App.test.js`: `App` 컴포넌트에 대한 기본적인 테스트 파일입니다. `react-testing-library`를 사용하여 컴포넌트 렌더링을 테스트합니다.
* `src/setupTests.js`: Jest 테스트 환경 설정을 위한 파일입니다. `@testing-library/jest-dom`을 import하여 DOM 노드에 대한 커스텀 Jest 매처를 추가합니다.

## 🎯 구현 기능 및 방법

### 프로필 정보 시각화

* **구현 목표**: 사용자의 이름, 소개, 좋아하는 것, 최근 활동, 학습한 내용 등을 한눈에 볼 수 있도록 시각적으로 구성합니다.
* **구현 방법**: `App.js` 컴포넌트 내에서 JSX를 사용하여 각 정보 섹션을 정의했습니다. `<div class="title-box">`와 `<div class="content-box">`를 통해 전체 레이아웃을 나누고, 각 정보는 `<div class="content-item">`으로 그룹화했습니다. 특히, `src/thumbnail.jpg`와 같은 이미지를 활용하여 시각적인 요소를 강화했습니다. 텍스트 정보는 `<p>`, `<h1>`, `<h2>` 태그를 활용하여 가독성을 높였습니다.

### 이미지 활용 및 스타일링

* **구현 목표**: 프로필 이미지와 각 콘텐츠 섹션에 어울리는 이미지를 배치하여 시각적인 매력을 더합니다.
* **구현 방법**: `App.js`에서 `import` 문을 통해 이미지 파일을 가져와 `<img>` 태그의 `src` 속성에 할당했습니다. `App.css` 파일에서는 `circle-image`와 `fade-image`와 같은 클래스를 정의하여 이미지에 원형 모양이나 페이드 효과를 적용하는 등 커스텀 스타일을 부여했습니다.

### 웹 성능 측정 통합

* **구현 목표**: 애플리케이션의 로딩 성능 및 사용자 경험 관련 지표를 측정합니다.
* **구현 방법**: `index.js`에서 `reportWebVitals` 함수를 호출하여 웹 바이탈 지표(CLS, FID, FCP, LCP, TTFB)를 수집하도록 설정했습니다. 이는 실제 사용자 환경에서의 성능을 파악하고 개선하는 데 도움을 줍니다.

### 테스트 환경 설정

* **구현 목표**: 컴포넌트의 기본적인 렌더링을 테스트하고, DOM 관련 어설션을 쉽게 작성할 수 있는 환경을 구축합니다.
* **구현 방법**: `App.test.js`에서 `react-testing-library`의 `render`와 `screen` 함수를 사용하여 `App` 컴포넌트가 올바르게 렌더링되는지 확인하는 테스트 코드를 작성했습니다. 또한, `setupTests.js`에서 `@testing-library/jest-dom`을 import하여 `toBeInTheDocument()`와 같은 Jest 커스텀 매처를 사용할 수 있도록 Jest 환경을 확장했습니다.

## 🚀 시작하기

이 프로젝트를 로컬 환경에서 실행하려면, 다음 단계를 따르세요:

1.  저장소를 클론합니다.
2.  프로젝트 디렉토리로 이동합니다.
3.  의존성 패키지를 설치합니다 (`npm install` 또는 `yarn`).
4.  개발 서버를 시작합니다 (`npm start` 또는 `yarn start`).
