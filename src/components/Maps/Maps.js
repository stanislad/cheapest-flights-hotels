import React from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import GoogleMaps from "./GoogleMaps";

const About = props => {
    const { index } = useParams();
    const hotel = props.hotels[index];

    const center = {
        lat: parseFloat(hotel.coordinate.lat),
        lng: parseFloat(hotel.coordinate.lon)
    };

    console.log(center)

    return (
            <div className="ui segment">
                <h3>{hotel.name}</h3>

                <div className="ui raised segment">
                    <GoogleMaps coords={center}/>
                </div>

                <Link to={`/about/${index}`}>
                    <div className="ui buttons">
                        <button className="ui red basic button active">Back</button>
                    </div>
                </Link>
            </div>
    );
}

const map = state =>{
    return {
        hotels : state.hotels
    }
}

export default connect(map)(About);
