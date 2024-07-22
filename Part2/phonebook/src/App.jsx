import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import PersonForm from './components/PersonForm'
import Filtered from './components/Filtered'
import servicePerson from './services/personServer'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')
  const [message, setMessage] = useState('')

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
      number: String(newNumber).trim()
    }
    if (persons.some(person => person.name === newPerson.name)){
      if (persons.some(person => person.name === newPerson.name && person.number !== newPerson.number)) {
        if (window.confirm(`${newPerson.name} is already added to the phonebook, replace old number with new number?`)) {
          const personToUpdate = persons.find(person => person.name === newPerson.name && person.number !== newPerson.number)
          servicePerson
          .updateData(personToUpdate.id, newPerson)
          .then(response => {
            setPersons(persons.map(person => person.id === personToUpdate.id ? {...person, number: response.number} : person))
            setMessage(`Number Added for ${response.name}`)
            setTimeout(() => {
              setMessage('')
            }, 4000)
          })
        } 
        } else {
          alert(`${newPerson.name} is already in the phonebook with the same number.`)
      }
    } else {
      servicePerson
      .addData(newPerson)
      .then(response => {
        setPersons([...persons, response])
        setMessage(`Added ${response.name}`)
        setTimeout(() => {
          setMessage('')
        }, 4000)
      })
    }
    setNewName('')
    setNewNumber('')
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

        <Notification message={message} />

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