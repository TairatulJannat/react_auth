import React, { Component } from 'react'
import { Navigate } from "react-router-dom";

class Profile extends Component {
  render() {
    let name;
    let email;
    if(this.props.user){
        name = this.props.user.name;
        email = this.props.user.email;
    }
    if(!localStorage.getItem('token')){
          return  <Navigate to={'login'} replace={true}/>
    }


    return (
      <div class="row"><br></br><br></br>
      <div class ="jumbotron col-lg-4 offset-lg-4">
          <h3 class="text-center">Profile</h3>
            <ul class="list-group">
              <li class="list-group-item">Name: {name}</li>
              <li class="list-group-item" >Email: {email}</li>
            </ul>
      </div>
      </div>
    )
  }
}

export default Profile