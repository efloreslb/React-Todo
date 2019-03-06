import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.submit}>
            <input 
                name="task" 
                value={props.state.task} 
                onChange={props.change}
                placeholder="Input todo here"
            >
            </input>
            <button type="submit">Add Todo</button>
            <button type="reset">Clear Completed</button>
        </form>
    )
}

export default TodoForm;