import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', ph_number: '040-123456' },
    { name: 'Ada Lovelace', ph_number: '39-44-5323523' },
    { name: 'Dan Abramov', ph_number: '12-43-234345' },
    { name: 'Mary Poppendieck', ph_number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState ('')

  const handleNameChange = (event) => {
      setNewName (event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber (event.target.value)
  }

  const handleFilterChange = (event) => {
      setFilter (event.target.value)
  }

  const addRecord = (event) => {

    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
        alert (`${newName} is already added to phonebook`)
        return
    }

    const new_record = {
        name: newName,
        ph_number: newNumber
    }

    setPersons (persons.concat(new_record))

  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
        
      <h1>add a new</h1>

      <PersonForm 
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
        addRecord={addRecord}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} />

    </div>
  )
}

export default App