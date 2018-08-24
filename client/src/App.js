import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import WelcomeCanvas from './WelcomeCanvas';
import Admin from './Admin';
import Canvas from './canvas'
import './App.css';
import Profile from "./Profile"
// import Login from './loginButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: {
        welcome: false,
        profile: true,
        admin: true,
        canvas: true,
      },
    }
  }

  handleHidden() {

  }

  render() {
    return (
      <Router>
        <div id="app-container" className="container-fluid">
          <div className="row">
            <div className="col-12">
              {!this.state.isHidden.welcome && <WelcomeCanvas props={this.props}/>}
              {!this.state.isHidden.canvas && <Canvas props={this.props}/>}
              {!this.state.isHidden.profile && <Profile props={this.props}/>}
              {!this.state.isHidden.admin && <Admin props={this.props}/>}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
