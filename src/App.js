import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';

class App extends Component {
  
  constructor(){
    const date = new Date();
    super();
    this.state={
      employeeList : [
        {
          firstName : "Muhammad",
          lastName :  "Hoti",
          email : "muhammad.hoti@gmail.com",
          salary : "50,000",
          joinDate : date.getDate()+"/"+(+date.getMonth()+1)+"/"+date.getFullYear()

        },
        {
          firstName : "Zaeem",
          lastName :  "Chohan",
          email : "zeece96@gmail.com",
          salary : "70,000",
          joinDate : date.getDate()+"/"+(+date.getMonth()+1)+"/"+date.getFullYear()

        },
        {
          firstName : "Hameez",
          lastName :  "Chohan",
          email : "hrc10@gmail.com",
          salary : "90,000",
          joinDate : date.getDate()+"/"+(+date.getMonth()+1)+"/"+date.getFullYear()

        }
      ],
      addEmployee : false,
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

  addEmployee() {
      this.setState({
          
          addEmployee : true,
        })
  }

  cancelAddEmployee(){
    this.setState({
      addEmployee : false,
    })
  }

  addEmployeeData(){
    
    const date = new Date();
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const email2 = document.getElementById(`email2`).value;
    const salary = document.getElementById(`salary`).value;
    const joinDate = date.getDate()+"/"+(+date.getMonth()+1)+"/"+date.getFullYear()
    this.state.employeeList.push(
      {
        firstName : firstName,
        lastName :  lastName,
        email : email2,
        salary : salary,
        joinDate : joinDate

      },
    )
      this.setState({
        addEmployee : false,
      })
  }

  logOut(){
    this.setState({
      user : false
    })
    
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
        <button type="button" className="btn btn-primary" onClick={()=>{this.login()}}>Login</button>
      </form>
    </div>  
    )
  }

  rendertoDoList(){
    return(
      
        <div className="renderTodoList">
          <h1 className="todoHeader">Employee List</h1>
          <div className="employeeList">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col" className="centerAll">#</th>
                  <th scope="col" className="centerAll">First Name</th>
                  <th scope="col" className="centerAll">Last Name</th>
                  <th scope="col" className="centerAll">Email</th>
                  <th scope="col" className="centerAll">Salary</th>
                  <th scope="col" className="centerAll">Join Date</th>
                  <th scope="col" className="centerAll">Edit</th>
                  <th scope="col" className="centerAll">Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.state.employeeList.map((value, index)=>{
                    return(
                          <tr>
                            <th scope="row" id={index+1}>{index+1}</th>
                            <td className="centerAll" id={index+2}>{value.firstName}</td>
                            <td className="centerAll" id={index+3}>{value.lastName}</td>
                            <td className="centerAll" id={index+4}>{value.email}</td>
                            <td className="centerAll" id={index+5}>{value.salary}</td>
                            <td className="centerAll" id={index+6}>{value.joinDate}</td>
                            <td className="centerAll" id={index+7}><button className="btn btn-primary">Edit</button></td>
                            <td className="centerAll" id={index+8}><button className="btn btn-danger">Delete</button></td>
                          </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
          <button className="btn btn-success" onClick={()=>{
            this.addEmployee()
          }}>Add Employee</button>
        </div>
    )
    
  }

  renderAddEmployee() {
    return(
      <div className="loginForm">
        <h1 className="todoHeader">Add Employee</h1>
        <form className="addEmployeeForm">
        <div className="form-group">
          <label >First Name</label>
          <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
        </div>
        <div className="form-group">
          <label >Last Name</label>
          <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" id="email2" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label >Salary</label>
          <input type="text" className="form-control" id="salary" aria-describedby="emailHelp" placeholder="Enter Salary"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>{
        this.addEmployeeData()
        }}>Add</button>
        </form>
        <button className="btn btn-danger addEmployeeForm" onClick={()=>{
        this.cancelAddEmployee()
        }}>Cancel</button>
      </div>
    )
  }

  renderLogOut(){
    return(
      <div className="logOut">
        <button className="btn btn-warning" onClick={()=>{
          this.logOut();
        }}>Log Out</button>
      </div>
    )
  }

  render() {
    return (
      
      <div className="App">
      {this.renderHeader()}
      {!this.state.user && this.renderLogin()}
      {this.state.user && !this.state.addEmployee && this.rendertoDoList()}
      {this.state.addEmployee && this.renderAddEmployee()}
      {this.state.user && !this.state.addEmployee && this.renderLogOut()}
      </div>
    );
  }
}

export default App;
