import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';

class App extends Component {

  constructor(){

    super();
    this.state={
      
    }
  }

  //Event Functions

  login() {
    const email = document.getElementById(`email`).value;
    const password = document.getElementById('password').value;
    email === "admin@domain.com" && password === "admin" ? this.setState({
      user:{
        email : email,
        password : password    
      }
        }) : swal("Access Deneid", "Please Enter Correct Email And Password");
  }

  //JSX Rendering Functions

  renderHeader(){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome To Employee Management System</h1>
      </header>
    )
  }

  renderLogin(){
    return(
    <div className="loginForm">
      <h1 className="loginFormHeader"><b>Login</b></h1>
      <form>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>{this.login()}}>Submit</button>
      </form>
    </div>  
    )
  }

  renderList(){
    return(
      <header className="App-header">
        <h1 className="App-title">Login Pe Ye Dikhana Hai</h1>
      </header>
    )
  }

  render() {
    
    return (
      
      <div className="App">
      {this.renderHeader()}
      {!this.state.user && this.renderLogin()}
      {this.state.user && this.renderList()}
      </div>
    );
  }
}

export default App;
