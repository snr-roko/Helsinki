import { useState } from "react"

const App = () => {
const [searchString, setSearchString] = useState('')
const [countries, setCountries] = useState(null)




  return (
    <div>
      Find Countries <input value={searchString} onChange={(event) => setSearchString(event.target.value)}/>
    </div>
  )
}

export default App