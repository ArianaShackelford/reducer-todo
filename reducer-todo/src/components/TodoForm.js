import React from 'react';

const TodoForm = () => {
    return(
        <div className='form'>
       <input
       type = 'text'
        value = ''
        name='todotext'
        placeholder = 'New Todo'
       />
       <button
       onClick={()=> {
           dispatchEvent({type: 'ADD_TODO', payload: todoState.item})
       }}
       > Add Todo </button>
       </div>
    )
}

export default TodoForm;