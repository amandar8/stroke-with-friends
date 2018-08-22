import React, { Component } from "react";
import './Project.css'
import users from "./routes/users.js";
import App from './App';

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
    //             name: users.name,
    //             alias: users.alias,
    //             username: users.username
    //         }
    //     })
    //     .then(responce => responce.json())
    //     .then(data => this.setState({ data }));
    // }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('/users');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    };

    render() {
        return (

            <div>
                <header className="App-header">
                    <h3 className="App-title">{header}</h3>
                    
                    <button type="button" className="btn btn-secondary m-3 float-left" onClick={canvas}>New Strokes</button>
                    <button type="button" className="btn btn-secondary m-3 float-left" onClick={canvas.group}>Join a Group</button>
                    <button type="button" className="btn btn-secondary m-3 float-left" onClick={edit.shit(this)}>Edit Profile</button>
                    <button type="button" className="btn btn-secondary m-3 float-right" onClick={this.logout.bind(this)}>Logout</button>
                </header>

                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-11">
                            <div className="row mt-5 bg-light border rounded">
                                <div className="col-xs-12 col-sm-2 p-3 text-right">
                                    <span>{this.state.responce.name}</span>
                                    <span>{this.state.responce.alias}</span>
                                    <span>{this.state.responce.username}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;
