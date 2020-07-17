import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterResults from './components/FilterResults'
import Weather from './components/Weather'


const api_key = process.env.REACT_APP_API_KEY

const App = () => {

    const [ filter, setFilter ] = useState ('')
    const [ countries, setCountries ] = useState ([])
    const [ weather, setWeather ] = useState (null)
    
    useEffect(() => {

        axios
        .get ('https://restcountries.eu/rest/v2/all')
        .then (response => {
            console.log ('Response Received')
            setCountries (response.data)
        })

    }, [])

    const handleFilterChange = (event) => {
        setWeather (null)
        setFilter (event.target.value)
    }
    
    return (
        <div>
            <p>find countries: <input value={filter} onChange={handleFilterChange} /></p>
        
            <FilterResults api_key={api_key} weather={weather} setWeather={setWeather} countries={countries} filter={filter} setFilter={setFilter}/>

            <Weather weather={weather} />
        </div>
    )
}

export default App

