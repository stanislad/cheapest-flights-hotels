import React, {useState} from 'react';
import Title from "./components/Title";
import FindFlight from "./components/FindFlight";
import FlightList from "./components/FlightList";
import HotelList from "./components/HotelList";

function App() {
    const [hotel, setHotel] = useState([]);
    const [flight, setFlights] = useState([]);

  return (
    <div className='ui container'>
      <Title/>
      <FindFlight
          flight={flight} setFlights={setFlights}
          hotel={hotel} setHotel={setHotel}
      />
      <FlightList flight={flight}/>
      <HotelList hotel={hotel}/>
    </div>
  );
}

export default App;
