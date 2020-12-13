import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
class DoughnuttGain extends Component {
  constructor(props) {
    super(props);
    this.state = { gain: this.props.gain };
  }
  option = {
    legend: {
      display: false,
    },
  };

  render() {
    var datasets = {
      labels: ["Marchandise", "Immobillier", "Investissement", "Autre"],

      datasets:
        [{
          data: this.state.gain,
          backgroundColor: ["#FFADCF", "#FFD0D0", "#FFF0CF", "#FFFFD6"],
          hoverBackgroundColor: ["#D993B0", "#D9B1B1", "#D9CCB0", "#D9D9B6"],
        }],
    }
    return (
      <Doughnut data={datasets} options={this.option} />
    );
  }
}

export default DoughnuttGain;