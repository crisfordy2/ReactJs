import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useMemo} from 'react';

const useAnyKetToRender = ()=>{
  const [,foreceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", foreceRender);
  }, []);
};

function WordCount({children}) {
  useAnyKetToRender();
  const words = useMemo(()=> children.split(" "), children)
  useEffect(()=> console.log("Se ejecuta useEffect"), [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length}-words</strong>
      </p>
    </>
  );
}

export default function App(){
  return(
    <WordCount>
      un texto con espacios
    </WordCount>
  );
}

/*
<label>Mi frase favorita</label>
      <input
        type="text"
        value={val}
        onChange={(e)=> set(e.target.value)}
        placeholder={frase}
      />
      <button onClick={crearFrase}>Enviar frase</button>
 */

/**
 * const [val, set] = useState("");
  const [frase, setFrase] = useState("Frase ejemplo");

  const crearFrase = ()=>{
    setFrase(val);
    set("");
    if([1,2,3]===[1,2,3]){
      console.log("Paso el if")
    }
  }

  useEffect(()=> console.log(`Escribiendo valor ${val}`),[val])
  useEffect(()=> console.log(`Frase enviada ${frase}`),[frase])
 */