import { useState } from 'react'

import EjercicioSwitch from './components/EjercicioSwitch';


function App() {
  const [currentPage, setCurrentPage] = useState();
  const [basicos] = useState([
    { name: '1-Lista de números', link: 'listaNumeros' },
    { name: '2-Par o Impar',link:'parImpar' },
    { name: '3-Tabla de multiplicar',link:'multiplicar' },
    { name: '4-Contador de vocales',link:'contador' },
    { name: '5-Sumade Números pares',link:'sumaNumeros' },
    { name: '6-Conversor de Temperatura',link:'conversor' },
    { name: '7-Piramide de asteriscos',link:'piramide' },
    { name: '8-Adivina el numero',link:'adivinaNum' },
    { name: '9-Numeros Primos',link:'primos' },
    { name: '10-Mayores de Edad',link:'mayorEdad' }
  ]);
  const [ssolucionOne] = useState([
    { name: '1-Validador de DNI', link: 'validadorDNI' },
    { name: '2-Comprobador numero Fibonacci', link: 'fibonacci' },
    { name: '3-Reemplazador de texto', link: 'reemplazaText' },
    { name: '4-Contador de palabras', link: 'cuentaPalabras' },
    { name: '5-Cifrado Cesar', link: 'cifradoCesar' },
    { name: '6-Mad Libs para niños', link: 'madLibs' }
  ]);
  const [ssolucionTwo] = useState([
    { name: '1-Calculadora Edad Perro', link: 'calculadoraDog' },
    { name: '2-Calculadora Interes Compuesto', link: 'calcInteres' },
    { name: '3-Verificador de palindromos', link: 'palindromos' },
    { name: '4-Calculadora de IMC', link: 'imc' },
    { name: '5-Calculadora de Propinas', link: 'propinas' },
    { name: '6-Conversor de unidades', link: 'unidades' },
    { name: '7-Lista de reproduccion de Musica', link: 'musica' },
    { name: '8-Calculadora de Calorías quemadas en carrera', link: 'calorias' },
  ]);


  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Ejercicios de Programación</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                  aria-expanded="false">Basicos</a>
                <ul className="dropdown-menu">
                  {basicos.map((e, i) => (
                    <li key={i}>
                      <a className='dropdown-item' href="#" onClick={() => setCurrentPage(e.link)}>{e.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                  aria-expanded="false">Sin Solucion I</a>
                <ul className="dropdown-menu">
                  {ssolucionOne.map((e, i) => (
                    <li key={i}>
                      <a className='dropdown-item' href="#" onClick={() => setCurrentPage(e.link)}>{e.name}</a>
                    </li>
                  ))}

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                  aria-expanded="false">Sin Solucion II</a>
                <ul className="dropdown-menu">
                  {ssolucionTwo.map((e, i) => (
                    <li key={i}>
                      <a className='dropdown-item' href="#" onClick={() => setCurrentPage(e.link)}>{e.name}</a>
                    </li>
                  ))}

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <EjercicioSwitch currentPage={currentPage} />

    </>
  )
}

export default App
