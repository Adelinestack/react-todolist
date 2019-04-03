import React, { Component } from 'react';
import Todolist from './Todolist';
import './App.css';

export default class App extends Component {
  state = { hasTodolist: false, todolistName: '', description: '' };

  onInputChange(
    input,
    {
      target: { value },
    }
  ) {
    this.setState({
      [input]: value,
    });
  }

  createTodolist() {
    this.setState({
      hasTodolist: 'true',
    });
  }

  render() {
    const { hasTodolist, todolistName, description } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>To do list</h1>
        </header>
        {!hasTodolist && (
          <div>
            <input
              type="text"
              placeholder="To do list name"
              onChange={this.onInputChange.bind(this, 'todolistName')}
            />
            <input
              type="text"
              placeholder="Description"
              onChange={this.onInputChange.bind(this, 'description')}
            />
            <button onClick={this.createTodolist.bind(this)}>Create</button>
          </div>
        )}
        {hasTodolist && (
          <Todolist todolistName={todolistName} description={description} />
        )}
      </div>
    );
  }
}
