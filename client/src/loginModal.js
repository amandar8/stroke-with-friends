import React, { Component } from "react";

class Loginmodal extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div id="ModalLoginForm" className="modal fade">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Login</h2>
                </div>
                <div className="modal-body">

                    <form role="form" method="POST" action="/users">
                        <input type="hidden" name="_token" value=""/>
                        <div className="form-group">
                            <label className="control-label">E-Mail Address</label>
                            <div>
                                <input type="email" className="form-control input-lg" name="email" value=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <div>
                                <input type="password" className="form-control input-lg" name="password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"/> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <button type="submit" className="btn btn-login">Login</button>

                                <a className="btn btn-link" href="">Forgot Your Password?</a>
                            </div>
                        </div>
                    </form>
                    </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Loginmodal;