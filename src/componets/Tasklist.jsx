import React from "react";
import Checkbox from "./Checkbox";//Se importa el checkbox ya que este ira contenido en tasklist


const TaskList = props => {//Los props antes definidos estaran dentro de la Tasklist

    const { list, setList } = props;//Se define una constante en donde estara contenida la lista  antes definido

    const onChangeStatus = e => {//Se crea un evento constante en donde se cambiara el estado del input dependiendo de si se oprime el botón add
    const { name, checked } = e.target;


    const updateList = list.map(item => ({//Se crea una variable constante donde se mapeara la lista subida y se agregara cada item verificando que el item este subido
    ...item,
    done: item.id === name ? checked : item.done
    }));
    setList(updateList);
    };


    const onClickRemoveItem = e => {//Se crea el evento de al darle click al evento este se remueva 
    const updateList = list.filter(item => !item.done);
    setList(updateList);
    };

    const chk = list.map(item => (//Se crea la constante en donde se le asigna una llave a cada item y se puede seleccionar como check o no
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));

    //Se agega el html en donde se recorre toda la lista y se verifica si hay elementos, si los hay se agrega el boton en donde al darle click se remueve los item seleccionados y el cuadro de check, por el contrario si no los hay aparecera el mensaje "No tasks"
    return (
    <div className="todo-list">
        {/*(A-1)*/}
        {list.length ? chk : "No tasks"}
        {/*(B)*/}
        {list.length ? (
        <p>
            <button className="button blue" onClick={onClickRemoveItem}>
            Delete all done
            </button>
        </p>
        ) : null}
    </div>
    );
};

export default TaskList;