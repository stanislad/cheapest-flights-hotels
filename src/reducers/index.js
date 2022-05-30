import {combineReducers} from "redux";

export default combineReducers({
    flights: (state = [], action)=>{
                    switch (action.type)
                    {
                        case 'FETCH_FLIGHTS' :
                            return action.payload ?? state;

                        default :
                            return state;
                    }},

    hotels : (state = [], action)=>{
                    switch (action.type)
                    {
                        case 'FETCH_HOTELS' :
                            return action.payload;

                        default :
                            return state;
                    }
    }
})

