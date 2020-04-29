import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Section1 from './components/SectionOne'
import Section2 from './components/SectionTwoTitle'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
}

export default App;
