import React from 'react';
import EthDatas from '../EthDatas/EthDatas';
import EthChart from '../EthChart/EthChart';
import  '../../GlobalCss/Card.css';

export default function Widgets() {
    return(

<div className="">
    <div className="container">

        <div className="row">
                
            <div className="col">
                <EthDatas/>
            </div>

            <div className="col">
                <EthChart/>
            </div>

            <div className="col">
                <EthDatas/>
            </div>

           
       
        </div>
     </div>
</div>
        )
}
