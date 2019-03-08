import React from 'react';

function TodoForm(props) {
    return (
        <form className="todoForm" onSubmit={props.addTodo}>
            <input 
                name="task" 
                value={props.task} 
                onChange={props.inputChange}
                placeholder="Enter a Task"
            >
            </input>
            <button className="buttonAdd" type="submit">Add Todo</button>
            <button className="buttonClr" onClick={props.clear}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;