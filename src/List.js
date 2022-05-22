import React from "react";

const List = props => {

    const render_flights = props.flight.map((f,i)=>{

        return <div key={i} className="item">
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

    return (
        <div>
            <div className="ui celled list">
                {render_flights}
            </div>
        </div>
    );
}

export default List;