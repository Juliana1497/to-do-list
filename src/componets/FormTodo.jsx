import React, { useState } from "react";//El useState es un estado de uso para darle funcionalidad al formulario


//Parte donde se agrega lo funcional
const FormTodo = props => {
  const { handleAddItem } = props; //(C-1), agregar items, envia propiedades y caracteristicas que se van a usar en el documento
  const [description, setDescription] = useState(""); // (F-1)
  const handleSubmit = e => {
    e.preventDefault(); // (E)
    // (C-2)
    handleAddItem({//Se le asignan las propiedades y caracteristicas al props
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription(""); // (B)
  };

  //Parte donde se agrega la estructura html
  return (
    <form onSubmit={handleSubmit}> {/* Se agrega el formulario*/}
      {/*(D)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(F-2)*/}
          {/*Se agrega el input con los valores y se llama el metodo set*/}
          <input 
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {/*(A)*/}
          {/*Botón que se habilita solo si el input tiene algun dato*/}
          <button 
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;

