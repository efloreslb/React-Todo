import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-task">
                <p>{this.props.task}</p>
                <p>{this.props.id}</p>
                <p>{this.props.completed}</p> 
            </div>
        )
    }
}

export default Todo;