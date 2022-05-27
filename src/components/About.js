import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const About = props => {

    return (
            <div>
                {props.hotels[2].name}
                <Link to='/'>back</Link>
            </div>
    );
}

const map = state =>{
    return {
        hotels : state.hotels
    }
}

export default connect(map)(About);
