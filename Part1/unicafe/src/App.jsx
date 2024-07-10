import {useState} from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positiveRate, setPositiveRate] = useState(0)

const handleClickForGood = () => {
  const updatedGood = good + 1
  setGood(updatedGood)
  const updatedTotal = updatedGood + neutral + bad
  setTotal(updatedTotal)
  setAverage((updatedGood * 1 + neutral * 0 + bad * -1) / updatedTotal)
  const positiveRate = (updatedGood / updatedTotal) * 100
  setPositiveRate(`${positiveRate}%`) 
}
const handleClickForNeutral = () => {
  const updatedNeutral = neutral + 1
  setNeutral(updatedNeutral)
  const updatedTotal = good + updatedNeutral + bad
  setTotal(updatedTotal)
  setAverage((good * 1 + updatedNeutral * 0 + bad * -1) / updatedTotal)
  const positiveRate = (good / updatedTotal) * 100
  setPositiveRate(`${positiveRate}%`) 
}
const handleClickForBad = () => {
  const updatedBad = bad + 1
  setBad(updatedBad)
  const updatedTotal = good + neutral + updatedBad
  setTotal(updatedTotal)
  setAverage((good * 1 + neutral * 0 + updatedBad * -1) / updatedTotal)
  const positiveRate = (good / updatedTotal) * 100
  setPositiveRate(`${positiveRate}%`) 
}


  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={handleClickForGood}>Good</button>
      <button onClick={handleClickForNeutral}>Neutral</button>
      <button onClick={handleClickForBad}>Bad</button>

      <h3>Statistics</h3>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total {total}</p>
      <p>Average {average}</p>
      <p>Positive Rate {positiveRate}</p>
    </div>
  )
}

export default App;