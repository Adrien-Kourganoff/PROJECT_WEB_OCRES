import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';

class DoughnuttG extends Component {
    constructor(props) {
        super(props);
         this.state = { benef : this.props.user };
        // this.state = {  }
    }
    option = {
        legend: {
          display: true,
        },
      };
    render() {
      var datas = 
        {
        labels: ["Immobillier", "Marchandise", "Investissement", "Autre"],
      
        datasets: [
          {
            data: this.props.user,
            backgroundColor: ["#FFADCF", "#FFD0D0", "#FFF0CF","#FFFFD6"],
            hoverBackgroundColor: ["#D993B0", "#D9B1B1", "#D9CCB0","#D9D9B6"],
          },
        ],
      };
        return (
            <Doughnut data={datas} options={this.option} />
        );
    }
}

export default DoughnuttG;