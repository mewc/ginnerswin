import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <a
            className="App-link linkylink"
            href="https://apps.apple.com/au/app/ginners-netball/id1474243413"
            target="_blank"
            rel="noopener noreferrer"
          >
            iOS App
          </a>
          <a
            className="App-link linkylink"
            href="https://hiscores.ginners.win"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hiscores
          </a>
        </div>
        <br />

        <div>
          <a
            className="App-link"
            href="https://instagram.com/ginners_win/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
        </a>
        </div>
      </header>
    </div >
  );
}


export default App;
