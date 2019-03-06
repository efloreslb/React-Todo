// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

function TodoList(props) {
    return (
        <div>
            {props.propTodos.map(todo => (
                <Todo propTodo={todo} key={todo.id}/> //Creates a Todo component for each object inside the propTodos array
            ))}
        </div>
    )
}

export default TodoList;