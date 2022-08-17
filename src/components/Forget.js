import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class Forget extends Component {

  state ={
    email: '',
    message: ''
  }

  
  formSubmit = (e) =>{
    e.preventDefault();
    const data ={
      email: this.state.email
    }

    axios.post('/forgetpassword', data)
    .then((response) => {
      this.setState({message:response.data.message})
      document.getElementById('forgetform').reset();
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
            <form onSubmit={this.formSubmit} id="forgetform">
                  {error}
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control"  aria-describedby="emailHelp" required onChange={(e)=> {this.setState({email:e.target.value})}}/>
                </div>

                <button type="submit" class="btn btn-primary">Forget Password</button><br></br>
                  Have An Account?<Link to="/login">Login</Link><br></br>
                 Dpn't have Account?<Link to="/register">Register</Link>
          </form>

        </div>

      </div>
      
    )
  }
}

export default Forget