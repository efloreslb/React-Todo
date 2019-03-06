// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.state)
        return (
            <div style={{color:"orange"}}>
               This is inside todoList 
               <Todo />
            </div>
        )
    }
}

export default TodoList;