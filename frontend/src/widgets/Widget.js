import React, { Component } from "react";
import './Widget.css';
import Meteo from './Meteo.js';
import Suggestion from './Suggestion.js';

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

          case "Suggestion":
            return(
              <Suggestion/>
            );
        
          default:
            return(
              <p>Undefined widget</p>
            )
      }
    }

    render() {
        return (
          <div className="widget">
              <h4 className="widget-title">{this.state.title}{this.selectType()}</h4>
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
