import React from "react";
import $ from 'jquery';
import {Link} from "react-router-dom";

const HotelList = props => {

    const render_hotel = props.hotel.map((f,i)=>{

        return (
            <div key={i} className="item">


            <img className="ui image" src={f.optimizedThumbUrls.srpDesktop}/>

                <div className="content">
                <Link to='/about'>
                    <div className="header">{f.name}</div>
                    {f.neighbourhood}
                    <div className="ui tag labels">
                        <div className="ui label">
                            {f.ratePlan.price.current}
                        </div>
                    </div>
                </Link>
            </div>

        </div>
        );
    })

    if(props.hotel.length === 0)
    return (
        <div className="ui active centered inline loader"></div>
    );

    return (
        <div>
            <div className="ui celled list">
                {render_hotel}
            </div>
        </div>
    );
}

export default HotelList;