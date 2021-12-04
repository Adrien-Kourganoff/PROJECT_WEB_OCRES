import React from 'react';
import InformationsEdit from '../../containers/Informations/InformationsEdit';
import  '../../globalCss/Card.css';
import  './AdminControl.css';


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

        
        

            <InformationsEdit/>
             
             
             

     </div>
</div>
        )
}
