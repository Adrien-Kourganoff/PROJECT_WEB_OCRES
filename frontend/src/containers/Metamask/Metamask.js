import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetamDatas from '../../components/DashboardComponents/MetamDatas/MetamDatas';
export default function Metamask() {

    const [data, setData] = useState([]);
    const [dataGas, setDataGas]=useState([]);
    const[dataTime, setDataTime]=useState([]);
    const[address, setAddress]=useState([]);



  const fetchData = () => {

    //let ETHBalance = `https://api.etherscan.io/api?module=account&action=balance&address=0x6bC26E853086CF244849D3780eC5C4BF80106410&tag=latest&apikey=35BFWIG7F816FH2RSHCA9YC4UNHM1EXRF4`;   
    //console.log(address);
    //console.log(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=35BFWIG7F816FH2RSHCA9YC4UNHM1EXRF4`);
    // let ETHBalance = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=35BFWIG7F816FH2RSHCA9YC4UNHM1EXRF4`;
    //var ETHBalance = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=35BFWIG7F816FH2RSHCA9YC4UNHM1EXRF4`;

    let stringBalance = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=35BFWIG7F816FH2RSHCA9YC4UNHM1EXRF4`;
    let ETHBalance = stringBalance;
    
    const ETHGas = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=J4YRQYN2TA4RFTSFU9KC2B8YA3ZW9BW888';
    const ETHDataTime =  `https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=HBE5A1TV3KITG8W1FNZSSHFVI8DE3FM8XQ`;
    
    const getETHBalance = axios.get(ETHBalance);
    const getETHGas = axios.get(ETHGas);
    const getETHDataTime = axios.get(ETHDataTime);

    axios.all([getETHBalance,getETHGas,getETHDataTime]).then(
        axios.spread((...allData) => {

            const allDataETHBalance = allData[0];
            const allDataETHGas = allData[1];
            const allDataETHDataTime = allData[2];

           // console.log(allDataETHBalance);
            setData(allDataETHBalance.data);
           
           // console.log(allDataETHGas);
            setDataGas(allDataETHGas.data);
           
           // console.log(allDataETHDataTime);
            setDataTime(allDataETHDataTime.data);
        })
    )
  }

  useEffect(() => { 

        fetchData();

    },[])

    if (data.length===0 || dataGas.length===0 || dataTime.length===0)  //Si tableaux vide cad api pas encore fetch

        return <div>Loading...</div>;

    return (

        <div>

            <MetamDatas dataBalance={data} dataGas={dataGas}  dataTime={dataTime} setAddress={setAddress} fetch={fetchData}/>

        </div>

    )

}