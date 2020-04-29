import React from 'react';
import './App.css';
import Nav from './components/Nav';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwoTitle';
import SectionTwoCards from './components/SectionTwoCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionTwoCards></SectionTwoCards>
      <Footer></Footer>
    </div>
  );
}

export default App;
