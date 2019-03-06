import React from 'react';

//class Todo extends React.Component {// Class component only needed to hold state
function Todo(props) {
    return (
        <p style={{color:"steelblue"}}>task:{props.propTodo.task} id:{props.propTodo.id}</p> //Displaying the task property of each propTodo which is passed by TodoList
    )
}

export default Todo;