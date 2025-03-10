import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Double!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count == 0? count+=1 : count *= 2)}>
          Count : {count}
        </button>
        <br />
        <button className="reset" onClick={() => setCount((count) => count = 0)}>
          RESET
        </button>
        <p>
          Tab to double numbers!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
