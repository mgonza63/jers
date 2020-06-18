import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer'

// Pages
import Home from './pages/Home.js'
import Shop from './pages/Shop.js'
import Tienda from './pages/Tienda'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/tienda' component={Tienda} />

          {/* <Route path='/contact' component={Contact} /> */}
        </Switch>
      </div>
      <Footer></Footer>
    </Router>



  );
}

export default App;
