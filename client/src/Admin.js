import React, {Component} from 'react';

function UserEdit() {
  return (
    <form className="mb-4">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
    </form>
  );
}

function GroupEdit() {
  return (
    <form className="mb-4">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Group Name</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
    </form>
  );
}

class Admin extends Component {
  constructor(props){
    super(props)
    this.state = {
      adminRights: false,
      editUserHidden: true,
      editGroupHidden: true,
      userList: [],
    }
    this.userEditHidden = this.userEditHidden.bind(this);
    this.groupEditHidden = this.groupEditHidden.bind(this);
  }

  componentDidMount(){
    fetch(`/users`, {method: "GET"})
    .then((res) => res.text())
    .then((text) => JSON.parse(text))
    .then((data) => {
      this.setState({
        userList: data
      });
    })
    .then(() => {
      console.log(this.state.userList);
    })
  }

  userEditHidden() {
    this.setState({
      editUserHidden: !this.state.editUserHidden,
      editGroupHidden: true
    })
  }

  groupEditHidden() {
    this.setState({
      editGroupHidden: !this.state.editGroupHidden,
      editUserHidden: true
    })
  }

  render(){

    return (
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-11">
          <h3>Admin Panel</h3>
          <a href="/" onClick={(event) => this.props.showWelcome(event)}>Return Home</a>
          <div className='row'>
            <div className="col-12 mb-4">
              <button className="btn btn-default btn-sm" onClick={this.userEditHidden}>Edit User</button>
              <button className="btn btn-default btn-sm" onClick={this.groupEditHidden}>Edit Group</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              {this.state.editUserHidden ? null : <UserEdit />}
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              {this.state.editGroupHidden ? null : <GroupEdit />}
            </div>
          </div>
          <div className='row'>
            <div className='col-8'>
              <h6>Registered users</h6>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Alias</th>
                    <th>Admin Status</th>
                  </tr>
                </thead>
                {
                  this.state.userList.map((user, index) =>{
                    return (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.alias}</td>
                      <td>{user.admin}</td>
                    </tr>
                    );
                  })
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;