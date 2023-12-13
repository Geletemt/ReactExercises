import { useState } from 'react';


function ReemplazaText() {

    const [textArea, setTextArea] = useState('');
    const [palabra1, setPalabra1] = useState('');
    const [palabra2, setPalabra2] = useState('');

    const changeParrafo = () => {

        const tempTextArea = textArea;
        const word1 = palabra1;
        const word2 = palabra2;



        const newParrafo = (tempTextArea.replaceAll(word1, word2));


        setTextArea(newParrafo);

    }
    const Reinicia = () => {


        setTextArea('');
        setPalabra1('');
        setPalabra2('');

    }
    return (
        <>
            <div>

                <h1>Reemplazador de textos</h1>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Introduce Parrafo"
                        id="floatingTextarea"
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}></textarea>
                    <label htmlFor="floatingTextarea"></label>

                </div>

                <input
                    type="text"
                    id="palabra1"
                    placeholder="Palabra a reemplazar"
                    autoFocus
                    value={palabra1}
                    onChange={(e) => setPalabra1(e.target.value)}></input>
                <input
                    type="text"
                    id="palabra2"
                    placeholder="Nueva palabra"
                    autoFocus
                    value={palabra2}
                    onChange={(e) => setPalabra2(e.target.value)}></input>

                <button onClick={() => changeParrafo()}>Enviar Formulario</button>
                <button onClick={() => Reinicia()}>Reiniciar</button>

            </div>
        </>
    )
}

export default ReemplazaText;