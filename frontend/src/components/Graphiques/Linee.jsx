import React, { Component } from 'react';
import { Line } from "react-chartjs-2";


class Linee extends Component {
    constructor(props) {
        super(props);
        
        this.state = { benef : this.props.user.benef };
        
    }
    render() {
      var datas = {
      labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          label: "en k€",
          borderColor: "#BDEAEF",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#BDEAEF",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#BDEAEF",
          pointHoverBorderColor: "#BDEAEF",
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          data:this.state.benef,
          //data: [65, 59, 80, 81, 56, 55, 40, 55, 62,10, 1 ,66],
        },
      ],
    };
      //datas.datasets.data=this.state.benef;
      console.log(datas);
        return (
            <Line data={datas} />
            
        )
    }
}

export default Linee;