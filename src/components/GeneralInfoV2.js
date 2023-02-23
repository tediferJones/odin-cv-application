import React, { Component } from 'react';

class GeneralInfoV2 extends Component {
  constructor() {
    super();

    this.state = {
      // list all data fields we will need
      // We really dont need inputs and data, on submit we toggle to pretty display mode, so just pretty display the inputs
      // We'll leave this one as is for now, but try to simplify the next component in this way
      displayPretty: false,
      inputs: {
        fname: '',
        lname: '',
        phoneNum: '',
        email: '',
      },
      data: {
        fname: '',
        lname: '',
        phoneNum: '',
        email: '',
      }
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
    // console.log(this.state.inputs)
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      data: {
        fname: this.state.inputs.fname,
        lname: this.state.inputs.lname,
        phoneNum: this.state.inputs.phoneNum,
        email: this.state.inputs.email,
      },
      inputs: {
        fname: '',
        lname: '',
        phoneNum: '',
        email: '',
      },
      displayPretty: true
    });
    // console.log(this.state)
  }

  render() {
    // const { firstname, outputFirstName } = this.state;
    const GeneralInfoForm = 
      <form onSubmit={this.onSubmit}>
        <h1>Your firstname is {this.state.data.fname}</h1>
        
        <label htmlFor='fname'>First Name:</label>
        <input type='text' id='fname' name='fname' onChange={this.handleChange} value={this.state.inputs.fname}></input>
        
        <label htmlFor='lname'>Last Name:</label>
        <input type='text' id='lname' name='lname' onChange={this.handleChange} value={this.state.inputs.lname}></input>
        
        <label htmlFor='phoneNum'>Phone Number:</label>
        <input type='text' id='phoneNum' name='phoneNum' onChange={this.handleChange} value={this.state.inputs.phoneNum}></input>
        
        <label htmlFor='email'>Email Address:</label>
        <input type='text' id='email' name='email'onChange={this.handleChange} value={this.state.inputs.email}></input>
        
        <button type='submit'>SUBMIT</button>
      </form>;

    // Add an edit button, just setup its own function like onSubmit that only toggles displayPretty
    const GeneralInfoDisplay =
      <div>
        <h1>First Name: {this.state.data.fname}</h1>
        <h1>Last Name: {this.state.data.lname}</h1>
        <h1>Phone Number: {this.state.data.phoneNum}</h1>
        <h1>E-mail Address: {this.state.data.email}</h1>
      </div>;

    let output;
    if (this.state.displayPretty) {
      output = GeneralInfoDisplay;
    } else {
      output = GeneralInfoForm;
    }

    return(
      <div>
        {output}
      </div>
    )
  }
}

export default GeneralInfoV2;
