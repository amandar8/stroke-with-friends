import React, { Component } from 'react';
import './WelcomeCanvas.css';
import Loginbutton from './loginButton';

import { BrowserRouter as Route} from "react-router-dom"; 

class WelcomeCanvas extends Component {
  constructor(props){
    super(props)
    this.state ={
      props: props,
    }
  }

  render() {
    return (
      <div id="svg-container" className="row mb-5 view-height d-flex justify-content-center">
        <span className="raise-header text-center position-header p-4 bg-white rounded">
          <h2>Welcome to...</h2>
          <h1>Stroke with Friends</h1>
          <Loginbutton />
          {/* <Route path='/loginButton' component={Login}/> */}
        </span>
        <svg id="welcome-canvas"></svg>
      </div>
    )
  }
}

export default WelcomeCanvas;