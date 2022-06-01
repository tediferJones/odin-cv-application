import React,  { Component } from "react";

class GeneralInfo extends Component {
  handleSubmit(event) {
    // const doc = ReactDOM.createRoot(
    //   document.getElementById('root')
    // );

    event.preventDefault();
    console.log('yeet')

    console.log(document.querySelector('.generalInfo').remove())

    // const generalInfo = (<div>submitted yeet</div>)
    // console.log(document.querySelector('#root'))
    // document.querySelector('#root').render(generalInfo)
    // doc.render(generalInfo)
    // append a div to #root with form info, with a button that will edit the form
  }

  render() {
    return <div>
      Im world
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

export default GeneralInfo;

// on submit should add inputs to 

// in render() return, create a simple form for general user info, should have these fields...
//    - first name
//    - last name
//    - phone number
//    - email
  //  - address?? maybe not
