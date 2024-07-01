//U59555732
import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
