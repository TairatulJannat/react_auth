import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Nav extends Component {

  state = {
      loggedout:''
  }

  logout = ()=> {
     localStorage.clear();
     this.props.setUser(null);
  }

  render() {

      let button;
      let profile;

      if(localStorage.getItem('token')){
        button = (
          <div>
            <Link class="nav-link" to="/" onClick={this.logout}>Logout</Link>  
          </div>
        )
        profile = (
          <div>
              <Link class="nav-link" to="/profile">Profile</Link>
          </div>
        )
      }else{
        button = (
          <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/register">Register</Link>
          </li>
        </ul>
          </div>
        )
      }



    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Easy Learning</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
         {profile}
        </li>
      </ul>
      <span class="navbar-text">
        {button}
      </span>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Nav