import React from 'react'


const Weather = ({ weather }) => {

    if (weather === null)
        return null;

    const temp = `${weather.current.temperature} celcius`
    const weather_icon = `${weather.current.weather_icons[0]}` || ""
    const wind = `${weather.current.wind_speed} kmh direction ${weather.current.wind_dir}`

    return (
        <div>

            <h4>Weather in {weather.location.name}</h4>
                
            <strong>temperature: </strong>{temp}<br />

            <img 
                src={weather_icon} 
                alt={'Weather Icon'} 
                width="100"
                height="80"
            /> <br />

            <strong>wind: </strong>{wind} <br />

        </div>
    )

}

export default Weather