import countriesService from "../services/countriesService"
import { useState, useEffect } from "react"

const Country = ({name}) => {

    const [country_info, setCountry_info] = useState(null)    
    useEffect(() => {
        countriesService
            .getOne(name)
            .then(response => setCountry_info(response))
            .catch(error => console.error(`${name} information run into an issue`))
    }, [name])

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
        </div>
    )
}

export default Country