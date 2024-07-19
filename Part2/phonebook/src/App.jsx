import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import PersonForm from './components/PersonForm'
import Filtered from './components/Filtered'
import servicePerson from './services/personServer'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

  useEffect(
    () => {
      servicePerson
      .getData()
      .then(response => setPersons(response))
    }
  , [])
  
  const handleSearchString = (event) => {
    setSearchString(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: String(newNumber)
    }
    if (persons.some(person => person.name === newPerson.name)){
      alert(`${newPerson.name} is already added to the Phonebook`)
      setNewName('')
      setNewNumber('')
    } else {
      servicePerson
      .addData(newPerson)
      .then(response => {
        setPersons([...persons, response])
      })
      setNewName('')
      setNewNumber('')
    }
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      servicePerson
      .deleteData(id)
      .then(response => {
      const newPersons = persons.filter(person => person.id !== response.id)
      setPersons(newPersons)
    })
    }    
  }

  const personToshow = !searchString 
    ? persons 
    : persons.filter(person => {
      const length = searchString.length
      const search = searchString.toLowerCase()
      const target = person.name.slice(0, length).toLowerCase()
      return target === search
    })


    return (
      <div>
        <h2>Phonebook</h2>
  
        <Filtered searchString={searchString} handleSearchString={handleSearchString}  />
  
        <h3>Add a new</h3>
  
        <PersonForm 
          handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} 
        />
  
        <h3>Numbers</h3>

        <div>
          {personToshow.map(
            person => 
              <ContactList key={person.id} name={person.name} number={person.number} handleDelete={() => handleDelete(person.id, person.name)} />
          )}
        </div>

      </div>
    )
  }

export default App