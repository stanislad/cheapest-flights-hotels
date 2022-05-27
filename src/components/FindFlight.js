import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchFlights, fetchHotel} from '../actions/index'
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";

const FindFlight = props => {

    const options = [
        {
            value: 549499,
            label: 'London',
            short: 'LON'
        },
        {
            value: 504261,
            label: 'Paris',
            short: 'PAR'
        },
        {
            value: 353181,
            label: 'Milan',
            short: 'MIL'
        }
    ];
    const [airport, setAirport] = useState(options[0]);

    var today = new Date();
    var start_date = today.toISOString().split('T')[0];
    today.setDate(today.getDate() + 1);
    var end_date = today.toISOString().split('T')[0];

    const [startDate, setStartDate] = useState(start_date);
    const [endDate, setEndDate] = useState(end_date);

    useEffect((url, config) => {

        const run = async () => {

                props.fetchHotel(airport,startDate,endDate);

                props.fetchFlights(airport);
        }
        run();

    },[airport, startDate, endDate])

  return (
    <div className='ui raised very padded text container segment'>
        <DatePicker label='Flight Date' date={startDate} setter={setStartDate}/>
        <DatePicker label='Check out Date' date={endDate} setter={setEndDate}/>
        <Dropdown
            options={options}
            label='Destination Airport'
            setter={setAirport}
            selectedOption={airport}
        />
    </div>
  );
}

const mapToProps = () =>{
    return {}
}

export default connect(mapToProps, {fetchFlights, fetchHotel})(FindFlight);
