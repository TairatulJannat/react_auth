import React, { Component } from 'react'
import { Link} from "react-router-dom";
import axios from 'axios';

export class Reset extends Component {

  state = {
    token: '',
    email: '',
    password:'',
    password_confirmation:'',
    message: ''
  }

  formSubmit = (e) =>{
    e.preventDefault();
    const data ={
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation

    }

    axios.post('/resetpassword', data)
    .then((response) => {
      this.setState({message:response.data.message})
      document.getElementById('formsubmit').reset();
    })
    .catch( (error) => {
      this.setState({message:error.response.data.message})
    });
  }


  render() {

    let error = "";
    if(this.state.message){
        error=(
          <div>
            <div class="alert alert-danger" role="alert">
                {this.state.message}
            </div>
          </div>
        )
    }
    
    return (
      <div class="row"><br></br><br></br>
        <div class ="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">Forget Password</h3>

            <form onSubmit={this.formSubmit} id="formsubmit">

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Pin Code</label>
                  <input type="text" class="form-control" name='token' aria-describedby="emailHelp" required onChange={(e)=> {this.setState({token:e.target.value})}}/>
                </div>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" name='emal'  aria-describedby="emailHelp" required onChange={(e)=> {this.setState({email:e.target.value})}}/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Current Password</label>
                  <input type="password" class="form-control" name='password' required onChange={(e)=> {this.setState({password:e.target.value})}}/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">New Password</label>
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

export default Reset