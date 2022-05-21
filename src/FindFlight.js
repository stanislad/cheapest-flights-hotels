import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchBar from "./SearchBar";

function FindFlight() {
    const [search, setSearch] = useState('')
    const [flight, setFlights] = useState(1)

    useEffect(() => {
        console.log(flight)

        const run = async () => {
            const {data} = await axios.get('https://catfact.ninja/fact', {
                    params:{
                        // access_key: '86b1e85b1cd593c2f42236379e8d1921'
                    }}
            )

            setFlights(data);
        }

        run();
    },[search])

  return (
    <div>
        <SearchBar search={search} setSearch={setSearch}/>
    </div>
  );
}

export default FindFlight;
