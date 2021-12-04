import React from 'react';
import  {Card ,InputGroup,FormControl, ListGroup} from 'react-bootstrap';
import MetamDatasStyle from './MetamDatasStyle.css';
import classNames from 'classnames';


export default function MetamDatas(props) {
   
    var Newprice = props.dataBalance.result * 0.000000000000000001;

   function check()
   {
           var adrsToCheck,
           element = document.getElementById('adrs');

           //console.log(element.value);

           if (element !== null) {                            
               adrsToCheck = element.value; 

            //   console.log(adrsToCheck);
               props.setAddress(adrsToCheck);
               props.fetch();
           }
           else {
               adrsToCheck = null;
               console.log("element is null");
           }
   }

    return( 

            <Card className ="h100" >
                    <ListGroup variant="flush">

                    <ListGroup.Item>
                            <div className="row align-items-center">

                                <div className="ethScanTitle">Scan ETH Wallet : <br></br> </div>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                                <FormControl id="adrs" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1"/>
                                <button  className="btn" id="button-addon2" onClick={check}>Check</button>
                                
                            </InputGroup>

                            </div>

                        </ListGroup.Item>

                    <ListGroup.Item>
                            <div className="row align-items-center">

                                <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                ETH BALANCE : {Newprice} 
                                </div>
                            </div>

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div className="row align-items-center">

                                <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                 Transaction time : {props.dataTime.result} sec
                                </div>
                            </div>

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div className="row align-items-center">

                                <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                 Fast Gas Price : {props.dataGas.result.FastGasPrice} 
                                </div>

                            </div>

                        </ListGroup.Item>

                        <ListGroup.Item>
                        <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                 Proposed Gas Price : {props.dataGas.result.ProposeGasPrice} 
                                </div>
                        </ListGroup.Item>

                        <ListGroup.Item>

                        <div className={classNames("col-9", MetamDatasStyle.crypto)}>
                                 Safe Gas Price : {props.dataGas.result.SafeGasPrice} 
                                </div>


                                <div className="fee">(fee in gwei)</div>

                        </ListGroup.Item>

                    </ListGroup>
            </Card>
       
    
        )
}
