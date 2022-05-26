import React from "react";
import $ from 'jquery';

const HotelList = props => {

    const onItemClick = () =>{

    }

    const render_hotel = props.hotel.map((f,i)=>{

        return <div key={i} className="item" onClick={onItemClick}>
            <img className="ui image" src={f.optimizedThumbUrls.srpDesktop}/>
            <div className="content">
                <div className="header">{f.name}</div>
                {f.neighbourhood}
                <div className="ui tag labels">
                    <a className="ui label">
                        {f.ratePlan.price.current}
                    </a>
                </div>
            </div>
        </div>;
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