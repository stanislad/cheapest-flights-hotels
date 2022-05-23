import React, {useContext} from "react";

const FlightList = props => {

    const render_flights = Object.keys(props.flight).map(function(key, index) {
        var item = props.flight[index];

        return <div key={index} className="item">
            <img className="ui avatar image" src="/images/avatar/small/tom.jpg"/>
            <div className="content">
                <div className="header">£{item.price}</div>
                {item.airline}
            </div>
        </div>;
    });

    return (
        <div>
            <div className="ui ordered horizontal list">
                {render_flights}
            </div>
        </div>
    );
}

export default FlightList;