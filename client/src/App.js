import React, { Component } from 'react';
import WelcomeCanvas from './WelcomeCanvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app-container" className="container-fluid">
        <div className="row">
          <div className="col-12">
            <WelcomeCanvas />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
