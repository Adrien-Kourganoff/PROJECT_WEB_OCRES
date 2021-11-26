import React, {useEffect,useRef } from 'react';
import Chartjs from 'chart.js/';
import  {Card ,ListGroup} from 'react-bootstrap';
import classNames from 'classnames';
import CryptoChartStyle from './CryptoChart.module.css';
import moment from 'moment';
import 'moment/locale/fr'
moment.locale('fr');
moment().format("DD/MM/YYYY");

export default function CryptoChart(props) {

    const chartRef = useRef();

    //console.log(props.data.Data.Data[31].close);
//console.log(props.data.Data.Data);

   /* function dayPrint()
    {
      props.data.Data.Data.map( day => (
            console.log(day.close)
        ))
    }
*/


let days = props.data.Data.Data.map(day => {
    return day.close
});




function setDateAbs(i)
{
    i=i-61;
    var d = new Date();
    d.setDate(d.getDate()+i);
    
    var dateString = moment(d);
    console.log(dateString);
    return dateString;
}

var newDatas=[];

for (let i = 61; i > 0; i--) {
   
    var oneData = {};
    oneData.x=setDateAbs(i);
    oneData.y=days[i];

    newDatas.push(oneData);
  }

  

useEffect(() => {

        if(chartRef && chartRef.current)
        {
            const chartInstance = new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                  //  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'Prix $',
                        data:  newDatas,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        pointRadius : 0,
                    }]
                },
                options: {
                    legend: {
                        display: false
                     },

                     lineHeightAnnotation: {
                        always: true,
                        hover: false,
                        lineWeight: 1.5,
                      },
                    
                      animation: {
                        duration: 2000,
                      },
                      maintainAspectRatio: false,
                      responsive: true,
                      tooltips: {enabled: false},
                      hover: {mode: null},
                      scales: {
                        xAxes: [
                          {
                            type: "time",
                            beginAtZero:true,
                            distribution: "linear",
                            time: {
                                unit: 'day'
                            }
                          },
                        ],
                      },
                   
                    },    
            }  
            
            )
            
        }




    });



    return( 

        <Card className ="h100" >
        <ListGroup variant="flush">
            <ListGroup.Item>
            <div className="row align-items-center">
                    <div>
                        <span className={classNames(CryptoChartStyle.crypto)}>{props.name} &nbsp; : {props.symbol}/USD &nbsp; : 60 Last Days </span>
                    </div>
                </div>
            </ListGroup.Item>
            <div>
                <div >
                        <canvas style={{marginTop: "10px"}} className="canvasMargin" ref ={chartRef}  id="myChart"></canvas>
                </div>



            </div>

        </ListGroup>
</Card>
       
    
        )
}
