import React,  { Component } from "react";
import ReactDOM from 'react-dom/client';

//best so far
// const editInfo = () => {
//   console.log("fuck react")
//   //fetch info from DOM
// 
//   // recreate form with those the values
//   
// }

const generalInfoForm = (fname, lname, phone, email) => {
  return (<div id="generalInfoContainer">
      <form onSubmit={this.handleSubmit} className="generalInfo">
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="fname" value={fname}></input>

        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" value={lname}></input>

        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" value={phone}></input>

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" value={email}></input>

        <input type="submit" value="Submit"></input>
      </form>
    </div>)  
}

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { status: null }

    this.submitted = this.submitted.bind(this);
  }

  createGeneralInfoForm(fname, lname, phone, email) {
    console.log(fname, lname, phone, email, "dooky")
  }

  submitted = () => {
    this.setState({ status: true });
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.setState({ status: true });
    // console.log(this.state)
    // this.submitted()
    // console.log(this.state)

    // console.log(event.target.fname.value);
    document.querySelector('.generalInfo').remove()
    const submittedInfo = (<div className="submittedInfo">
      <h2>My General Info:</h2>
      <div id="fname">First Name: {event.target.fname.value}</div>
      <div id="lname">Last Name: {event.target.lname.value}</div>
      <div id="phone">Phone Number: {event.target.phone.value}</div>
      <div id="email">Email Address: {event.target.email.value}</div>
      <button onClick={this.submitted}>Edit General Info</button> 
      {/* LOL JUST DONT PUT AN EDIT BUTTON, FUCK THIS SHIT */}
      {/* After trying again, I would double down on my previous statement, react is very stupid, and i dont want to be stupid */}
      </div>)

    const root = ReactDOM.createRoot(document.getElementById('generalInfoContainer'));
    root.render(submittedInfo);
  }

  render() {
    const currentStatus = this.state.status;
    console.log(currentStatus);
    if (currentStatus === null) {
      return <div id="generalInfoContainer">
        <form onSubmit={this.handleSubmit} className="generalInfo">
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname"></input>

          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname"></input>

          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" name="phone"></input>

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email"></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    }
  }
}

export default GeneralInfo;

// consider using a constructor, with state attribute submitted=false
// 

// on submit should add inputs to 

// in render() return, create a simple form for general user info, should have these fields...
//    - first name
//    - last name
//    - phone number
//    - email
  //  - address?? maybe not
