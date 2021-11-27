import React, {useRef} from 'react';
import EthDatas from '../EthDatas/EthDatas';
import EthChart from '../EthChart/EthChart';
import EthNews from '../EthNews/EthNews'
import  '../../GlobalCss/Card.css';
import  './Widgets.css';
import Snuggle from 'react-snuggle';

import CryptoConverter from '../../components/CryptoConverter/CryptoConverter';
import Masonry from 'react-masonry-css'


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
                          
                              <EthNews  />
                                <CryptoConverter   />


              </Masonry>

     </div>
</div>
        )
}
