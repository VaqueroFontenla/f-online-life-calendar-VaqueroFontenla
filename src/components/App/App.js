import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.js';
import Edition from '../Edition/Edition.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/edition' component={ Edition } />
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
