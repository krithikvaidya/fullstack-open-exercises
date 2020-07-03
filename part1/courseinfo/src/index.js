import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );

}

const Part = (props) => {

  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );

}

const Content = (props) => {
  
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );

}

const Total = (props) => {

  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  );
  
}


const Display = (props) => {

  return (
    <div>Counter Value: {props.counter}</div>
  );

};

const Button = (props) => {

  return (

    <button onClick={props.handleClick}>{props.text}</button>

  );

};

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [ counter, setCounter ] = useState(0);

  const increment = () => {

    setCounter(counter + 1);

  };
  
  const reset = () => {

    setCounter(0);

  };
  
  const decrement = () => {

    setCounter(counter - 1);

  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Display counter={counter} />
      <Button handleClick={increment} text="Increase" />
      <Button handleClick={reset} text="Reset" />
      <Button handleClick={decrement} text="Decrease" />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))