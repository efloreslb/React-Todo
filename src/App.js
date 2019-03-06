import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Eat Cookies',
    id: 1528817098476,
    completed: false
  },
  {
    task: 'Feel Bad About Eating All The Cookies',
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
        task: "",
        id: (Math.floor(1000000000000 + Math.random() * 9000000000000)),
        completed: false
    }
  }

  submitAddTodo = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState(prevState => {
      return {
        taskList: [...this.state.taskList, newTodo],
        task: "",
        id: (Math.floor(1000000000000 + Math.random() * 9000000000000)),
        completed: ""
      }
    })
  }

  inputChange = event => {
    this.setState({[event.target.name]: event.target.value});
    // console.log([event.target.value]);
    // console.log("inputChange");
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList propTodos={this.state.taskList}/>

        <TodoForm state={this.state} submit={this.submitAddTodo} change={this.inputChange}/>
        {/* Functions need to be passed as props to be accessible in other components */}
      </div>
    );
  }
}

export default App;
