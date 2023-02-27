import React, { Component } from "react";
// import GeneralInfo from "./components/GeneralInfo";
import GeneralInfoV2 from "./components/GeneralInfoV2";
import AcademicExperience from './components/AcademicExperience';
import PracticalExperience from './components/PracticalExperience';
import './style.css';

class App extends Component {
  render() {
    return(
      <div>
        <h1 className='header'>CV Application</h1>
        <div className='content'>
          <GeneralInfoV2 />
          <AcademicExperience />
          <PracticalExperience />
        </div>
      </div>
    );
  }
}

export default App;
