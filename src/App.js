import React, { Component } from 'react';
import './App.css';
import HomeCard from './HomeCard.js';
import ProjectsCard from './ProjectsCard.js';
import ResumeCard from './ResumeCard.js';
import PhotoCard from './PhotoCard.js';

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
