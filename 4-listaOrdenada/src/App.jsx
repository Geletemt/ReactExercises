import { useState } from 'react'

import './App.css'

function App() {
  const [filterInput, setFilterInput] = useState('');
  const [userList] = useState([
    'Paco clavel',
    'Pepe botijo',
    'Ricardo el bolchevique',
    'Ramón García',
    'Leticia Sabater',
    'Angel Merkel',
  ]);
  const [filteredUserList, setFilteredUserList] = useState([
    'Paco clavel',
    'Pepe botijo',
    'Ricardo el bolchevique',
    'Ramón García',
    'Leticia Sabater',
    'Angel Merkel',
  ]);

  const filter = () => {
    const tempUserList = [...userList];
    const tempFilteredUserList = tempUserList.filter((user) => user.toLowerCase().includes(filterInput.toLowerCase()))
    setFilteredUserList(tempFilteredUserList);
  }

  const reset = () =>{
    setFilteredUserList(userList);

  }
  return (
    <>
    <input type='button' value="Filtrar" onClick={() => filter()}/>
    <input type='button' value="Reiniciar"onClick={() => reset()} />
      <input
        type="text"
        id="filter"
        placeholder='Buscar...'
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
      />
      <ul>
        {filteredUserList.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  )
}

export default App
