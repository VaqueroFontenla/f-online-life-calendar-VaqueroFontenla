import React, { Component } from 'react';
import './DayList.css';

class DayList extends Component {
  render() {
    const {
           date,
           status,
           message}=this.props;
    return (
      <li className="days__face">
       <p className="days__date">{ date }</p>
       <p className={`days__face ${ status === ':)' ? "days__face-good" : "days__face-bad" }`}>
         { status }
       <p className="days__message">{ message }</p>
       </p>
     </li>
    );
  }
}

export default DayList;
