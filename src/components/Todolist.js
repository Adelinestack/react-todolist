import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
      newItemName: '',
    };
  }

  onInputChange({ target: { value: newItemName } }) {
    this.setState({
      newItemName,
    });
  }

  addItemToList() {
    const id = this.state.itemsList.length + 1;
    const itemName = this.state.itemName;

    this.setState(prevState => {
      const newItemsList = [...prevState.itemsList, { id, itemName }];

      return { itemsList: newItemsList, newItemName: '' };
    });
  }

  render() {
    const { todolistName, description } = this.props;

    return (
      <div>
        <h2>{todolistName}</h2>
        <div>{description}</div>
        <div>
          <input
            type="text"
            placeholder="Item Name"
            onChange={this.onInputChange.bind(this)}
          />
          <button onClick={this.addItemToList.bind(this)}>Add</button>
        </div>
        <TodoItem />
      </div>
    );
  }
}
