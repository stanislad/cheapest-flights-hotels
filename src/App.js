import React, {useState} from 'react';
import Title from "./Title";
import FindFlight from "./FindFlight";
import List from "./List";

function App() {
    const [flight, setFlights] = useState([]);

  return (
    <div className='ui container'>
      <Title/>
      <FindFlight flight={flight} setter={setFlights}/>
      <List flight={flight}/>
    </div>
  );
}

export default App;
