import React, {useState} from 'react';
import FindFlight from "./FindFlight";
import FlightList from "./FlightList";
import HotelList from "./HotelList";


function Home() {
    const [hotel, setHotel] = useState([]);
    const [flight, setFlights] = useState([]);

    return (
            <div>
                <FindFlight
                    flight={flight} setFlights={setFlights}
                    hotel={hotel} setHotel={setHotel}
                />
                <FlightList flight={flight}/>
                <HotelList hotel={hotel}/>
            </div>
    );
}

export default Home;
