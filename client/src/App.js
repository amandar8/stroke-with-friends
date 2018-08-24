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
      welcome: false,
      profile: false,
      admin: true,
      canvas: true,
      activeUser: null,
    }
    this.showProfile = this.showProfile.bind(this);
    this.activeUser = this.activeUser.bind(this);
  }

  showProfile() {
    this.setState({
      profile: false,
      welcome: true,
      admin: true,
      canvas: true,
    });
  }

  activeUser(userData){
    this.setState({
      activeUser: userData
    });
  }

  render() {
    return (
      <Router>
        <div id="app-container" className="container-fluid">
          <div className="row">
            <div className="col-12">
              {!this.state.welcome && <WelcomeCanvas props={this.props} showProfile={this.showProfile} userData={this.state.activeUser}/>}
              {!this.state.canvas && <Canvas props={this.props}/>}
              {!this.state.profile && <Profile props={this.props} />}
              {!this.state.admin && <Admin props={this.props}/>}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
