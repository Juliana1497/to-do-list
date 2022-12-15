import React, { useState } from "react";//Se importa un Hook useState 
import TaskList from "./Tasklist";//Se importa la Tasklist ya que el container abarcara todos los elementos, es decir es el componente padre
import FormTodo from "./FormTodo";//Se importa el FromTodo ya que el container es el componente padre de este componente

const Container = () => {//Se declara una constante con una función anonima, donde se llama la lista de elementos del array
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {//Se crea una constante en donde se mostraran todos los elementos de la lista
    setList([...list, addItem]);
  };

  //En el From/odo devolvera los items agregados por el usuario en el imput y en el task list devolvera la lista que se agrego en los inputs
  return (
    <div>
      <FormTodo handleAddItem={handleAddItem} />

      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;
