import React, {useRef} from 'react';
import EthDatas from '../../containers/EthDatas/EthDatas';
import EthChart from '../../containers/EthChart/EthChart';
import EthNews from '../../containers/EthNews/EthNews'
import  '../../globalCss/Card.css';
import  './Widgets.css';

import EthConverter from '../../containers/EthConverter/EthConverter';
import Masonry from 'react-masonry-css'
import Metamask from '../../containers/Metamask/Metamask';
import Appointment from '../../containers/Appointment/Appointment';


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
        
                <Appointment/>
           
                </Masonry>

     </div>
</div>
        )
}
