import axios from "axios";

export default axios.create({
    method: 'GET',
    baseURL: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/',
    params: {origin: 'MAN', page: 'None', currency: 'GBP', destination: 'LON'},
    headers: {
        'X-Access-Token': '45c38474185a178e812ada0806562be8',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '6c5c5fd766mshdbf12198c573467p1c37d2jsnc492dc52666f'
    }
})