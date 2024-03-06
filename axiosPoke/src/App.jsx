import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [pokeList, setpokeList] = useState([])

  const ApiHandler = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => {
        setpokeList([...pokeList, ...response.data.results])
        console.log(pokeList)
      })
  }
  useEffect

  return (
    <>
      <button type='button' onClick={ApiHandler}>Axios Pokemon</button>
      <ol>
        {
          pokeList.map((element,index) =>(
            <li key={index}>{element.name}</li>
          ))
        }
      </ol>

    </>
  )
}

export default App
