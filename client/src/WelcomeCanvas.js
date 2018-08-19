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
      <div id="svg-container" className="row mb-5 view-height">
        <svg id="welcome-canvas"></svg>
      </div>
    )
  }
}

export default WelcomeCanvas;