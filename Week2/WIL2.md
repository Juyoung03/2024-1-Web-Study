# 2주차 - HTML, CSS, JavaScript

## 1. JavaSCript가 DOM에 어떻게 접근하고 적용될까

### DOM이란?

DOM은 Document Object Model의 약자로 각각 문서 객체 모델을 뜻함.

HTML의 요소들을 웹 브라우저의 메모리에 올려서 자바스크립트로 사용하기 위해만들어진 웹 문서


![image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JPMPn-HTwg03emotIaJQjg.jpeg)


### DOM 접근 메서드

|메서드|설명|
|---|---|
|document.getElementByld("id명")|해당 id명을 가진 요소 하나를 반환|
|document.querySelector("선택자")|해당 선택자를 만족하는 요소 하나를 반환|
|document.getElementByClassName("class명")[순서]|해당 class명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환|
|document.getElementByTagName("태그명")[순서]|해당 태그명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환|
|document.querySelectorAll("선택자명")[순서]|해당 선택자를 만족하는 모든 요소들을 배열에 인덱스에 맞는 요소를 반환|


### 요소 접근 속성과 document.write 메서드

요소에 접근하면 요소의 여러 속성에 접근 변경할 수 있다.

|속성 및 메서드|설명|
|----|---|
|element.innerHTML|해당 요소를 다른 HTML요소로 변경할 수 있는 속성|
|element.style.property|해당 요소에 적용된 css속성의 값을 나타냄|
|element.attribute|해당 요소의 속성을 나타냄|
|document.write()|인자로 전달한 내용을 DOM에 그릴 수 있음|

## 2. 브라우저를 이루는 컴포넌트 중, 자바스크립트 엔진은 무엇이고 어떤 일을 할까

### 자바스크립트 엔진이란?

    자바스크립트 엔진(JavaScript Engine)은 자바스크립트 코드를 실행하여 웹 페이지의 동적인 기능을 제공하는 프로그램 또는 인터프리터이다.

### 자바스크립트 엔진이 하는 일

개발자가 작성한 자바스크립트 코드를 웹 브라우저나 다른 실행 환경에서 해석될 수 있는 최적화 된 코드로 변환하는 일을 한다.

대부분의 현대 웹 브라우저는 자바스크립트 엔진을 내장하고 있다.

* Chrome - V8 엔진
* Mozilla FireFox - SpiderMonkey 엔진
* Microsoft Edge - Chakra 엔진
* IE - Trident엔진 또는 Chakra 엔진


### 클라이언트 사이드

클라이언트 사이드에서 자바스크립트는 사용자의 웹 브라우저에서 실행된다. 웹 페이지의 동적인 기능을 구현하고 사용자와의 상호작용을 처리하는 데 사용된다.

    웹 페이지 조작 : DOM을 조작하여 웹 페이지의 구조와 내용을 변경할 수 있다. 예를 들어, 버튼을 클릭하면 특정 요소가 나타나거나 사라지도록 설정할 수 있다.

    이벤트 처리 : 사용자의 동작(마우스 클릭, 키 입력 등)을 감지하고 이번트를 처리할 수 있다. 예를 들어, 사용자가 폼을 제출할 때 입력 데이터의 유효성을 검사하는 기능을 구현할 수 있다.

    웹 애니메이션 : 웹 페이지에서 애니메이션 효과를 만들 수 있다. 예를 들어, 움직이는 이미지 슬라이더, 페이드 인/아웃 효과 등을 구현할 수 있다.


### 서버 사이드

서버 사이드 자바스크립트는 백엔서 서버 로직에서 코딩 언어를 사용하는 것을 의미한다. 이 경우 자바스크립트 엔진은 서버에 직접 위치한다. 데이터베이스에 액세스하고, 다양한 논리 작업을 수행하고, 서버의 운영 체제에 의해 트리거된 다양한 이벤트에 응답할 수 있다. 주로 Node.js를 통해 실행된다.

    웹 애플리케이션 개발 : 서버 사이드에서 웹애플리케이션을 개발할 수 있다. 데이터베이스와의 상호작용, API 엔드포인트 구현, 인증 처리 등을 자바스크립트로 처리 가능하다.

    파일 시스템 액세스 : 서버 사이드에서 파일 생성, 수정, 삭제 등의 작업을 자바스크립트로 수행할 수 있다.

    네트워크 작업 : 네트워크 관련 작업을 처리할 수 있다. 예를 들어, HTTP 요청을 처리하고 RESTful API를 구축하는 등의 작업을 자바스크립트로 수행할 수 있다.


## 3. Inline CSS가 항상 좋은 것일까? 아니라면 그 이유는?

### HTML에 CSS를 정용하는 방법
* 인라인 스타일(Inline CSS)
* 내부 스타일(Embedded CSS)
* 외부 스타일(External CSS)


### 인라인 스타일(Inline CSS)

HTML 요소의 style 속성을 사용하여 스타일을 지정하는 방법

    <p style="color:red; background-color:yellow">Inline Style</p>


**장점**

HTML 태크에 직접 작성하기 때문에 특정 영역에 스타일을 적용하고 싶을 때 가장 빠른 방법

우선 순위가 높아 덮어쓰기가 쉬움

**단점**

-HTML 파일의 사이즈를 너무 크게 만들어 화면에 웹 페이지 로딩되는 시간이 늘어남

-HTML과 CSS가 코드에 뒤섞이게 되어 유지 보수가 어려움

### 내부 스타일(Embedded CSS)

HTML 문서 내부에 style 태크를 사용하여 스타일을 지정하는 방법

Inline처럼 HTML과 CSS가 완전히 뒤섞여 있지는 않음

    <!Doctype html>
    <html>
        <head>
            <title>Embedded Style</title>
            <style>
                p {
                    color : blue;
                    background-color : yellow;
                }
            </style>
        </head>
        <body>
            <p>Embedded Style</p>
        </body>
    </html>

**Inline과 Embedded의 차이점**

Inline은 특정 HTML 태크에만 style이 적용되지만, Embedded는 <head> 태그가 로드되는 하위의 모든 HTML 페이지에 스타일이 적용된다는 것

### 외부 스타일(External CSS)

HTML 문서와 별개의 파일에서 스타일을 지정하는 방법
스타일을 지정한 CSS 파일을 <link>를 이용하여 HTML 문서로 로드해야 함

일반적으로 가장 권장하는 방법

    style.css

    p {
        color: red;
    }

---

    index.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>External Style<title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <p>External Style</p>
    </body>
    </html>



**장점**
CSS HTML 물리적 파일로 분리되어 있어 유지 보수가 용이

스타일을 한 번만 작성하면 여러 HTML 문서에 작용 가능

스타일을 중복하여 작성하지 않아도 되므로 코드의 양을 줄일 수 있음

### 우선순위
    Inline > Embedded > External