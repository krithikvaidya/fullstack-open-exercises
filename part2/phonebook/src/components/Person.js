import React from 'react'
import Button from './Button'
import PersonsService from '../services/persons'

const remove_person = (setPersons, persons, id, name) => {

    if (window.confirm(`Do you really want to delete ${name}?`)) { 
        PersonsService
        .remove (id)
        .then (response => {
            console.log (response)
            setPersons (persons.filter(person => person.id === id ? false : true))
        })
        .catch (err => {
            console.log ('failed')
        })
    }

}

const Person = ({ setPersons, persons, person }) => (

    <div>
        <span>{person.name} {person.number}</span>
        <span><Button onClick={() => remove_person (setPersons, persons, person.id, person.name) } text="remove" /></span>
        <br/>
    </div> 

)

export default Person