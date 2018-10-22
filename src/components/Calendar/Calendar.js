import React, { Component } from 'react';
import DayList from '../DayList/DayList.js';
import './Calendar.css';

class Calendar extends Component {
    render() {
      const {calendarSmile}=this.props;
        console.log(calendarSmile)

        return (
          <div>
            <ul className='smile-container'>
                { calendarSmile.map((smileElement,index)=>
                    <DayList date={smileElement.inputdate}
                             status={smileElement.inputstatus}
                             message={smileElement.inputmessage}
                             key= {index}
                             />
                  )
                }
            </ul>
          </div>

         );
       }
     }

export default Calendar;
