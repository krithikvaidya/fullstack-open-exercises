import React from 'react'
import axios from 'axios'


const FilterResults = ({ api_key, weather, setWeather, countries, filter, setFilter }) => {
    
    if (countries.length === 0)  {
        return null
    }
        
    const rresult = countries.map (country => {

        if (country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
            return country
        
        return null

    })

    const filtered_result = rresult.filter (country => country ? true : false)

    console.log (`filtered result ${JSON.stringify(filtered_result)}`)

    if (filtered_result.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    
    else if (filtered_result.length > 1)
    {
        return (
            filtered_result.map (country => (
                <div key={country.name}>
                    <p>{country.name} <button onClick={() => setFilter(country.name)}>show</button></p>
                </div>
                
            ))
        )

    }

    else if (filtered_result.length === 1)
    {
        if (weather === null) {
            const URL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${filtered_result[0].capital}`
            
            axios
            .get (URL)
            .then (response => {

                setWeather (response.data)

            })
        }

        return (
            <div>
                <h1>{filtered_result[0].name}</h1>
                <p>capital: {filtered_result[0].capital}</p>
                <p>population: {filtered_result[0].population}</p>

                <h3>languages</h3>
                <ul>
                    {filtered_result[0].languages.map (language => (

                        <li key={filtered_result[0].name.concat(language.name)}>{language.name}</li>

                    ))

                    }
                </ul>

                <img 
                    src={filtered_result[0].flag} 
                    alt={'Flag of '.concat(filtered_result[0].name)} 
                    width="100"
                    height="80"
                />
            </div>
        )

    }

    return (<p>No matching countries</p>)

}

export default FilterResults