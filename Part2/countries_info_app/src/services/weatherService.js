import axios from "axios"
const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key now has the value set in startup

const getOne = (lat, lon) => {
    return axios
            .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&exclude=minutely,hourly,daily`)
            .then(response => {
                return response.data
            })
}

export default getOne