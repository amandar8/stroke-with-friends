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
      profile: true,
      admin: true,
      canvas: true,
      activeUser: null,
    }
    this.showProfile = this.showProfile.bind(this);
    this.activateUser = this.activateUser.bind(this);
    this.showCanvas = this.showCanvas.bind(this);
    this.showAdmin = this.showAdmin.bind(this);
    this.showWelcome = this.showWelcome.bind(this);
  }

  showProfile() {
    this.setState({
      profile: false,
      welcome: true,
      admin: true,
      canvas: true,
    });
  }

  showCanvas(event) {
    event.preventDefault();
    this.setState({
      profile: true,
      welcome: true,
      admin: true,
      canvas: false,
    })
  }

  showAdmin(event) {
    event.preventDefault();
    this.setState({
      profile: true,
      welcome: true,
      admin: false,
      canvas: true,
    })
  }

  showWelcome(event) {
    event.preventDefault();
    this.setState({
      profile: true,
      welcome: false,
      admin: true,
      canvas: true,
    })
  }

  activateUser(userData){
    this.setState({
      activeUser: userData
    });
    this.showProfile();
  }

  render() {
    return (
      <Router>
        <div id="app-container" className="container-fluid">
          <div className="row">
            <div className="col-12">
              {!this.state.welcome && <WelcomeCanvas props={this.props} showProfile={this.showProfile} showCanvas={this.showCanvas} showAdmin={this.showAdmin} activeUser={this.state.activeUser} activateUser={this.activeUser}/>}
              {!this.state.canvas && <Canvas props={this.props} showWelcome={this.showWelcome}/>}
              {!this.state.profile && <Profile props={this.props} showWelcome={this.showWelcome} showCanvas={this.showCanvas} activeUser={this.state.activeUser}/>}
              {!this.state.admin && <Admin props={this.props} showWelcome={this.showWelcome} showCanvas={this.showCanvas} activeUser={this.state.activeUser}/>}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
