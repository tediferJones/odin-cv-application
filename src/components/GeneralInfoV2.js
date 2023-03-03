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
  // COMBINE THESE FUNCTIONS
  toggleEdit = (e) => {
    this.setState({
      displayPretty: false
    })
  }  

  render() {
    // const { firstname, outputFirstName } = this.state;
    {/* className='generalInfoForm' */}
    const generalInfoForm = 
      <form onSubmit={this.onSubmit} className='verticalInputLabel'>
          <h2 className='sectionTitle'>General Information</h2>
          <label className='alignLeft' htmlFor='fname'>First Name:</label>
          <input type='text' id='fname' name='fname' onChange={this.handleChange} value={this.state.inputs.fname}></input>

          <label className='alignLeft' htmlFor='lname'>Last Name:</label>
          <input type='text' id='lname' name='lname' onChange={this.handleChange} value={this.state.inputs.lname}></input>

          <label className='alignLeft' htmlFor='phoneNum'>Phone Number:</label>
          <input type='text' id='phoneNum' name='phoneNum' onChange={this.handleChange} value={this.state.inputs.phoneNum}></input>
        
          <label className='alignLeft' htmlFor='email'>Email Address:</label>
          <input type='text' id='email' name='email'onChange={this.handleChange} value={this.state.inputs.email}></input>

        <button type='submit' className='generalInfoSubmitButton'>Done</button>
      </form>;

    const generalInfoDisplay =
      <div className='generalInfoDisplay'>
        {/* <h1>First Name: {this.state.inputs.fname}</h1>
        <h1>Last Name: {this.state.inputs.lname}</h1> */}
        <h1 className='manualMargin'>{this.state.inputs.fname} {this.state.inputs.lname}</h1>
        <h3 className='manualMargin'>Phone Number: {this.state.inputs.phoneNum}</h3>
        <h4 className='manualMargin'>E-mail Address: {this.state.inputs.email}</h4>
        <button onClick={this.toggleEdit} className='hidden'>Edit</button>
      </div>;

    return(
      <div className='card'>
        {this.state.displayPretty ? generalInfoDisplay : generalInfoForm}
      </div>
    )
  }
}

export default GeneralInfoV2;
