import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../Calendar/Calendar.js';
import './Home.css';



class Home extends Component {
    render() {
      const {status}=this.props;
        return (
            <div className="calendar">
                <Link to="/edition" className="buttonLink">+</Link>
                <Calendar status={status}
                />
            </div>
        );
    }
}

export default Home;
