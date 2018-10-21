import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.js';
import Edition from '../Edition/Edition.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarSmile: [],
      status: 'bad',
      date: 'hoy',
      message: null,
    }
   this.handleChange=this.handleChange.bind(this);
   this.onSubmitHandler=this.onSubmitHandler.bind(this);
  }

  handleChange (e) {
    this.setState ({
      status: e.target.value,
      date:  e.target.value,
      message:  e.target.value
    })
    console.log(this.state.status)
  }

  onSubmitHandler () {
    const {calendarSmile, status, date, message} = this.props;
    this.setState({
      calendarSmile: [ ...calendarData,
        {
          date: date,
          status: status,
          message: message
        }
      ]
    })
    console.log(this.state.status);
  }

  componentDidUpdate( prevProps, prevState ) {
  if ( prevState.calendarData !== this.state.calendarData ) {
    localStorage.setItem( 'Happiness Calendar', JSON.stringify( this.state.calendarData ));
  }
}

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path='/' render = {
                ()=>
                <Home calendarSmile
                      status
                      data
                      message={this.state} />
            }
            />
            <Route path='/edition'render = {
                ()=>
                <Edition status data message={this.state}
                         onSubmitHandler={this.onSubmitHandler}
                         handleChange  = { this.handleChange }
                        />
            } />
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
