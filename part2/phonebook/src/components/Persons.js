import React from 'react'
import Person from './Person'


const Persons = ({persons, filter}) => (
    
    persons.map (person => {

        if (person.name.toLowerCase().indexOf (filter.toLowerCase()) !== -1) {

            return <Person key={person.name} person={person} />

        }

        return ""

    })

)

export default Persons