import React, {useEffect} from 'react';
import FlightList from "./FlightList";
import HotelList from "./HotelList";

const Home = props => {

    useEffect(() => {
        props.showSetter(true);
    }, []);

    return (
            <div>
                <FlightList/>
                <HotelList/>
            </div>
    );
}

export default Home;
