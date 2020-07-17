import React from 'react'

const Notification = ({ type, message }) => {

    if (message === null)
        return null;
    
    console.log(type)
    console.log(message)

    if (type === "error") {

        return (

            <div className="error">
                {message}
            </div>

        )
        
    }
    
        
    else if (type === "success") {

        return (

            <div className="success">
                {message}
            </div>

        )

    }

}

export default Notification