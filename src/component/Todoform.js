import React from 'react'

const Todoform = ({handleSubmit,todo,setTodo,editId}) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
    <input 
      type="text" 
      value={todo} 
      placeholder="Add a new todo"
      onChange={(e) => setTodo(e.target.value)} />
    <button type="submit">{editId?"Edit":"Go"}</button>
  </form>
  )
}

export default Todoform