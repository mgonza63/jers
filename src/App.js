import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer'

// Pages
import Home from './pages/Home.js'
import About from './pages/About.js'
import Shop from './pages/Shop.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
          {/* <Route path='/contact' component={Contact} /> */}
        </Switch>
      </div>
      <Footer></Footer>
    </Router>


  );
}

export default App;
