import React, { Component } from 'react';
import API from "../../api";

class TodoItems extends Component {


  createTasks = item => {

    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item)}>
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems