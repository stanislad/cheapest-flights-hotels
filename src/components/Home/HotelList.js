import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const HotelList = props => {

    const render_hotel = props.hotels.map((f,i)=>{

        return (
            <div key={i} className="item">


            <img className="ui image" src={f.optimizedThumbUrls.srpDesktop}/>

                <div className="content">
                <Link to={`/about/${i}`}>
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

    if(props.hotels.length === 0)
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

const map = state => {
    return {
        hotels : state.hotels
    }
}

export default connect(map)(HotelList);