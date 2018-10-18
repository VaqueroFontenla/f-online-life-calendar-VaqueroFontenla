import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.js';
import Edition from '../Edition/Edition.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
      date: '',
      message: '',
    }
  }
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path='/' render = {
                ()=>
                <Home status={this.state.status} />
            }
            />
            <Route path='/edition' component={ Edition } />
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
