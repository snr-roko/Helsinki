import countriesService from "../services/countriesService"
import { useState, useEffect } from "react"
import getOne from "../services/weatherService"

const Country = ({name}) => {

    const [country_info, setCountry_info] = useState(null)
    const [weather_info, setWeather_info] = useState(null)    
    useEffect(() => {
        countriesService
            .getOne(name)
            .then(response => setCountry_info(response))
            .catch(error => console.error(`${name} information run into an issue`))
    }, [name])

    useEffect(() => {
        if(country_info) {
            getOne(country_info.latlng[0], country_info.latlng[1])
                .then(response => setWeather_info(response))
                .catch(error => console.error(`${name} weather information run into an issue`))
        }
            }, [name, country_info])

    if(!country_info) return "Loading..."    
    return (
        <div>
            <h1>{name}</h1>
            <p>Official Name: {`${country_info.name.official}`}</p>
            <p>Currencies</p>
            <ul>
                {Object.entries(country_info.currencies).map(([currency_code, details]) => {
                    return <li key={currency_code}>{`${details.name} ${details.symbol}`}</li>
                })}
            </ul>
            <p>Capital</p>
            <ul>
                {country_info.capital.map(city => <li key={city}>{city}</li>)}
            </ul>
            <p>Region: {`${country_info.region}`}</p>
            <p>Sub-Region: {`${country_info.subregion}`}</p>
            <p>Languages</p>
            <ul>
                {Object.entries(country_info.languages).map(([language_code, language]) => {
                    return <li key={language_code}>{language}</li>
                })}
            </ul>
            <p>Area: {`${country_info.area}`}</p>
            <p>Population: {`${country_info.population}`}</p>
            <p>Timezones</p>
            <ul>
                {country_info.timezones.map(timezone => <li key={timezone}>{timezone}</li>)}
            </ul>
            <div>
                <img src={country_info.flags.png} alt={country_info.flags.alt} />
            </div>
            {!weather_info 
                ? <p>Loading...</p>
                : <div>
                    <h4>Weather in {name}</h4>
                    <p>Temperature: {`${weather_info.current['temp']} celsius`}</p>
                    <img src={`https://openweathermap.org/img/wn/${weather_info.current.weather[0]['icon']}@2x.png`} alt={weather_info.current.weather[0]['description']} />
                    <p>Wind Speed: {`${weather_info.current['wind_speed']} m/s`}</p>
                </div>
            }
        </div>
    )
}

export default Country