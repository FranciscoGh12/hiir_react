import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/hiir.css'
import Menu from './components/Menu';
import WebCard from './components/WebCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="Main">
      <div className="Web-Nav">
        <header className="Nav-Header">
          <Menu />
        </header>
      </div>
      <div className="Container">
        <card className="Web-Card">
          <WebCard/>
        </card>
      </div>
    </div>
  );
}

export default App;
