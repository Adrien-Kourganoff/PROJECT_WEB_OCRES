import React from 'react';
import EthDatas from '../../containers/EthDatas/EthDatas';
import EthChart from '../../containers/EthChart/EthChart';
import EthNews from '../../containers/EthNews/EthNews'
import  '../../GlobalCss/Card.css';
import  './Dashboard.css';

import EthConverter from '../../containers/EthConverter/EthConverter';
import Masonry from 'react-masonry-css'
import Metamask from '../../containers/Metamask/Metamask';
import Informations from "../../containers/Informations/Informations"

export default function Widgets() {
   
   
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  
   
   
          return(
        <div className="">
            <div className="container">

        
                      <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}



                <EthDatas />
                    
                <EthChart  />
                          
                <EthNews/>
                
                <EthConverter/>

                <Metamask/>
        
                <Informations/>
           
                </Masonry>

     </div>
</div>
        )
}
