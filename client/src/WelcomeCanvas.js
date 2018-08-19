import React, { Component } from 'react';
import './WelcomeCanvas.css';

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
          <h1>Welcome to Stroke with Friends</h1>
        </span>
        <svg id="welcome-canvas"></svg>
      </div>
    )
  }
}

export default WelcomeCanvas;