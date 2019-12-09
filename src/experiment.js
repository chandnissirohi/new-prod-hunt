import React from 'react';
import ReactDOM from 'react-dom';
import '../src/stylesheet/experiment.css';

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <header className="flex header">
          <img src="./ph-logo.png" alt="" />
          <input
            type="text"
            placeholder="Discover your next favorite thing.."
          />
          <nav>
            <a href="#">Deals</a>
            <a href="#">Jobs</a>
            <a href="#">Makers</a>
            <a href="#">Radio</a>
            <a href="#">Ship</a>
            <a href="#">...</a>
          </nav>
          <button className="login1">LOG IN</button>
          <button className="login">SIGN UP</button>
        </header>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
