import React, { Component } from "react";
import {withRouter, BrowserRouter} from 'react-router-dom';
import './login.css';

class Loginmodal extends Component{
  constructor(props){
    super(props);

    this.state = {
        email: "",
        password: "",
        full_name: "",
        alias: "",
        new_email: "",
        new_password: "",
        confirm_password: "",
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }
 
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.history.push("/thank-you");
    }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  registerUser(event) {
    event.preventDefault();
    let userData = {};
    userData.name = this.state.full_name;
    userData.alias = this.state.alias;
    userData.username = this.state.email;
    userData.password = this.state.new_password;

    // fetch('url here', {
    //     method: 'POST',
    //     body: JSON.stringify(userData),
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       }
    // }) 
    // .then(res => res.json())
    // .then(reponse => console.log('Success:',response))
    // .catch(error => console.error('Error:', error));
  }

  render() {
      const {email, password, full_name, alias, new_email, new_password, confirm_password} = this.state;

    return(
        <div className="modal fade" id="modalLRForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">
                <div className="modal-c-tabs">
                    <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fa fa-user mr-1"></i> Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fa fa-user-plus mr-1"></i> Register</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                            <div className="modal-body mb-1">
                                <form className="login-form" onSubmit={(event => this.onSubmit(event))}>
                                <div className="md-form form-sm mb-5">
                                    <i className="fa fa-envelope prefix"></i>
                                    <input type="email" id="email" className="form-control form-control-sm validate" 
                                    name="email" value={email} onChange={this.onChange}/>
                                    <label data-error="wrong" data-success="right" htmlFor="email">Your email</label>
                                </div>
    
                                <div className="md-form form-sm mb-4">
                                    <i className="fa fa-lock prefix"></i>
                                    <input type="password" id="password" className="form-control form-control-sm validate"
                                    name="password" value={password} onChange={this.onChange}/>
                                    <label data-error="wrong" data-success="right" htmlFor="password">Your password</label>
                                </div>
                                <div className="text-center mt-2">
                                    <button className="btn btn-info" disabled={!this.validateForm()}>Log in <i className="fa fa-sign-in ml-1"></i></button>
                                </div>
                                </form>
                            </div>
                            
                            <div className="modal-footer">
                                <div className="options text-center text-md-right mt-1">
                                    <p>Forgot <a href="" className="blue-text">Password?</a></p>
                                </div>
                                <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                            </div>
    
                        </div>
                       
    
                       
                        <div className="tab-pane fade" id="panel8" role="tabpanel">
    
                         
                            <div className="modal-body">
                            <div className="md-form form-sm mb-5">
                                    <i className="fa fa-user prefix"></i>
                                    <input type="text" id="full_name" className="form-control form-control-sm validate"
                                    name="full_name" value={full_name} onChange={this.onChange}/>
                                    <label data-error="wrong" data-success="right" htmlFor="full_name">Your Full Name</label>
                                </div>

                               <div className="md-form form-sm mb-5">
                                    <i className="fa fa-user-secret prefix"></i>
                                    <input type="text" id="alias" className="form-control form-control-sm validate"
                                    name="alias" value={alias} onChange={this.onChange}/>
                                    <label data-error="wrong" data-success="right" htmlFor="alias">Create An Alias</label>
                                </div>

                                <div className="md-form form-sm mb-5">
                                    <i className="fa fa-envelope prefix"></i>
                                    <input type="email" id="new_email" className="form-control form-control-sm validate"
                                    name="new_email" value={new_email} onChange={this.onChange}/>
                                    <label data-error="wrong" data-success="right" htmlFor="new_email">Your email</label>
                                </div>
    
                                <div className="md-form form-sm mb-5">
                                    <i className="fa fa-lock prefix"></i>
                                    <input type="password" id="new_password" className="form-control form-control-sm validate"
                                    name="new_password" value={new_password} onChange={this.onChange}/>
                                    <label data-error="wrong" data-success="right" htmlFor="new_password">Your password</label>
                                </div>
    
                                <div className="md-form form-sm mb-4">
                                    <i className="fa fa-lock prefix"></i>
                                    <input type="password" id="confirm_password" className="form-control form-control-sm validate"
                                    name="confirm_password" value={confirm_password} onChange={this.onChange}/>
                                    <label data-error="wrong" data-success="right" htmlFor="confirm_password">Confirm password</label>
                                </div>
    
                                <div className="text-center form-sm mt-2">
                                    <button className="btn btn-info" disabled={!this.validateForm()}> Sign up <i className="fa fa-sign-in ml-1"></i></button>
                                </div>
    
                            </div>
                            
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                        
                    </div>
    
                </div>
            </div>
            
        </div>
    </div>
    );
  }
}

export default withRouter(Loginmodal);