import React from 'react';
import  {Card ,ListGroup} from 'react-bootstrap';
import CryptoDatasStyle from './CryptoDatas.module.css';
import classNames from 'classnames';


export default function CryptoDatas(props) {
    var Newprice = Math.round(props.data[0].price * 100) / 100;

    return( 

            <Card className ="h100" >
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <img src={props.data[0].logo_url} alt={props.data[0].name} className={CryptoDatasStyle.logo}/>
                                </div>
                                <div className={classNames("col-9", CryptoDatasStyle.crypto)}>
                                     {props.data[0].name} : {props.data[0].symbol}
                                </div>
                            </div>

                        </ListGroup.Item>
                        <ListGroup.Item >
                            <div className="row align-items-center">
                                <div className={classNames("col-9", CryptoDatasStyle.usdt)}>
                                    <span className={CryptoDatasStyle.usdtSize}> <b>{Newprice} </b>: {'usdt'}&nbsp;</span>
                                </div>
                                <div className="col-3">
                                <img src={'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/usdt.svg'} alt={'usdt'} className={CryptoDatasStyle.usdtLogo}/>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <div className={classNames(CryptoDatasStyle.mcMargin, CryptoDatasStyle.fontmcD)} >Market cap : {props.data[0].market_cap}{'$'}</div>
                        <div className={classNames(CryptoDatasStyle.mcMargin, CryptoDatasStyle.fontmcD)}>Dominance : {props.data[0].market_cap_dominance*100}%</div> 
                        </ListGroup.Item>
                    </ListGroup>
            </Card>
       
    
        )
}
