import React from 'react';
import TodoList from './TodoList';

class TodoForm extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div>
                <TodoList />
                This is the TodoForm Component
                <form>
                    <input>
                    </input>
                    <button type="submit">
                        Add Todo
                    </button>
                    <button>
                        Clear completed
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoForm;