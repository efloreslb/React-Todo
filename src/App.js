import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import "./App.css";

const todos = [
  {
    task: 'Feed the Dogs',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Feed the Cat',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Buy Coffee',
    id: 1528817098476,
    completed: false
  },
  {
    task: 'Meditate',
    id: 1528817089124,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
        taskList: todos,
        task: ""
    }
  }

  inputChange = event => {
    this.setState({[event.target.name]: event.target.value});
    // console.log([event.target.value]);
  }

  addTodo = event => {
    event.preventDefault();

    // let newTodo = {
    //   task: this.state.task,
    //   id: Date.now(),
    //   completed: false
    // };
    if (this.state.task === "") {
      return;
    } 
    else {
      this.setState(prevState => {
        return {
          taskList: [...this.state.taskList, 
            {
              task: prevState.task,
              id: Date.now(),
              completed: false
            }
          ],
          task: ""
        }
      })
    }
  }

  toggleTodo = taskId => {
    console.log('toggle called', taskId);
    this.setState(prevState => {
      return {
        taskList: prevState.taskList.map(todoItem => {
          if (todoItem.id === taskId) {
            return {
              task: todoItem.task,
              id: todoItem.id,
              completed: !todoItem.completed
            }
          } else {
            return todoItem;
          }
        })
      }
    })
  }

  clear = tasks => {
    console.log('cleared', this.state.taskList);
    this.setState(prevState => {
      return {
        taskList: prevState.taskList.filter(item => {
          return item.completed !== true;
        })
      }
    })
  }

  delete = taskId => {
    const newArr = this.state.taskList.slice();
    const filtered = newArr.filter(item => item.id !== taskId);
    this.setState({taskList: filtered});
  }

  render() {
    return (
      <div className="container">
        <h1>TASK TRACKER</h1>

        <TodoForm 
          task={this.state.task} 
          addTodo={this.addTodo} 
          inputChange={this.inputChange} 
          clear={this.clear}

        />

        <TodoList 
          todos={this.state.taskList}
          deleteTodo={this.delete}
          toggleTodo={this.toggleTodo} //Spent 1-2 hours!! I accidentally passed this to TodoForm
        />

        
        {/* Functions need to be passed as props to be accessible in other components */}
      </div>
    );
  }
}

export default App;
