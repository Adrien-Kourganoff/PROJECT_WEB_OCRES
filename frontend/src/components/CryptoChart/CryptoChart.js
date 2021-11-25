import React from 'react';
import  {Card ,ListGroup} from 'react-bootstrap';
import chartjs from 'chart.js';

import classNames from 'classnames';

import CryptoChartStyle from './CryptoChart.module.css';

export default function CryptoChart(props) {
        
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



            </div>

            <ListGroup.Item >

            </ListGroup.Item>

        </ListGroup>
</Card>
       
    
        )
}
