import React from 'react';
import TodoList from './TodoList';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoForm: props.form //
        }
    }

    render() {
        return (
            <div>
                This is the TodoForm Component
                <form onSubmit={this.formSubmit}>
                    <input 
                        name="task" 
                        value={this.state.task} 
                        onChange={this.inputChange} 
                        placeholder="...todo"
                    >
                    </input>
                    <button type="submit">Add Todo</button>
                    <button>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;