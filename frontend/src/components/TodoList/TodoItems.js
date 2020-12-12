import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    console.log("item current todoitem",item.currentItem)
    return (
      <li key={item.currentItem.key} onClick={() => this.props.deleteItem(item.key)}>
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