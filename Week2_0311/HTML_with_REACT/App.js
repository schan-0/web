import './App.css';
import thumbnail from './thumbnail.jpg';
import favorites from './favorites-image.jpg';
import currently from './currently-image.jpg'

function App() {
  return (
    <div class="container">
      <div class="title-box">
        <div class="circle-image">
          <img src={thumbnail} alt="이미지" class="circle-image"></img>
        </div>
        <div class="title-text">
          <h1>Hong Gil-Dong</h1>
          <p>I'm a computer science student passionate about building innovative software.
            I thrive in collaborative environments and enjoy solving complex problems with code.
            Eager to learn and grow, I'm excited to contribute my skills to a dynamic team.</p>
        </div>
      </div>

      <div class="content-box">
        <div class="content-item">
          <h2 class="content-title">Favorite</h2>
          <div class="fade-image">
            <img src={favorites} alt="이미지"></img>
          </div>
          <h2 class="content-element">Travel</h2>
        </div>
        <div class="content-item">
          <h2 class="content-title">Recently</h2>
          <div class="fade-image">
            <img src={currently} alt="이미지"></img>
          </div>
          <h2 class="content-element">Learning React</h2>
        </div>
        <div class="content-item">
          <h2 class="content-title">Learned</h2>
          <div class="learned-items">
            <div class="content-element">- Algorithm</div>
            <div class="content-element">- Data Structure</div>
            <div class="content-element">- Operating System</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
