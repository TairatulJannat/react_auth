import React, { Component } from 'react'
import { Link,Navigate } from "react-router-dom";
import axios from 'axios';

class Register extends Component {
  
  state = {
    name: '',
    email: '',
    password:'',
    password_confirmation:'',
    message: ''
  }

  formSubmit = (e) =>{
    e.preventDefault();
    const data ={
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation

    }

    axios.post('/register', data)
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


    if(this.state.loggedIn){
      return <Navigate to={'/profile'} replace={true}/>
    }


   return (
      <div class="row"><br></br><br></br>
        <div class ="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">Register Account</h3>

            <form onSubmit={this.formSubmit}>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">User Name</label>
                  <input type="text" class="form-control" name='name' aria-describedby="emailHelp" required onChange={(e)=> {this.setState({name:e.target.value})}}/>
                </div>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" name='emal'  aria-describedby="emailHelp" required onChange={(e)=> {this.setState({email:e.target.value})}}/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" name='password' required onChange={(e)=> {this.setState({password:e.target.value})}}/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Confirmed Password</label>
                  <input type="password" class="form-control" name='password_confirmation' required onChange={(e)=> {this.setState({password_confirmation:e.target.value})}}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button><br></br>
                    Have An Account?<Link to="/login">Login</Link><br></br>
                Forget My Password<Link to="/forget">Click Here</Link>
          </form>

        </div>

      </div>
    )
  }
}

export default Register