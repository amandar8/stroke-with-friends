import React, { Component } from "react";
import './Profile.css'
//import users from "./routes/users.js";
import App from './App';
import Edit from './Edit.js';
import WelcomeCanvas from "./WelcomeCanvas";

let header = 'Stroke With Friends Profile';

class Profile extends Component {
    state = {
        response: ''
    };    

    logout() {
        this.props.auth.logout();
    }

    // componentDidMount() {
    //     fetch('/users', { 
    //         method: 'GET',
    //         data: {
    //             name: this.state.name,
    //             alias: this.state.alias,
    //             username: this.state.username
    //         }
    //     })
    //     .then(responce => responce.json())
    //     .then(data => this.setState({ data }));
    //     .catch(error => console.error('Error:', error));
    // }



    render() {
        return (

            <div>
                <header className="App-header">
                    <h3 className="App-title">{header}</h3>
                    
                    {/* <button type="button" className="btn btn-secondary m-3 float-left" onClick={canvas}>New Strokes</button>
                    <button type="button" className="btn btn-secondary m-3 float-left" onClick={canvas.group}>Join a Group</button>
                    <button type="button" className="btn btn-secondary m-3 float-left" onClick={edit.shit(this)}>Edit Profile</button>
                    <button type="button" className="btn btn-secondary m-3 float-right" onClick={this.logout.bind(this)}>Logout</button> */}
                </header>

                <div className="container-fluid">

                    <div className="col-11">
                        {/* <div className="row mt-5 bg-light border rounded m-4"> */}
                            <div className="col-xs-12 p-3 text-left">
                                <p>Name: {'Jake Lewis'}</p>
                                <p>Alias: {'N.J.B.'}</p>
                                <p>Email: {'jake@strokewithfriends.com'}</p>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-secondary m-3 float-left">New Strokes</button>
                    <button type="button" className="btn btn-secondary m-3 float-left">Join a Group</button>
                    <button type="button" className="btn btn-secondary m-3 float-left" id="edit-button" data-toggle="modal" data-target="#modalLRForm">
                        Edit Profile</button>
                        <Edit />
                    <button type="button" className="btn btn-secondary m-3 float-right">Logout</button>
                    {/* <button type="button" className="btn btn-secondary m-3 float-right" id="welcomecanvas-button" data-toggle="modal" data-target="#modalLRForm">
                        Logout</button>
                        <WelcomeCanvas /> */}     
                </div>
            </div>
        );
    }
}

export default Profile;
