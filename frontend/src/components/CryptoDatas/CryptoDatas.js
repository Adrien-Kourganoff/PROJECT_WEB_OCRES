import React from 'react';
import  {Card ,ListGroup,Navbar} from 'react-bootstrap';
import './CryptoDatas.css';

export default function CryptoDatas(props) {
    console.log(props.data);
    var Newprice = Math.round(props.data[0].price * 100) / 100;

    return( 
        <div className="CryptoDatas">

            <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Navbar.Brand>
                                <img src={props.data[0].logo_url} alt={props.data[0].name} className="logo d-inline-block align-top"/>
                                <div className="centerCrypto">&nbsp;{props.data[0].name} : {props.data[0].symbol} </div>
                            </Navbar.Brand>
                        </ListGroup.Item>
                        <ListGroup.Item className="usdtPadding">
                        <Navbar.Brand>
                                <div className="centerUsdt"> <span className="usdtSize"> <b>{Newprice} </b>: {'usdt'}&nbsp;</span></div>
                                <img src={'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/usdt.svg'} alt={'usdt'} className="usdtLogo d-inline-block align-top"/>
                        </Navbar.Brand>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <div className="fontmcD mcMargin">Market cap : {props.data[0].market_cap}{'$'}</div>
                        <div className="fontmcD">Dominance : {props.data[0].market_cap_dominance*100}%</div> 
                        </ListGroup.Item>
                    </ListGroup>
            </Card>
       
       
       
       
       
        </div>

        
        


        )
}
