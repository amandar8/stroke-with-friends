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
               <nav className="col-3 p-0 border-right sidebar"> 
                    <div class="sidebar-header d-flex align-items-center justify-content-center p-3">
                      <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/25613_425815345448_7787727_n.jpg?_nc_cat=0&oh=8a84ca4ef69335e4f208c12d77db47ab&oe=5C06665E" className="fullWidth profilePictureSize"></img> 
                    </div>
                    <ul class="list-unstyled components">
                        <li>
                            <a href="/clientHome" class="d-flex align-items-center sidebarFontWeight">
                                <i class="fas fa-user mr-2"></i>
                                Profile</a>
                        </li>
                        <li>
                            <a href="#" class="d-flex align-items-center">
                                <i class="fas fa-user mr-2"></i>
                                Past Canvases</a>
                        </li>
                        <li>
                            <a href="#" class="d-flex align-items-center">
                                <i class="fas fa-paint-brush mr-2"></i>
                                New Strokes</a>
                        </li>
                        <li>
                            <a href="#" class="d-flex align-items-center">
                                <i class="fas fa-users mr-2"></i>
                                Join A Group</a>
                        </li>
                        <li>
                            <a href="" class="d-flex align-items-center">
                                <i class="fas fa-sign-out-alt mr-2"></i>
                                Log Out</a>
                        </li>
                    </ul>
                </nav>
         
               <div className="col-9 p-0">
                 <div className="container-fluid fullHeight p-0">
                 <div className="row fullHeight d-flex justify-content-center">
                 <div className="col-8 profileInfo d-flex flex-column justify-content-between mt-5">
                   {/* <section className=""> */}
                     
                    <div>
                       <div>Username
                       </div>
                        <div className="profileInfoColor d-flex"><div className="icon-backgroundColor mr-3"><i className="fas fa-user-alt mx-2"></i></div>this.props.activeUser.username
                        </div>
                    </div>
                    
                    <div>
                       <div>Name
                       </div>
                       <div className="profileInfoColor d-flex"><div className="icon-backgroundColor mr-3"><i className="fas fa-envelope mx-2"></i></div>this.props.activeUser.email
                      </div>
                    </div>
                     <div>
                       <div>Alias
                       </div>
                       <div className="profileInfoColor d-flex"><div className="icon-backgroundColor mr-3"><i className="fas fa-shield-alt mx-2"></i></div>this.props.activeUser.alias
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