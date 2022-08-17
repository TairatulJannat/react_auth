import React, { Component } from 'react'
import Nav from './Nav';
import Home from '../components/Home';
import Login from '../components/Login';
import Forget from '../components/Forget';
import { Routes, Route } from "react-router-dom";
import Register from '../components/Register';
import Profile from '../components/Profile';
import Reset from '../components/Reset';
import axios from 'axios';
 

class Header extends Component {
  state = {
    user:{}
  }
   
  componentDidMount(){

    axios.get('/user')
      .then((response)=> {
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
 setUser = (user) =>{
    this.setState({user:user})
 }


  render() {
    return (
      <div>
        <Nav user={this.state.user} setUser={this.setUser}/>
        <Routes>
          <Route exact path="/" element={<Home setUser={this.setUser}/>} />
          <Route path="/register" element={<Register setUser={this.setUser} />} />
          <Route path="/profile" element={<Profile user={this.state.user}/>} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset/:id" element={<Reset />} />
        </Routes>
      </div>
    )
  }
}

export default Header;