'use strict';

/*
@author Akash Singh
@email contact@akashsingh.io
@web akashsingh.io
*/

import React, { Component } from 'react';
import './App.css';
import HomeCard from './Home/HomeCard.js';
import ProjectsCard from './Projects/ProjectsCard.js';
import ResumeCard from './Resume/ResumeCard.js';
import PhotoCard from './Photography/PhotoCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeCard></HomeCard>
        <ProjectsCard></ProjectsCard>
        <ResumeCard></ResumeCard>
        <PhotoCard></PhotoCard>
      </div>
    );
  }
}

export default App;
