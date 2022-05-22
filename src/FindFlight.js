import React, {startTransition, useEffect, useState} from 'react';
import axios from "axios";
import SearchBar from "./SearchBar";
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";

const FindFlight = props => {
    const [search, setSearch] = useState('');

    const options = [
        {
            value: 549499,
            label: 'London'
        },
        {
            value: 504261,
            label: 'Paris'
        },
        {
            value: 353181,
            label: 'Milan'
        }
    ];
    const [airport, setAirport] = useState(options[0]);
    const [startDate, setStartDate] = useState('2022-05-23');
    const [endDate, setEndDate] = useState('2022-05-24');

    useEffect(() => {
        console.log(props.flight)

        const run = async () => {

            const options = {
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
                // console.log(response.data);
                console.log(response.data.searchResults.results);
                props.setter(response.data.searchResults.results);
            }).catch(function (error) {
                console.error(error);
            });
        }
        run();
    },[search, airport, startDate, endDate])

  return (
    <div className='ui raised very padded text container segment'>
        <h2 className="ui header">Choose Flight</h2>
        <DatePicker label='Flight Date' date={startDate} setter={setStartDate}/>
        <DatePicker label='Check out Date' date={endDate} setter={setEndDate}/>
        <Dropdown
            options={options}
            label='Destination Airport'
            setter={setAirport}
            selectedOption={airport}
        />
        {/*<SearchBar search={search} setSearch={setSearch}/>*/}
    </div>
  );
}

export default FindFlight;
