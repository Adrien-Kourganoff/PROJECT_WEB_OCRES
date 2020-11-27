import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
class Doughnutt extends Component {
    constructor(props) {
        super(props);
         this.state = { benef : this.props.user };
        // this.state = {  }
    }
    option = {
        legend: {
          display: false,
        },
      };
    render() {
      var datas = this.state.benef;
      console.log(datas);
        return (
            <Doughnut data={datas} options={this.option} />
        );
    }
}

export default Doughnutt;