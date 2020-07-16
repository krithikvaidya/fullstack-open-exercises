import React from 'react'
import Button from './Button'

const PersonForm = (props) => (

    <div>
        <form>
            <p>name: <input value={props.newName} onChange={props.handleNameChange}/> </p>
            <p>number: <input value={props.newNumber} onChange={props.handleNumberChange}/> </p>
            <Button onClick={props.addRecord} text="add" /> <br/>
        </form>
    </div>

)


export default PersonForm