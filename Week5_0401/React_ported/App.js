import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>홍길동</h1>
      <p className="biography">조선 시대의 의적이며 민중 영웅이다. 탐관오리들의 재물을 빼앗아 가난한 백성들에게 나누어 주었다고 전해진다.</p>
      <p className="introduction">의협심이 강하고 뛰어난 무술 실력을 가진 인물로 묘사된다.</p>

      <Comments />
    </div>
  );
}

function Comments() {
  return (
    <div className="comments">
      <h2>댓글</h2>
      <Comment nickname="익명1" content="정말 멋진 분이시네요!" />
      <Comment nickname="익명2" content="저도 본받고 싶어요." />
      <Comment nickname="익명3" content="정말 대단하세요!" />
    </div>
  );
}

function Comment({ nickname, content }) {
  return (
    <div className="comment">
      <span className="nickname">{nickname}</span>
      <p>{content}</p>
    </div>
  );
}

export default App;