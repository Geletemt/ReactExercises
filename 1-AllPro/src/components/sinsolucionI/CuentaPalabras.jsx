import { useState } from 'react';


function CuentaPalabras() {
    const [textArea, setTextArea] = useState('');
    const [numWords, setNumWords] = useState();


    const Contador = () => {

        const parrafoTemp = textArea.replaceAll('.', ' ');
        const parrafoSplit = parrafoTemp.split(' ');

        for (let i = 0; i <= parrafoSplit.length; i++) {
            //espacio al principio de la cadena
            if (parrafoSplit[0] == '') {
                parrafoSplit.splice(0, 1);
            } else if (parrafoSplit[i] == '') {
                parrafoSplit.splice(i, 1);

            }

        }
        setNumWords(parrafoSplit.length);

    }

    const Reiniciar = () => {

        setTextArea('');
        setNumWords(undefined);
    }

    return (
        <>
            <h1 style={{ color: 'red' }}>Contador de palabras</h1>
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Introduce Parrafo"
                    id="floatingTextarea"
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}></textarea>
                <label htmlFor="floatingTextarea"></label>
            </div>
            <button onClick={() => Contador()}>Enviar Formulario</button>
            <button onClick={() => Reiniciar()}>Reiniciar</button>
            <div>
                <h1>
                    {numWords != undefined && <p>La cantidad de palabras es {numWords}</p>}
                    {numWords == 0 && <p>Introduzca texto para contar palabras</p>}

                </h1>
            </div>
        </>
    )
}

export default CuentaPalabras;
