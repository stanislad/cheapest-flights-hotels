import React, {useState} from 'react';
import FindFlight from "./FindFlight";
import FlightList from "./FlightList";
import HotelList from "./HotelList";

function Home() {

    return (
            <div>
                <FindFlight/>
                <FlightList/>
                <HotelList/>
            </div>
    );
}

export default Home;
