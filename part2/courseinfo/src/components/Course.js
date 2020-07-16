import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {

    const sum = course.parts.reduce ((sum, part) => sum + part.exercises, 0)

    return(
        <p>Number of exercises {sum}</p>
    ) 
}

const Part = (props) => {
    return (
        <p>
        {props.part.name} {props.part.exercises}
        </p>    
    )
}


const Content = ({ course }) => {

    const course_parts = course.parts

    return (

        <div>

        {course_parts.map (part => 
            
            <Part key={part.id} part={part} />

        )}

        </div>
    )
}

const Course = ({ course }) => {

    return (
        <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
        </>
    )

}

export default Course