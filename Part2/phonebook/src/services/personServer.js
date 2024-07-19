import axios from "axios";

const url = 'http://localhost:3001/persons'
const getData = () => {
  const allData = axios.get(url)
  return allData.then(response => response.data)
}

const addData = (newData) => {
  const allData = axios.post(url, newData)
  return allData.then(response => response.data)
}

export default {getData, addData}