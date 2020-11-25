import React, { Component } from 'react'
import Graph from 'chart.js';


class Graphi extends Component {
    componentDidUpdate() {
      this.props.inputElement.current.focus()
    }
    render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.props.addItem}>
              <div class="col-sm-7">
                <input
                  placeholder="Taches"
                  ref={this.props.inputElement}
                  value={this.props.currentItem.text}
                  onChange={this.props.handleInput}
                />
              </div>
              <div class="col-sm-2">
                <button type="submit"> Ajouter </button>
              </div>
              
              
            </form>
          </div>
        </div>
      )
    }
  }
export default Graphi