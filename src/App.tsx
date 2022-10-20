import React from 'react';
import logo from './logo.svg';
import StatusBladeLogo from './images/logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={StatusBladeLogo} className="App-logo" alt="logo" />
        <h1 className="statusblade">Statusblade</h1>
        <p className="tag-name">
          A SUITE OF SOCIAL MEDIA TOOLS FOR BRANDS AND CREATORS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming Soon
        </a>
      </header>
    </div>
  );
}

export default App;
