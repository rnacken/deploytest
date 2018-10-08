import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

        <div className="App">
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route path={`/about`} component={About} />
          </Switch>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to="/">To home...</Link>
            <Link to="/about">To about...</Link>
          </header>
        </div>
    );
  }
}

export default App;
