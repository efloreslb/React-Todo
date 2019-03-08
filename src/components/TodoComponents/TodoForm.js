import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.addTodo}>
            <input 
                name="task" 
                value={props.task} 
                onChange={props.inputChange}
                placeholder="What's next?"
            >
            </input>
            <button type="submit">Add Todo</button>
            <button onClick={props.clear}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;