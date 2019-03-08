// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

function TodoList (props) { /*({toggleTodo, deleteTodo, todos})  //destructuring */
    // const {toggleTodo, deleteTodo, todos} = props; //then you would remove .props below
    return (
        <div className="todoList">
            {props.todos.map(todoItem => {
                 return <Todo todo={todoItem} key={todoItem.id} toggleTodo={props.toggleTodo} delete={props.deleteTodo}/> 
                //Creates a Todo component for each object inside the propTodos array
            })}
        </div>
    )
}

export default TodoList;