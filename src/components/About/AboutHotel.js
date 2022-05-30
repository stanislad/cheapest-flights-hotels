import React from 'react';
import {Link, useParams} from "react-router-dom";

const AboutHotel = ({hotel}) => {
    const { index } = useParams();

    const renderLandmarks = hotel.landmarks.map((landmark, i) =>{
        return (
            <div key={i} className="item">
                <i className="map marker icon"/>
                <div className="content">
                    <a className="header">{landmark.label}</a>
                    <div className="description">{landmark.distance}</div>
                </div>
            </div>
        );
    })

    return (

            <div className="ui grid">

                <div className="four wide column">
                    <h4>Rating</h4>
                    <p>
                        <i className='star icon'/>
                        {hotel.guestReviews.rating}/{hotel.guestReviews.scale}
                        <br/>
                    </p>
                    <div className="ui tag labels">
                        <div className="ui label">
                            {hotel.guestReviews.badgeText}
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <h4>Landmarks</h4>
                    <div className="ui list">
                        {renderLandmarks}
                    </div>
                </div>

                <div className="four wide column">
                    <h4>Price</h4>
                    <i className="money bill alternate icon"/>
                    <s>{hotel.ratePlan.price.old}</s> <b>{hotel.ratePlan.price.current}</b>
                </div>

                <div className="four wide column">
                    <Link to={`/maps/${index}`}>

                        <h4>Address</h4>
                        <p><i className="map icon"/>

                            {hotel.address.streetAddress}<br/>
                            {hotel.address.locality}<br/>
                            {hotel.address.postalCode}
                        </p>
                    </Link>
                </div>
            </div>
    );
}


export default AboutHotel;
