import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import AddTodo from './components/AddTodo';
import uuid from "uuid"

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Go to Gym!',
        completed: false
      },
      {
        id:  uuid.v4(),
        title: 'Meditate 30min',
        completed: false
      },
      {
        id:  uuid.v4(),
        title: 'Take a bath!',
        completed: false
      },
      {
        id:  uuid.v4(),
        title: 'Have Breakfast!',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id:  uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render(){
    return (
      <div className="App">
      
      <h1 className="text-center p-2">TodoList</h1>
      <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }  
}

export default App;
