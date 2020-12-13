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
      await API.delete(`/entreprises/task/delete/${this.props.id}/${item.key}`);
    }catch (error) {
      console.log(error);
      }
    }

  createTasks = item => {
    
    return (
      <li key={item.currentItem.key} onClick={() => this.deleteItem(item.currentItem)}>
        {item.currentItem.text}
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