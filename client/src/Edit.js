import React, { Component } from "react";
import './login.css';

class Edit extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            name: "",
            alias: "",
            confirm_password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }
 
    onChange = event => {
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    onSubmit = event => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            alias: this.state.alias,
            confirm_password: this.state.confirm_password
        };
        console.log('Send this in a POST request:', user)
        this.handleClearForm(event);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.alias.length > 0;
    }

    registerUser(event) {
        event.preventDefault();
    
        if (this.state.password !== this.state.confirm_password) {
            alert('Passwords don\'t match');
            return;
        }
    
        let userData = {};
        userData.name = this.state.name;
        userData.alias = this.state.alias;
        userData.username = this.state.username;
        userData.password = this.state.password;
        console.log('New user data', JSON.stringify(userData));

        fetch(`/auth/register`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));
    
        this.setState({
            username: "",
            password: "",
            name: "",
            alias: "",
            confirm_password: ""
        });
    }
    
    handleClearForm(event) {
        event.preventDefault();
        this.setState({
            username: "",
            password: "",
            name: "",
            alias: "",
            confirm_password: ""
        });
    }

    render() {
        return(
            <div className="modal fade" id="edit_form" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-c-tabs">
                            <div className="tab-content">
                                <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                                    <div className="modal-body mb-1">
                                        <form className="login-form" onSubmit={(event => this.onSubmit(event))}>
                                            <div class="modal-header">
                                                <h2>Stroke With Friends Edit User Profile</h2>
                                            </div>

                                            <div className="md-form form-sm mb-5">
                                                <i className="fa fa-user prefix"></i>
                                                <input type="text" id="name" className="form-control form-control-sm validate"
                                                name="name" value={this.state.name} onChange={this.onChange}/>
                                                <label data-error="wrong" data-success="right" htmlFor="name">New Full Name</label>
                                            </div>

                                            <div className="md-form form-sm mb-5">
                                                <i className="fa fa-user-secret prefix"></i>
                                                <input type="text" id="alias" className="form-control form-control-sm validate"
                                                name="alias" value={this.state.alias} onChange={this.onChange}/>
                                                <label data-error="wrong" data-success="right" htmlFor="alias">New Alias</label>
                                            </div>

                                            <div className="md-form form-sm mb-5">
                                                <i className="fa fa-envelope prefix"></i>
                                                <input type="email" autoComplete='off' id="username" className="form-control form-control-sm validate"
                                                name="username" value={this.state.username} onChange={this.onChange}/>
                                                <label data-error="wrong" data-success="right" htmlFor="username">New Email</label>
                                            </div>

                                            <div className="md-form form-sm mb-5">
                                                <i className="fa fa-lock prefix"></i>
                                                <input type="password" id="password" className="form-control form-control-sm validate"
                                                name="password" value={this.state.password} onChange={this.onChange}/>
                                                <label data-error="wrong" data-success="right" htmlFor="password">New Password</label>
                                            </div>
    
                                            <div className="md-form form-sm mb-4">
                                                <i className="fa fa-lock prefix"></i>
                                                <input type="password" id="confirm_password" className="form-control form-control-sm validate"
                                                name="confirm_password" value={this.state.confirm_password} onChange={this.onChange}/>
                                                <label data-error="wrong" data-success="right" htmlFor="confirm_password">Confirm password</label>
                                            </div>

                                            <div className="text-center form-sm mt-2">
                                                <button className="btn btn-info" onSubmit={this.handleFormSubmit}> Save <i className="fa fa-sign-in ml-1"></i></button>
                                            </div>
                                        </form>
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

export default Edit;