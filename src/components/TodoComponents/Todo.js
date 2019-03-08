import React from 'react';

//class Todo extends React.Component {// Class component only needed to hold state
export default function Todo(props) {
    let completed = props.todo.completed ? "completed" : "";

    return (
        <div className={`todoContainer ${completed}`}>
            <div 
                className = {`todo ${completed}`}
                key = {props.todo.id} //when toggling - error asks for key prop
                onClick = {event => {
                    props.toggleTodo(props.todo.id);
                }}
            >
                {props.todo.task}
            </div>
            <button className="buttonDel" onClick={event => props.delete(props.todo.id)}>Delete</button>
        </div>
    )
}