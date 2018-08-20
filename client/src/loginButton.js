import React, { Component } from "react";
import Loginmodal from "./loginModal";

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      showModal: false,
      loading: false,
      error: null
    };

  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }
 
  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
  
  onLoginSuccess(method, response) {
    console.log('logged successfully with ' + method);
  }
 
  onLoginFail(method, response) {
    console.log('logging failed with ' + method);
    this.setState({
      error: response
    })
  }
 
  startLoading() {
    this.setState({
      loading: true
    })
  }
 
  finishLoading() {
    this.setState({
      loading: false
    })
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }

  render() {
    return(
      <div>
      <button type="button" className="btn btn-primary btn-md" id="login-button" data-toggle="modal" data-target="#ModalLoginForm">
        Log In
      </button>
      <Loginmodal />
      </div>
    );
  }
}

export default Login;