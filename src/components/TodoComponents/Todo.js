import React from 'react';

//class Todo extends React.Component {// Class component only needed to hold state
export default function Todo(props) {
    let completed = props.todo.completed ? "completed" : "";

    return (
        <div 
            className = {`todo ${completed}`}
            key = {props.todo.id}
            onClick = {event => {
                //console.log(props.toggle);
                props.toggleTodo(props.todo.id);
            }}
        >
        
            <p>{props.todo.task}</p>
        </div> //Displaying the task property of each propTodo which is passed by TodoList
    )
}