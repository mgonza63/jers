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
      <div hidden id="snipcart" data-api-key="MjFjYzUwOTMtNDdmNC00NGNlLWIzMGItZTE2N2NkNjIyMGEzNjM3MjQ1MjM5OTQxNzkwMTkz" data-currency="mxn"></div>

      <script src="https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.js"></script>

      <Footer></Footer>
    </Router>


  );
}

export default App;
