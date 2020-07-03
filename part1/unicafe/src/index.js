import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  );

};

const Statistic = ({text, value}) => (

  <>
    <td>{text}</td>
    <td>{value}</td>
  </>

);

const Statistics = ({good, neutral, bad}) => {

  if (good + neutral + bad === 0)
  {
    return (
      
      <div>
        <table>
          <tbody>
            <tr>
              <Statistic text="good" value ={good} />
            </tr>
            
            <tr>
              <Statistic text="neutral" value ={neutral} />
            </tr>

            <tr>
              <Statistic text="bad" value ={bad} />
            </tr>
          </tbody>
        </table>
        <p>{"No feedback given"}</p>
      </div>

    );
  }

  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;

  return (

    <div>
      <table>
        <tbody>
          <tr>
            <Statistic text="good" value ={good} />
          </tr>
          
          <tr>
            <Statistic text="neutral" value ={neutral} />
          </tr>

          <tr>
            <Statistic text="bad" value ={bad} />
          </tr>

          <tr>
            <td>all</td>
            <td>{total}</td>
          </tr>

          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>

          <tr>
            <td>positive</td>
            <td>{positive} %</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
  

};


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {

    setGood (good + 1);

  };

  const handleNeutralClick = () => {

    setNeutral (neutral + 1);

  };

  const handleBadClick = () => {

    setBad (bad + 1);

  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)