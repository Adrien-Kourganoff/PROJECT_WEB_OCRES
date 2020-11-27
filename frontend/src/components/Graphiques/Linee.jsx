import React, { Component } from 'react';
import { Line } from "react-chartjs-2";


class Linee extends Component {
    constructor(props) {
        super(props);
        
        this.state = { benef : this.props.user.benef };
        
    }
    render() {
      var datas = {
      labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],


      
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          label: "Chiffre d'Affaire en k€",
          borderColor: "#CEADFF",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#795EFF",
          pointBackgroundColor: "#795EFF",
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#795EFF",
          pointHoverBorderColor: "#795EFF",
          pointHoverBorderWidth: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          fill: true,
          backgroundColor: "rgb(121,94,255,0.1 )",
          data: this.state.benef,
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