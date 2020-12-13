import React, { Component } from 'react';
import API from "../../api";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  async deleteItem(item) {

    try {
      console.log("item current todoitem",item)
      await API.delete(`/entreprises/task/delete/${this.props.id}/${item.key}/${item.text}`);
    }catch (error) {
      console.log(error);
      }
    }

  createTasks = item => {
    
    return (
      <li key={item.key} onClick={() => this.deleteItem(item)}>
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