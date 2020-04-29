import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img class="logo" src="assets/img/logo.jpg"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Shop</a>
            <a class="nav-item nav-link" href="#">Contact</a>
            <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Blog</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;