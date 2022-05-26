import React, {useContext} from "react";
import airlines from '../json/airlines.json'

const FlightList = props => {

    const get_airline = input =>{
        for (var i in airlines)
        {
            if(airlines[i].code == input)
            {
                return airlines[i].name_translations.en;
            }
        }
    }


    const render_flights = Object.keys(props.flight).map(function(key, index) {
        var item = props.flight[key];

        return <div key={index} className="item">
            <img className="ui avatar image" src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png"/>
            <div className="content">
                <div className="header">£{item.price}</div>
                {get_airline(item.airline)}
                <sub>{item.departure_at}</sub>
            </div>
        </div>;
    });

    if(props.flight !== {})
    return (
        <div>
            <div className="ui ordered horizontal list">
                {render_flights}
            </div>
        </div>
    );
}

export default FlightList;