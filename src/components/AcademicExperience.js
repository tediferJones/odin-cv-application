import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const defaultMonth = 'January';
const defaultYear = 2023;

class AcademicExperience extends Component {
  constructor() {
    super();

    this.state = {
      academicHistory: [],
      inputs: {
        name: '',
        startMonth: defaultMonth,
        startYear: defaultYear,
        endMonth: defaultMonth,
        endYear: defaultYear,
      }
    }
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      inputs: {
        ...this.state.inputs,
        [e.target.name]: e.target.value,
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      academicHistory: this.state.academicHistory.concat(this.state.inputs),
      inputs: {
        name: '',
        startMonth: defaultMonth,
        startYear: defaultYear,
        endMonth: defaultMonth,
        endYear: defaultYear,
      }
    })
  }

  render() {
    {/* YOU CANT WRITE FUNCTIONS INSIDE HERE, AND THIS HOW YOU MAKE A JSX COMMENT */}
    const academicHistoryList = this.state.academicHistory.map((listItem) => <li key={uuidv4()}>{listItem.name}, {listItem.startMonth} {listItem.startYear} - {listItem.endMonth} {listItem.endYear}</li>);
    const yearOptions = [...Array(100).keys()].map((i) => <option key={uuidv4()} value={(new Date).getFullYear() - i}>{(new Date).getFullYear() - i}</option>)
    const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => <option key={uuidv4()} value={month}>{month}</option>)
    return(
      <div>
        <ul>{academicHistoryList}</ul>
        {/* <h1>{JSON.stringify(this.state.academicHistory)}</h1> */}
        <form onSubmit={this.onSubmit}>
          <label htmlFor='name'>Name of Institution:</label> 
          <input type='text' id='name' name='name' onChange={this.handleChange} value={this.state.inputs.name}></input>

          <label htmlFor='startMonth'>Start Month:</label>
          <select id='startMonth' name='startMonth' onChange={this.handleChange} value={this.state.inputs.startMonth}>{monthOptions}</select>

          <label htmlFor='startYear'>Start Year:</label>
          <select id='startYear' name='startYear' onChange={this.handleChange} value={this.state.inputs.startYear}>{yearOptions}</select>

          <label htmlFor='endMonth'>End Month:</label>
          <select id='endMonth' name='endMonth' onChange={this.handleChange} value={this.state.inputs.endMonth}>{monthOptions}</select>

          <label htmlFor='endYear'>End Year:</label>
          <select id='endYear' name='endYear' onChange={this.handleChange} value={this.state.inputs.endYear}>{yearOptions}</select>

          <button type='submit'>ADD</button>
          {/*<select>{yearOptions}</select>*/}
        </form>
      </div>   
    )
  }
}

export default AcademicExperience;
