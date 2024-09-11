import axios from "axios";

const url = '/api/persons'
const getData = () => {
  const allData = axios.get(url)
  return allData.then(response => response.data)
}

const addData = (newData) => {
  const allData = axios.post(url, newData)
  return allData.then(response => response.data)
}

const deleteData = (id) => {
  const deletedData = axios.delete(`${url}/${id}`)
  return deletedData.then(response => response.data)
}

const updateData = (id, newData) => {
  const allData = axios.put(`${url}/${id}`, newData)
  return allData.then(response => response.data)
}

export default {getData, addData, deleteData, updateData}