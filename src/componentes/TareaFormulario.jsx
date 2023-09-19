import React, { useState } from "react";
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {
    
    const [input, setInput] = useState('');

    const handleChange = e => {
            setInput(e.target.value);
        }
    

    const handleSend = e => {
        e.preventDefault();
        

        const tareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);  
    }

    return (
        <form 
        className="tarea-formulario"
        onSubmit={handleSend}>
            <input 
                className="tarea-input"
                type="text"
                placeholder="Escribe una Tarea"
                name="texto"
                onChange={handleChange}
            />
            <button className="tarea-boton">
                Agregar Tarea
                </button>
        </form>
    )
}

export default TareaFormulario;