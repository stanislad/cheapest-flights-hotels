import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import AboutHotel from "./AboutHotel";

const About = props => {
    const { index } = useParams();
    const hotel = props.hotels[index];

    useEffect(() => {
        props.showSetter(false);
    }, []);

    return (
            <div className="ui segment">
                <h3>{hotel.name}</h3>
                <i>{hotel.neighbourhood}</i>
                <img className="ui centered medium image" src={hotel.optimizedThumbUrls.srpDesktop}/>
                <div className="ui horizontal divider">
                    Description
                </div>
                <AboutHotel hotel={hotel}/>

                <Link to='/'>
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
