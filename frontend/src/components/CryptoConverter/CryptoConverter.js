import React from 'react';
import  {Card ,ListGroup,Dropdown,InputGroup,DropdownButton,FormControl} from 'react-bootstrap';
import CryptoConverterStyle from './CryptoConverter.module.css';
import classNames from 'classnames';

export default function CryptoConverter(props) {


    return( 
            <Card className ="h100" >
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        
                        <div></div>
       <div>{props.data[1].name}, {props.data[1].symbol.toUpperCase()}</div>             
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><img src={props.data[1].image} alt={props.data[1].symbol} className={classNames(CryptoConverterStyle.logoSize)}/></InputGroup.Text>
                             <FormControl placeholder="currency" aria-label="currency" aria-describedby="currency"/>
                        </InputGroup>
                        
                    <div align="center">Vers</div> 
                    <div className={classNames(CryptoConverterStyle.marginStyle)}>Ethereum, ETH</div>
                    <InputGroup className={classNames("mb-3")}>
                        <DropdownButton variant="outline-secondary" title="Dropdown" id="input-group-dropdown-1">
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-label="Text input with dropdown button" />
                        </InputGroup>                    

                        </ListGroup.Item>
                    </ListGroup>

            </Card>
        )
}
