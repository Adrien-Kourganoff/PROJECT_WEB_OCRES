import React, { Component } from "react";
import './Widget.css';
import Meteo from './Meteo.js';

class Widget extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: this.props.type,
      }
    }

    selectType(){
      switch (this.state.title){
        case "Météo":
          return (
            <Meteo/>
          );
  default:
      }
    }

    render() {
        return (
          <div className="widget">
              <div className="grid-meteo">
              <h4 className="widget-title">{this.state.title}{this.selectType()}</h4>
              </div>
              <div className="grid-stats">Stats</div>
              <div className="grid-mail">Mail</div>
              <div className="grid-suggestions">Suggestions</div>
              <div className="grid-musique">Musique</div>
              <div className="grid-shopping">Shopping</div>
          </div>

          // <div className="widget">
          //     <div className="widget-header">
          //       <h4 className="widget-title">{this.state.title}</h4>
          //     </div>
          //     <div className="widget-body">
          //       {this.selectType()}
          //     </div>
          // </div>

        );
    }


    // eslint-disable-next-line no-dupe-class-members

}


export default Widget;
