import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
class Doughnutt extends Component {
    option = {
        legend: {
          display: false,
        },
      };
    render() {

        return (
            <Doughnut data={this.props.user} options={this.option} />
        );
    }
}

export default Doughnutt;