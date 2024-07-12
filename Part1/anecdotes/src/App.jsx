import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [max_vote, set_max_vote] = useState(0)


  const handleClickAnecdote = () => {
    const picker = Math.floor(Math.random() * 8)
    setSelected(picker)
  }

  const handleClickVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    const max = newVotes.reduce((a, b) => Math.max(a, b))
    const max_index = newVotes.indexOf(max)
    set_max_vote(max_index)
    
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the Day</h2>
        <p>{anecdotes[selected]}</p>
        <p>{`has ${votes[selected]} votes.`}</p>
        <button onClick={handleClickVote}>Vote</button>
        <button onClick={handleClickAnecdote}>Next Anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most Votes</h2>
        <p>{anecdotes[max_vote]}</p>
        <p>{`has ${votes[max_vote]} votes`}</p>
      </div>
    </div>
  )
}

export default App