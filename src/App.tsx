// noinspection CheckImageSize

import React from 'react';
import './App.css';
import Horoscope from './Horoscope';

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <p className="main-title">
                <img src="/dougco-logo.png" width="40%" height="40%"
                     alt="DougCo logo" title="DougCo logo"/>
                <br/>
                Horoscope Service
            </p>
            <Horoscope />
        </header>
      </div>
  );
}

export default App;
