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
    this.deleteItem = this.deleteItem.bind(this);
    //this.handleInput = this.handleInput.bind(this);
    this.state = {
      items: this.props.entreprise.items,
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  async deleteItem(item) {

    try {
      console.log("item current todoitem", item)
      await API.delete(`/entreprises/task/delete/${this.props.entreprise._id}/${item.key}/${item.text}`);
      const itemsEntreprise = await API.get(`/entreprises/${this.props.entreprise._id}`);
      console.log("itemsEntreprise", itemsEntreprise.data.entreprise.items)
      this.setState({
        items: itemsEntreprise.data.entreprise.items
      })
    } catch (error) {
      console.log(error);
    }
  }

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
        await API.put(`/entreprises/task/add/${this.props.entreprise._id}`, newItem);
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
    {/*this.state.items = this.props.entreprise.items.map(function (item){
        return {
            currentItem: {
                text: item.text,
                key:item.key,
              }
        }
    });*/}
    return (
      <div className="App">
        <div className="row">
          <Graphi
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
        </div>
        <div className="row">
          <TodoItems entries={this.state.items} deleteItem={this.deleteItem} id={this.props.entreprise._id} />
        </div>
      </div>
    );
  }
}
export default Graph;