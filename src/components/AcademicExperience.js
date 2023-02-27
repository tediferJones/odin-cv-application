import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const defaultMonth = 'January';
const defaultYear = 2023;

class AcademicExperience extends Component {
  constructor() {
    super();

    this.state = {
      displayPretty: false,
      academicHistory: [],
      inputs: {
        name: '',
        description: '',
        startMonth: defaultMonth,
        startYear: defaultYear,
        endMonth: defaultMonth,
        endYear: defaultYear,
        id: uuidv4(),
      },
    };
  };

  handleChange = (e) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [e.target.name]: e.target.value,
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const itemToUpdate = this.state.academicHistory.filter((inputs) => inputs.id === this.state.inputs.id)[0];
    // if ID already exits in academicHistory, update that entry with the new info 
    if (itemToUpdate) {
      const newState = this.state.academicHistory.map((inputs) => {
        if (inputs.id === itemToUpdate.id) {
          inputs = { ...this.state.inputs }
        }
        return inputs
      });
      this.setState({
        academicHistory: newState,
      })
    } else {
      this.setState({
        academicHistory: this.state.academicHistory.concat(this.state.inputs),
      });
    }
    this.setState({
      inputs: {
        name: '',
        description: '',
        startMonth: defaultMonth,
        startYear: defaultYear,
        endMonth: defaultMonth,
        endYear: defaultYear,
        id: uuidv4(),
      }
    })
  }

  toggleForm = (e) => {
    if (this.state.displayPretty) {
      this.setState({ displayPretty: false })
    } else {
      this.setState({ displayPretty: true })
    }
  }

  removeItem = (e) => {
    this.setState({
      academicHistory: this.state.academicHistory.filter((inputs) => inputs.id !== e.target.value)
    })
  }

  editItem = (e) => {
    const item = this.state.academicHistory.filter((inputs) => inputs.id === e.target.value)[0]
    this.setState({
      inputs: {
        ...item,
      },
    })
  }

  render() {
    {/* YOU CANT WRITE FUNCTIONS INSIDE HERE, AND THIS HOW YOU MAKE A JSX COMMENT */}
    {/* CONVERT academicHistoryList to multi-line function, like in practicalExperience.js */}
    const academicHistoryList = this.state.academicHistory.map((listItem) => <li key={listItem.id}>{listItem.name} {listItem.description}, {listItem.startMonth} {listItem.startYear} - {listItem.endMonth} {listItem.endYear} <button onClick={this.editItem} value={listItem.id}>EDIT</button> <button onClick={this.removeItem} value={listItem.id}>DELETE</button></li>);
    const yearOptions = [...Array(100).keys()].map((i) => <option key={uuidv4()} value={(new Date).getFullYear() - i}>{(new Date).getFullYear() - i}</option>)
    const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => <option key={uuidv4()} value={month}>{month}</option>)
    const toggleEditButton = <button onClick={this.toggleForm}>{this.state.displayPretty ? 'Edit' : 'Done'}</button>
    
    const academicExperienceForm = 
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor='name'>Name of Institution:</label> 
          <input type='text' id='name' name='name' onChange={this.handleChange} value={this.state.inputs.name}></input>

          <label htmlFor='description'>Type of Study:</label>
          <input type='textarea' id='description' name='description' onChange={this.handleChange} value={this.state.inputs.description}></input>

          <label htmlFor='startMonth'>Start Month:</label>
          <select id='startMonth' name='startMonth' onChange={this.handleChange} value={this.state.inputs.startMonth}>{monthOptions}</select>

          <label htmlFor='startYear'>Start Year:</label>
          <select id='startYear' name='startYear' onChange={this.handleChange} value={this.state.inputs.startYear}>{yearOptions}</select>

          <label htmlFor='endMonth'>End Month:</label>
          <select id='endMonth' name='endMonth' onChange={this.handleChange} value={this.state.inputs.endMonth}>{monthOptions}</select>

          <label htmlFor='endYear'>End Year:</label>
          <select id='endYear' name='endYear' onChange={this.handleChange} value={this.state.inputs.endYear}>{yearOptions}</select>

          <button type='submit'>ADD</button>
        </form>
      </div>
    return(
      <div>
      <ul>{academicHistoryList}</ul>
      {this.state.displayPretty ? [] : academicExperienceForm}
      {toggleEditButton}
      </div>
    );
  }
}

export default AcademicExperience;
