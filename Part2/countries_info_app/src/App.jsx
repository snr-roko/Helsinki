import { useState, useEffect } from "react"
import countriesService from './services/countriesService'
import Country from "./components/country"

const App = () => {
const [searchString, setSearchString] = useState('')
const [countries, setCountries] = useState(null)
const [countriesSearch, setCountriesSearch] = useState([])

useEffect(() => {
  countriesService
    .getAll()
    .then(response => {
      setCountries(response)
    })
    .catch(error => console.error("Data Fetching Failed, ", error))
}, [])

const handleChange = (event) => {
  const search = event.target.value
  setSearchString(search)
  const filtered_countries = countries.filter(country => country.toLowerCase().includes(search.toLowerCase()))
  setCountriesSearch(filtered_countries)
}

const handleClick = (country) => {
  const filtered_countries = countriesSearch.filter(a_country => a_country === country)
  setCountriesSearch(filtered_countries)
}

  return (
    <div>
      <div>Find Countries <input value={searchString} onChange={handleChange}/></div>
      <div>
        {countriesSearch.length > 10
          ? "Too many matches, specify another filter"
          : countriesSearch.length <= 10 && countriesSearch.length > 1
            ? countriesSearch.map(country => (<p key={country}>{country} <button onClick={() => handleClick(country)}>
              show
              </button> </p>))
            : countriesSearch.length == 0
              ? null
              : <Country name={countriesSearch[0]}/> 
        }
      </div>
    </div>
  )
}

export default App