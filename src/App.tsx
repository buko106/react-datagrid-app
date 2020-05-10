import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import style from './App.module.css';

const App: FunctionComponent = () => (
  <div className={style.app}>
    <header className={style.appHeader}>
      <img src={logo} className={style.appLogo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={style.appLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
