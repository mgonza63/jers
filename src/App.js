import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';

// Pages
import Home from './pages/Home.js'
import About from './pages/About.js'
import Shop from './pages/Shop.js'

import Contact from './pages/Contact.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
