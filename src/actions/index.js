
import flights from "../api/filghts";
import axios from "axios";

export const fetchFlights = airport => async (dispatch) => {
    const res = await flights.get('v1/prices/cheap',{
        params: {origin: 'MHT', page: 'None', currency: 'GBP', destination: airport.short},
    })
    dispatch({ type:'FETCH_FLIGHTS', payload: res.data.data[airport.short] })
}

export const fetchHotel = (airport, startDate, endDate) => async (dispatch) => {
    var options = {
        method: 'GET',
        url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/search',
        params: {
            checkin_date: startDate,
            checkout_date: endDate,
            sort_order: 'PRICE',
            destination_id: airport.value,
            adults_number: '1',
            locale: 'en_US',
            currency: 'GBP',
            children_ages: '4,0,15',
            price_min: '10',
            star_rating_ids: '3,4,5',
            accommodation_ids: '20,8,15,5,1',
            price_max: '500',
            page_number: '1',
            theme_ids: '14,27,25',
            amenity_ids: '527,2063',
            guest_rating_min: '4'
        },
        headers: {
            'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
            'X-RapidAPI-Key': '6c5c5fd766mshdbf12198c573467p1c37d2jsnc492dc52666f'
        }
    };

    axios.request(options).then(function (response) {
        dispatch({ type:'FETCH_HOTELS', payload: response.data.searchResults.results })
    }).catch(function (error) {
        console.error(error);
    });
}

