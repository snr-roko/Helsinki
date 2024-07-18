import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

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
      number: newNumber
    }
    if (persons.some(person => person.name === newPerson.name)){
      alert(`${newPerson.name} is already added to the Phonebook`)
    } else {
      setPersons([...persons, newPerson])
      setNewName('')
      setNewNumber('')
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
      <div>Filter Name with <input value={searchString} onChange={handleSearchString} /></div>
      <form onSubmit={handleSubmit} >
        <div>
          <div>name: <input value={newName} onChange={handleNameChange} /></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personToshow.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  )
}

export default App