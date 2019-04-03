import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
    };
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          id={`${this.props.key}$(this.state.itemName)`}
          name={this.state.itemName}
        />
        <label>Item</label>
      </div>
    );
  }
}
