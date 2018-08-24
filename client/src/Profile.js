import React, { Component } from "react";
import './Profile.css'
import Edit from './Edit.js';



class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            response: null,
            id: null,
            data: null,
        }; 
    }
   

    logout() {
        this.props.auth.logout();
    }

    // componentDidMount() {
    //     if (this.state.id !== undefined && this.state.id !== null){
    //         fetch(`/users/id/${this.state.id}`, { 
    //             method: 'GET',
    //             mode: 'cors',
    //             headers: {
    //                 "Content-Type": "application/json; charset=utf-8"
    //             },
    //             redirect: "follow",
    //             referrer: "no-referrer"
    //         })
    //         .then(responce => responce.json())
    //         .then(data => this.setState({data: data}))
    //         .catch(error => console.error('Error:', error));
    //     }
    // }



    render() {
        return (
            <div>
           <header className="App-header text-dark">
             <h3>User Profile</h3>
             <a href="/" onClick={(event) => this.props.showWelcome(event)}>Return Home</a>
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
                        <div className="profileInfoColor d-flex"><div className="icon-backgroundColor"><i className="fas fa-user-alt mx-2"></i></div>{this.props.activeUser.username}
                        </div>
                    </div>
                    
                    <div>
                       <div>Email
                       </div>
                       <div className="profileInfoColor d-flex"><div className="icon-backgroundColor"><i className="fas fa-envelope mx-2"></i></div>{this.props.activeUser.email}
                      </div>
                    </div>

                     <div>
                       <div>Alias
                       </div>
                       <div className="profileInfoColor d-flex"><div className="icon-backgroundColor"><i className="fas fa-shield-alt mx-2"></i></div>{this.props.activeUser.alias}
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
