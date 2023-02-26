import React, { Component } from 'react';

class GeneralInfoV2 extends Component {
  constructor() {
    super();

    this.state = {
      displayPretty: false,
      inputs: {
        fname: '',
        lname: '',
        phoneNum: '',
        email: '',
      },
    }
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    this.setState({
      inputs: {
      ...this.state.inputs,
      [e.target.name]: e.target.value
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      displayPretty: true
    });
  }

  toggleEdit = (e) => {
    this.setState({
      displayPretty: false
    })
  }  

  render() {
    // const { firstname, outputFirstName } = this.state;
    const generalInfoForm = 
      <form onSubmit={this.onSubmit}>
        <label htmlFor='fname'>First Name:</label>
        <input type='text' id='fname' name='fname' onChange={this.handleChange} value={this.state.inputs.fname}></input>
        
        <label htmlFor='lname'>Last Name:</label>
        <input type='text' id='lname' name='lname' onChange={this.handleChange} value={this.state.inputs.lname}></input>
        
        <label htmlFor='phoneNum'>Phone Number:</label>
        <input type='text' id='phoneNum' name='phoneNum' onChange={this.handleChange} value={this.state.inputs.phoneNum}></input>
        
        <label htmlFor='email'>Email Address:</label>
        <input type='text' id='email' name='email'onChange={this.handleChange} value={this.state.inputs.email}></input>
        
        <button type='submit'>Done</button>
      </form>;

    const generalInfoDisplay =
      <div>
        <h1>First Name: {this.state.inputs.fname}</h1>
        <h1>Last Name: {this.state.inputs.lname}</h1>
        <h1>Phone Number: {this.state.inputs.phoneNum}</h1>
        <h1>E-mail Address: {this.state.inputs.email}</h1>
        <button onClick={this.toggleEdit}>Edit</button>
      </div>;

    return(
      <div>
        {this.state.displayPretty ? generalInfoDisplay : generalInfoForm}
      </div>
    )
  }
}

export default GeneralInfoV2;
