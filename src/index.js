import React from 'react';
import ReactDOM from 'react-dom';
import '../src/stylesheet/main.css';

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <header className="flex">
          <img className="phlogo" src="./ph-logo.png" alt="" />
          <input
            className="searchbar"
            type="text"
            placeholder="Discover your next favorite thing.."
          />
          <nav>
            <a className="nav1" href="#">
              Deals
            </a>
            <a className="nav1" href="#">
              Jobs
            </a>
            <a className="nav1" href="#">
              Makers
            </a>
            <a className="nav1" href="#">
              Radio
            </a>
            <a className="nav1" href="#">
              Ship
            </a>
            <a className="nav1" href="#">
              ...
            </a>
          </nav>
          <button className="login1">LOG IN</button>
          <button className="login">SIGN UP</button>
        </header>
      </div>
      <div className="container wrapper">
        <div className="cards flex3">
          <div>
            <div className="flex2">
              <h2>TODAY</h2>
              <h4>POPULAR NEWEST</h4>
            </div>
          </div>
          {/* first box */}
          <div className="leftBox flex4">
            <img className="singleimg" src="./single.png" alt="" />
            <div className="flex-between">
              <div className="firstprod">
                <h3>Singleton UI Kit</h3>
                <p>Stylish and playful layouts for beautiful landings</p>
                <div className="chatone">
                  <img className="chaticon" src="./chat.png" alt="" />
                  <p>Design Tools</p>
                </div>
              </div>
              <div className="trianglebox">
                <img className="triangle" src="./triangle.png" alt="" />
                <p>22</p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <h1>Makers Working Today</h1>
            <div className="rightBox flex5">
              <img className="rightbox-img" src="./img1.jpeg" alt="" />
              <img className="rightbox-img" src="./img2.jpeg" alt="" />
              <img className="rightbox-img" src="./img3.jpeg" alt="" />
              <img className="rightbox-img" src="./img4.jpeg" alt="" />
              <img className="rightbox-img" src="./img5.jpeg" alt="" />
              <img className="rightbox-img" src="./img6.jpeg" alt="" />
              <br></br>
              <img className="rightbox-img" src="./img6.jpeg" alt="" />
              <img className="rightbox-img" src="./img5.jpeg" alt="" />
              <img className="rightbox-img" src="./img4.jpeg" alt="" />
              <img className="rightbox-img" src="./img3.jpeg" alt="" />
              <img className="rightbox-img" src="./img2.jpeg" alt="" />
              <img className="rightbox-img" src="./img1.jpeg" alt="" />
              <hr className="right-panel-hr"></hr>

              <a href="#">
                <p className="startworking">START WORKING NOW</p>
              </a>
            </div>

            {/* Radio */}
            <div>
              <h6>Product Hunt Radio</h6>
              <div className="producthuntradio">
                <p className="text">
                  What not to do when marketing your product
                </p>
                <img className="rightbox-img1" src="./img7.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
