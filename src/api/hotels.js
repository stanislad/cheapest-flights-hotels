import axios from "axios";

export default axios.create({
    method: 'GET',
    baseURL: 'https://hotels-com-provider.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
        'X-RapidAPI-Key': '6c5c5fd766mshdbf12198c573467p1c37d2jsnc492dc52666f'
    }
})