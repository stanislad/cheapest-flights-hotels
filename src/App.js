import React, {useState} from 'react';
import Title from "./Title";
import FindFlight from "./FindFlight";
import Dropdown from "./Dropdown";
import DatePicker from "./DatePicker";

function App() {

    const options = [
        {
            value: 'Spain',
            label: 'Spain'
        },
        {
            value: 'France',
            label: 'France'
        },
        {
            value: 'Italy',
            label: 'Italy'
        }
    ];
    const [airport, setAirport] = useState(options[0]);
    const [date, setDate] = useState('2022-05-21');

  return (
    <div className='ui container'>
      <Title/>
      <DatePicker label='Flight Date' date={date} setter={setDate}/>
      <Dropdown
          options={options}
          label='Destination Airport'
          setter={setAirport}
          selectedOption={airport}
      />
      <FindFlight/>
    </div>
  );
}

export default App;
