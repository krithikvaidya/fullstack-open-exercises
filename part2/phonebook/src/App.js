import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonsService from './services/persons'
import Notification from './components/Notification'

let notificationType = null

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState ('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)

  const handleNameChange = (event) => {
      setNewName (event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber (event.target.value)
  }

  const handleFilterChange = (event) => {
      setFilter (event.target.value)
  }

  const handleNotification = (notification_type, message) => {

    setNewName ('')
    setNewNumber ('')

    notificationType = notification_type
    setNotificationMessage (message)

    setTimeout (() => {
      notificationType = null
      setNotificationMessage (null)
    }, 5000)

  }

  const addRecord = (event) => {

    event.preventDefault()
    let curr_person

    if (persons.some(person => {
      curr_person = person
      return person.name === newName
    })) 
    {
        
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        {
          const updated_record = {
            ...curr_person,
            number: newNumber
          }

          PersonsService
          .modify (updated_record)
          .then (response => {

            setPersons (persons.map (person => person.name === curr_person.name ? updated_record : person))
            handleNotification ("success", `Updated ${curr_person.name}`)

          })
          .catch(err => {

            handleNotification ("error", `Information of ${curr_person.name} has already been removed from the server`)

          })
          
        }
        
        return
    }

    const new_record = {
        name: newName,
        number: newNumber
    }

    PersonsService
      .add(new_record)
      .then(response => {

        setPersons(persons.concat(response.data))
        handleNotification("success", `Added ${new_record.name}`)

      })
      .catch(err => {

        handleNotification("error", `An error occured. Could not add ${curr_person.name}`)

      })

  }

  const effect_hook = () => {

    console.log (persons)
    PersonsService
      .getAll()
      .then(response => {
        console.log('getAll promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect (effect_hook, [])

  return (
    <div>

      <Notification type={notificationType} message={notificationMessage} />

      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />
        
      <h1>add a new</h1>

      <PersonForm 
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
        addRecord={addRecord}
      />

      <h2>Numbers</h2>

      <Persons setPersons={setPersons} persons={persons} filter={filter} />

    </div>
  )
}

export default App