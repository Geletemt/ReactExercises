import { useState } from 'react'
import './App.css'

function App() {
  const [people, setPeople] = useState([...Array(24).keys()].map(i => i + 1).sort(() => Math.random() - 0.5));
  const [liked, setLiked] = useState(0);
  const [resetMode, setResetMode] = useState(false);
 


  const like = (type) => {
 
    if (type === 'si') {
      setLiked(liked + 1);
    }
    const tempPeople = [...people];
    tempPeople.shift();
    setPeople(tempPeople);
    if (tempPeople.length === 0) {
      setResetMode(true)
    }
  };

  if (resetMode) {
    return <div id="reset">
      <h1>Ya no hay mas gente</h1>
      <button onClick={() => location.reload()}>Reiniciar</button>
    </div>;

  }




  return (
    <>
      <div id="contenedor-imagen" style={{ backgroundImage: people.length > 0 ? `url('../images/${people[0]}.png')` : 'none' }} />
      <div id="contenedor-botones">
        <input type="button" id="si" disabled={people.length === 0} value="Me gusta" onClick={() => like('si')} />
        <input type="button" id="no" disabled={people.length === 0} value="No me gusta" onClick={() => like('no')} />
      </div>
      <div id="te-gustan">
        Te gustan <b>{liked}</b> personas
      </div>
     
     
    </>
  )
}

export default App
