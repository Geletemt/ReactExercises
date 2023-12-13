import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'
import Random from './Random'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Angel');
  const [random, setRandom] = useState();

  return (
    <>
      

      <Name componentName={name}/>
      <Random random={random} setRandom={setRandom}/>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={() =>setName('Angel')}>Angel</button>
      <button onClick={() =>setName('Laura')}>Laura</button>
      <button onClick={() =>setName('Maria')}>Maria</button>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <option>Hola</option>
      </nav>

      
      
    </>
  )
}

export default App
