import React from 'react';

const DatePicker = props => {

  return (
    <div>
        <h3>Input</h3>
        <div className="ui form" >
            <label className='label'>{props.label}</label>
            <div className="ui calendar">
                <div className="ui input left icon">
                    <i className="calendar icon"/>
                    <input type="date" placeholder="Date/Time" value={props.date} onChange={e => props.setter(e.target.value)}/>
                </div>
            </div>
        </div>
    </div>);
}

export default DatePicker;
