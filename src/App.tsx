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
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Christabel Concepts</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This website is currently under development.
        </p>
      </div>
      <p className="read-the-docs">
        <i>Dev:</i> <a href="https://favesportfolio.vercel.app">Favitech</a><br></br>
        <i>Owner:</i> <a href="tel:+2348036844091">+234 803 684 4091</a>
      </p>
    </>
  )
}

export default App
