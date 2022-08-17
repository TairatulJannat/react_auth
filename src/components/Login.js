import axios from 'axios';
import React, { Component } from 'react'
import { Link, Navigate} from "react-router-dom";


class Login extends Component {

  state ={
    email: '',
    password: '',
    message: ''
  }

  formSubmit = (e) =>{
    e.preventDefault();
    const data ={
      email: this.state.email,
      password: this.state.password,
    }

    axios.post('/login', data)
    .then((response) => {
      localStorage.setItem('token',response.data.token);
      this.setState({
        loggedIn:true
      })
      this.props.setUser(response.data.user);
    })
    .catch( (error) => {
      console.log(error);
    });
  }


  render() {

    if(localStorage.getItem('token')){
       return  <Navigate to={'profile'} replace={true}/>
    }

    if(this.state.loggedIn){
      return <Navigate to={'/profile'} replace={true}/>
    }
    
    return (
      <div class="row"><br></br><br></br>
        <div class ="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">Login Account</h3>
            <form onSubmit={this.formSubmit}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" name="email"  aria-describedby="emailHelp" required onChange={(e)=> {this.setState({email:e.target.value})}}/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label" >Password</label>
                  <input type="password" name="password" class="form-control" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button><br></br>
                Forget My Password<Link to="/forget">Click Here</Link>
          </form>

        </div>

      </div>
    )
  }
}

export default Login