import React from 'react';
import  {Card,Row,Col} from 'react-bootstrap';
import EthDatas from '../EthDatas/EthDatas';

export default function Widgets() {
    return(

<div classNameName="">
    <div className="container">

        <div className="row">
                
            <div className="col">
                <EthDatas/>
            </div>

            <div className="col">
                <EthDatas/>
            </div>

            <div className="col">
                <EthDatas/>
            </div>

           
       
        </div>
     </div>
</div>
        )
}
