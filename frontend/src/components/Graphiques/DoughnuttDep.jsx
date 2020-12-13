import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
class DoughnuttDep extends Component {
  constructor(props) {
    super(props);
    this.state = { dep: this.props.dep };
  }
  option = {
    legend: {
      display: false,
    },
  };

  render() {
    var datasets = {
      labels: ["Charges Salariés", "Matières Premières", "Charges", "Autre"],

      datasets:
        [{
          data: this.state.dep,
          backgroundColor: ["#CEACCE", "#CFBECF", "#D0E1D1", "#CFFFD0"],
          hoverBackgroundColor: ["#B79FB7", "#B7ACB7", "#B8C4B9", "#B7D9B8"],
        }],
    }
    return (
      <Doughnut data={datasets} options={this.option} />
    );
  }
}

export default DoughnuttDep;