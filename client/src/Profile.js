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

    componentDidMount() {
        fetch(`/users/id/${this.state.id}`, { 
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            redirect: "follow",
            referrer: "no-referrer"
        })
        .then(responce => responce.json())
        .then(data => this.setState({ data }))
        .catch(error => console.error('Error:', error));
    }



    render() {
        return (
         <div>
           <header className="App-header">
             <h3 className="App-title">{header}</h3>
           </header>
           <div className="container-fluid p-0 ">
             <div className="row bodySize m-0">
               <div className="col-3 blue p-0 "> 
                 <img src="https://picsum.photos/200/300?man" className="fullWidth profilePictureSize"></img>
               </div>
               <div className="col-9 p-0">
                 <div className="container-fluid fullHeight p-0">
                 <div className="row fullHeight d-flex justify-content-center">
                 <div className="col-8 profileInfo d-flex flex-column justify-content-between mt-5">
                   {/* <section className=""> */}
                     
                    <div>
                       <div>Username
                       </div>
                        <div className="profileInfoColor d-flex"><div className="icon-backgroundColor"><i className="fas fa-user-alt mx-2"></i></div>this.props.userData.username
                        </div>
                    </div>
                    
                    <div>
                       <div>Email
                       </div>
                       <div className="profileInfoColor d-flex"><div className="icon-backgroundColor"><i className="fas fa-envelope mx-2"></i></div>this.props.userData.email
                      </div>
                    </div>

                     <div>
                       <div>Alias
                       </div>
                       <div className="profileInfoColor d-flex"><div className="icon-backgroundColor"><i className="fas fa-shield-alt mx-2"></i></div>this.props.userData.alias
                       </div>
                    </div>


                   {/* </section> */}
                   </div>
                   </div>
                 </div>

               </div>
             </div>
           </div>
                <Edit />
                <div>
                    <button type="button" className="btn btn-secondary m-3 float-left">New Strokes</button>
                    <button type="button" className="btn btn-secondary m-3 float-left">Join a Group</button>
                    <button type="button" className="btn btn-secondary m-3 float-left" id="edit-button" data-toggle="modal" data-target="#edit_form">
                        Edit Profile</button>
                        <Edit />
                    <button type="button" className="btn btn-secondary m-3 float-right">Logout</button>   
                </div>
            </div>
        );
    }
}

export default Profile;