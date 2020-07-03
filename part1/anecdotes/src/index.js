import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, text}) => (

  <button onClick={onClick}>{text}</button>

)

const DisplayHighestRated = ({anecdotes, votes}) => {

  let index = 0;
  let max_votes = 0;
  
  for (let i = 0; i < votes.length; i++)
  {
    if (votes[i] > max_votes)
    {
      index = i;
      max_votes = votes[i];
    }
  }

  return (

    <>
      <p>{anecdotes[index]}</p>
      <p>has {max_votes} votes</p>
    </>

  );

}

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array(props.anecdotes.length).fill(0)
  );


  const castVote = () => {

    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);

  }

  const changeAnecdote = () => {

    let index = Math.random() * props.anecdotes.length;
    index = Math.floor (index);

    setSelected(index);

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={castVote} text="vote" />
      <Button onClick={changeAnecdote} text="next anecdote" />

      <h1>Anecdote with the most votes</h1>

      <DisplayHighestRated anecdotes={props.anecdotes} votes={votes} />

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)