import React, { Component } from "react";
// import GeneralInfo from "./components/GeneralInfo";
import GeneralInfoV2 from "./components/GeneralInfoV2";
import AcademicExperience from './components/AcademicExperience';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div>
        <h1>CV Application</h1>
        <GeneralInfoV2 />
        <AcademicExperience />
      </div>);
  }
}

export default App;
