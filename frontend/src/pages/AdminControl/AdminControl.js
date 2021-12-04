import React from 'react';
import  '../../globalCss/Card.css';
import  './AdminControl.css';

import Masonry from 'react-masonry-css'


export default function AdminControl() {
   
   
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



             
             
             
                </Masonry>

     </div>
</div>
        )
}
