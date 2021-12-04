import React, {useState,useEffect} from 'react';
import  {Card ,ListGroup,Dropdown,InputGroup,DropdownButton,FormControl} from 'react-bootstrap';
import CryptoConverterStyle from './CryptoConverter.module.css';
import classNames from 'classnames';

export default function CryptoConverter(props) {


    const [index,setIndex]=useState(0);

  
    var CurrencyRefName=props.data[1].name;
    var CurrencyRefSymbol=props.data[1].symbol;
    var CurrencyRefImage=props.data[1].image;
    var CurrencyRefPrice=props.data[1].current_price;

  useEffect(() => {

    calculInit();
            
  });



    const handleSelect=(e)=>{
        setIndex(e);
        console.log(e);
        document.getElementById("titleSelector").src=props.data[e].image;
      }

      function calculInit()
      {
        document.getElementById('montantaAConvertir').value=1;

        //Convertir devise ref en dollar
        var refCurrencyToDollar = 1*CurrencyRefPrice;

        //Convertir dollar en devise souhaitée
        var DollarToRefCurrency = refCurrencyToDollar/props.data[index].current_price;
        DollarToRefCurrency.toFixed(3);
        document.getElementById('montantConverti').value=DollarToRefCurrency.toFixed(3);
      }

    function calcul()
    {
            var montantAconvertir,
            element = document.getElementById('montantaAConvertir');

            if (element != null) {               
                montantAconvertir = element.value; 

               //Convertir devise ref en dollar
               var refCurrencyToDollar = montantAconvertir*CurrencyRefPrice;
              // console.log(refCurrencyToDollar);
           
               //Convertir dollar en devise souhaitée
               var DollarToRefCurrency = refCurrencyToDollar/props.data[index].current_price;
               DollarToRefCurrency.toFixed(3);

                console.log(DollarToRefCurrency.toFixed(3));

                document.getElementById('montantConverti').value=DollarToRefCurrency.toFixed(3);
            }
            else {
                montantAconvertir = null;
            }
    }
    return( 
            <Card className ="h100" >
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        
       <div>{CurrencyRefName}, {CurrencyRefSymbol.toUpperCase()}</div>             
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><img src={CurrencyRefImage} alt={CurrencyRefSymbol} className={classNames(CryptoConverterStyle.logoSize)}/></InputGroup.Text>
                        
                        <FormControl id="montantaAConvertir" type="number" aria-label="currency" aria-describedby="currency"/>
                       
                        </InputGroup>
                        
                    <div align="center">Vers</div> 
                   
                    <div className={classNames(CryptoConverterStyle.marginStyle)}>{props.data[index].name}, {props.data[index].symbol.toUpperCase()}</div>
                   
                    <InputGroup className="mb-3">
                  
                    <DropdownButton onSelect={handleSelect}
 aria-labelledby="drop4" id="input-group-dropdown-1 currencySelector" className="custom-colorBtn" title={<img id={"titleSelector"} src={props.data[0].image} alt={props.data[0].symbol} className={classNames(CryptoConverterStyle.logoSize)}/>}
                    >
                         {Array.from({length: props.data.length}).map((crypto,index) => (
                           
                           <Dropdown.Item key={index} className={classNames("drop" + index)} eventKey={index} ><img id={"indexIMG" + index} src={props.data[index].image} alt={props.data[1].symbol} className={classNames(CryptoConverterStyle.logoSize)}/>&nbsp;{props.data[index].name}</Dropdown.Item>
                         ))}
                    </DropdownButton>
                    <FormControl value={"0.000"} id="montantConverti" disabled aria-label="Text input with dropdown button" />
        
 
        <div className="container" style={{marginTop: "13px"}}>

        <div className="col-md-12 text-center">
            <button className={classNames("btn",CryptoConverterStyle.btnStyle)} type="button"  onClick={calcul} >Convertir</button>
        </div>

    </div>

                </InputGroup>
                    
                    
                    
                    
                    
                    
                                    

                        </ListGroup.Item>
                    </ListGroup>

            </Card>
        )

}
