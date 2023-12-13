import { useState } from 'react';


export default function Random(props) {
    const{random, setRandom} = props;
    

    return (
        <>
            {random !== undefined ? (
                <h1>El Random es {random}</h1>
            ) : (
                <h1>Aún no hay random</h1>
            )}
            <button onClick={() => setRandom(Math.random())}>
                Cambiar el random
            </button>
            <button onClick={() => setRandom(undefined)}>Eliminar el random</button>

        </>
    );
}