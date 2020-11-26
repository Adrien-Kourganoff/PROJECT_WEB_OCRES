import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';

  var data = [

    {
    labels: ["Fourniture", "Salaires", "Autre"],
  
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#C2BDEF", "#BDEAEF", "#EFC2BD"],
        hoverBackgroundColor: ["#C2BDEF", "#BDEAEF", "#EFC2BD"],
      },
    ],
  },
  {
    datasets: [
      {
        data: [10, 20],
      },
    ],
    backgroundColor: ["#C2BDEF", "#BDEAEF"],
    hoverBackgroundColor: ["#C2BDEF", "#BDEAEF"],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Gain", " "],
  }
  ]
  ;

class Doughnutt extends Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    data = data[this.props.user];
    option = {
        legend: {
          display: false,
        },
      };
    render() {
        return (
            <Doughnut data={this.data} options={this.option} />
        );
    }
}

export default Doughnutt;