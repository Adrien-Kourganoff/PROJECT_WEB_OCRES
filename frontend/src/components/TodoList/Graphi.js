import React, { Component } from "react";
import Graph from "chart.js";

class Graphi extends Component {
  // componentDidUpdate() {
  //   this.props.inputElement.current.focus();
  // }
  render() {
    return (
      <div className="todoListMain" style={{width:"100%"}}>
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <div className="row">
              <div className="col-sm-7">
              <input
                placeholder="Tâches"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
              />
            </div>
            <div className="col-sm-5">
              <button type="submit"> Ajouter </button>
            </div>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}
export default Graphi;
