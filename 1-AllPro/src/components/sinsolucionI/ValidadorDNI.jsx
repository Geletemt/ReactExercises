import { useState } from 'react';


function ValidadorDNI() {
    const [dni, setDni] = useState('');
    const [letrasDni] = useState('TRWAGMYFPDXBNJZSQVHLCKET');
    const [expresion_dni] = useState(/^\d{8}[a-zA-Z]$/);
    const [dniOk, setdniok] = useState(undefined);




    const verifica = (dni) => {

        //compruebo que la cadena cumple el formato de DNI
        if (expresion_dni.test(dni) == true) {

            const numeroDni = dni.substring(0, 8);
            const letraDni = dni.substring(8, 9);

            //Obtengo que letra le corresponde segun la formula
            //de calculo del DNI
            const division = (numeroDni % 23);
            const letraCalc = letrasDni.substring(division, division + 1);

            setdniok(letraCalc.toLowerCase() === letraDni.toLowerCase());

            //Depuración
            console.log(`el numero es ${numeroDni} y la letra ${letraDni}`);
            console.log(division);
            console.log(letraCalc);

        } else {
            setDni(false);
        }

    }

    return (
        <>
            <h1>Verificador de Dni</h1>

            <input
                type="text"
                id="dni"
                placeholder="Introduce DNI"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
            />
            <button onClick={() => verifica(dni)}>Verifica</button>

            <div>
                {dniOk === true && <p>El DNI es correcto</p>}
                {dniOk === false && <p>El DNI no es correcto</p>}
            </div>
        </>
    )
}

export default ValidadorDNI;