import { useState } from 'react';


function CifradoCesar() {
    const [textArea,setTextArea]=useState('');
    const [desplazamiento,setDesplazamiento]=useState(0);

    const Encriptar =() =>{
        if (desplazamiento.length === 0) {

            alert('Debe Introducir un numero de desplazamiento mayor o igual que 0');
            return;
        }
        let txtEncriptado = '';
        let caracter;
        let codigo;
        let textov = textArea;
        for (let i = 0; i < (textov.length); i++) {

            caracter = textov.charCodeAt(i);

            if ((caracter >= '65') && (caracter <= '90') || (caracter >= '97') && (caracter <= '122')) {

                codigo = parseInt(caracter) + parseInt(desplazamiento);

                if ((/[a-z]/.test(textov[i])) && (codigo > 122)) {
                    codigo -= 26;
                } else if (/[A-Z]/.test(textov[i]) && codigo > 90) {
                    codigo -= 26;
                }

            } else {
                codigo = caracter;
            }
            caracter = String.fromCharCode(codigo);
            txtEncriptado += caracter;
            setTextArea(txtEncriptado);
        }
    }
    const Reiniciar = () => {
        setTextArea('');
    }
    return (
        <>
            <h1 style={{ color: 'blue',textAlign:'center' }}>Cifrado César</h1>
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
                    id="desplazamiento"
                    placeholder="Introduce Desplazamiento"
                    value={desplazamiento}
                    onChange={(e) => setDesplazamiento(e.target.value)}
                />
            
            <button onClick={() => Encriptar()}>Encriptar Texto</button>
            <button onClick={() => Reiniciar()}>Reiniciar</button>
            
        </>
    )
}

export default CifradoCesar;
