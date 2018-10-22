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
      status: null,
      date: null,
      message: null,
    };

   this.handleChangeDate=this.handleChangeDate.bind(this);
   this.handleChangeStatus=this.handleChangeStatus.bind(this);
   this.handleChangeMessage=this.handleChangeMessage.bind(this);
   this.onSubmitHandler=this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem( 'Life Calendar' )) {
      this.setState({
        calendarSmile : JSON.parse(localStorage.getItem( 'Life Calendar' )),
      }, ()=>console.log(this.state.calendarSmile))
    }

}

   handleChangeDate(e) {
   this.setState({ date: e.target.value }, ()=>console.log(this.state.date))
   }

  handleChangeStatus (e) {
    this.setState ({
      status: e.target.value,
    })
        console.log(this.state.status);
  }
  handleChangeMessage (e) {
    this.setState ({
      message:  e.target.value
    })
  }

  onSubmitHandler (e) {
    e.preventDefault();
    const {calendarSmile,date,status, message}= this.state;
    calendarSmile.push({
      inputdate: date,
      inputstatus: status,
      inputmessage: message
    })
    this.setState({
      calendarSmile: calendarSmile
    }, ()=>console.log(calendarSmile))
  }

  componentDidUpdate( prevState ) {
  if ( prevState.calendarSmile !== this.state.calendarSmile ) {
    localStorage.setItem( 'Life Calendar', JSON.stringify( this.state.calendarSmile ));
  }
}

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path='/' render = {
                ()=>
                <Home calendarSmile={this.state.calendarSmile} />
            }
            />
            <Route path='/edition'render = {
                ()=>
                <Edition
                         onSubmitHandler={this.onSubmitHandler}
                         handleChangeDate  = { this.handleChangeDate }
                         handleChangeStatus  = { this.handleChangeStatus }
                         handleChangeMessage  = { this.handleChangeMessage }
                        />
            } />
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
