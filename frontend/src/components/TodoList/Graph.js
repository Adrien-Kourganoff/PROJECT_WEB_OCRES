import React, { Component } from "react";
import Graphi from "./Graphi";
import TodoItems from "./TodoItems";
import "./Todo.css";
import API from "../../api";
class Graph extends Component {
  inputElement = React.createRef();
  constructor(props) {
	super(props);
	this.addItem = this.addItem.bind(this);
	//this.handleInput = this.handleInput.bind(this);
    this.state = {
      items: this.props.user.items,
      currentItem: {
        text: "",
        key: "",
      },
    };
  }


/*deleteItem = key => {
	const filteredItems = this.state.items.filter(item => {
	  return item.key !== key
	})
	this.setState({
	  items: filteredItems,
	})
  }*/
  handleInput = (e) => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem,
    });
  };
  async addItem(e) {
    e.preventDefault();
    try {
      const newItem = this.state.currentItem;
      if (newItem.text !== "") {
		const items = [...this.state.items, newItem];
		await API.put(`/entreprises/task/add/${this.props.user._id}`, newItem);
        this.setState({
			items: items,
			currentItem: { text: '', key: '' },
		  })
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    /*this.state.items = this.props.user.items.map(function (item){
		return {
			currentItem: {
				text: item.text,
				key:item.key,
			  }
		}
	});*/
    return (
      <div className="App">
        <div class="row">
          <Graphi
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
        </div>
        <div class="row">
          <TodoItems entries={this.state.items} id={this.props.user._id} />
        </div>
      </div>
    );
  }
}
export default Graph;
