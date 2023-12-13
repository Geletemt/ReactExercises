import { useState } from 'react';


function Fibonacci() {

    const [numero, setNumero] = useState('');
    const [numeroOk, setNumeroOk] = useState(undefined);

    const verifica = (numero) => {


        let num = parseInt(numero);


        let fibo = [0, 1];
        for (let i = 2; i <= (num + 1); i++) {

            fibo[i] = fibo[i - 1] + fibo[i - 2];
            fibo.push(fibo[i]);

        }

        let filtro = fibo.find((value) => value == numero);

        if (filtro == numero) {
            setNumeroOk(true);
        } else {
            setNumeroOk(false);
        }

    }
    return (
        <>
            <h1>Comprobador de Fibonacci</h1>

            <input
                type="number"
                id="numero"
                placeholder="Introduce número a comprobar"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
            />
            <button onClick={() => verifica(numero)}>Verifica</button>

            <div>
                {numeroOk === true && <p>El numero pertenece a la sucesión fibonacci</p>}
                {numeroOk === false && <p>El numero no pertenece a la sucesión fibonacci</p>}
            </div>

        </>
    )
}

export default Fibonacci;


