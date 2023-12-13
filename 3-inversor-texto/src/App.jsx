import { useState } from 'react'


function App() {
  const [title,setTitle] = useState('Hola!');
  const [tempTitle, setTempTitle] = useState('');
  const [color, setColor] = useState('black');

  return (
    <>
    <div>
      <h1 style={{color: color}}>{title}</h1>
      <input 
      type="text" 
      value={tempTitle} 
      onChange={(e) =>
       setTempTitle(e.target.value)
       }
       />
       <button onClick={() => {
          setTitle(tempTitle.split('').reverse().join(''));
          setTempTitle('');
       }}
       >
       Convertir!</button>
    </div>
    <div>
       <button onClick={() => setColor('Black')}>Negro</button> 
       <button onClick={()=> setColor('Red')}>Rojo</button> 
       <button onClick={()=> setColor('Blue')}>Azul</button> 
       


    </div>
    </>
  )
}

export default App
