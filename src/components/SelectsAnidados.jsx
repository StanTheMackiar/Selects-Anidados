import React, { useState } from 'react';

import SelectList from "./SelectList"



const SelectsAnidados = () => {
    const [departament, setDepartament] = useState("");
    const [city, setCity] = useState("");

    const url = 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json'

  return (
    <div>
        <h2>Selects Anidados</h2>
        <h3>Colombia</h3>
        <p>Por favor digite su ubicacion</p>
        <SelectList 
        title="departamento" 
        msg="Seleccione el departamento"
        url={url} 
        handleChange={e => setDepartament(e.target.value)}
        departament={departament}
        />
        {departament &&
        <SelectList 
        title="ciudad" 
        msg="Seleccione su ciudad"
        url={url} 
        handleChange={e => setCity(e.target.value)}
        departament={departament}
        />
        }
        
        <pre>
            <code>
                {departament} - {city}
            </code>
        </pre>
    </div>
  )
}

export default SelectsAnidados