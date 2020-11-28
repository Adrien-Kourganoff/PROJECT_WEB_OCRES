import React from 'react';
import { DetailsList,DetailsRow} from '@fluentui/react';
//import 'office-ui-fabric-react/dist/css/fabric.css';



const operations = [
  {
    event: 'Séminaire',
    date: '20-05-2020',
    boite: 'Peugeot',
    nb: '78',
    bateau: 'blue',
  },
  {
    event: 'Pot de départ',
    date: '03-11-2020',
    boite: 'Apple',
    nb: '30',
    bateau: 'blue',
  },
  {
    event: 'AfterWork',
    date: '18-03-2021',
    boite: 'ECE',
    nb: '150',
    bateau: 'yellow',
  },
  {
    event: 'Anniversaire',
    date: '28-02-2021',
    boite: 'Particulier',
    nb: '35',
    bateau: 'yellow',
  },
  {
    event: 'Balade découverte',
    date: '23/24-11-2020',
    boite: 'La ville de Paris',
    nb: '10-60',
    bateau: 'blue',
  }
]

const columns = [
  { key: 'column1', name: 'Event', fieldName: 'event', minWidth: 100, maxWidth: 220, isResizable: true },
  { key: 'column2', name: 'Date', fieldName: 'date', minWidth: 100, maxWidth: 150, isResizable: true },
  { key: 'column3', name: 'Boite', fieldName: 'boite', minWidth: 100, maxWidth: 220, isResizable: true },
  { key: 'column4', name: 'Nb Personnes', fieldName: 'nb', minWidth: 100, maxWidth: 150, isResizable: true },
]

export default class Tableauevent extends React.Component{
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  /*constructor() {
    super();
      
      this._onRenderRow = this._onRenderRow.bind(this);
    }*/


  render() {

    return (
      <div data-is-scrollable={true}>
        <div>
        
          <DetailsList
            items={operations}
            columns={columns}
            selectionMode={0}
            onRenderRow={ (props, defaultRender) => (
            <div className={props.item.bateau} >
              {defaultRender({...props, className: props.item.bateau})}            
            </div>
            ) }
            
          />
          
        </div>
      </div>
      );
  } ;

  /*</div>_onRenderRow(props) {
    let colorStyle = {
      backgroundColor: props.item.bateau
    };
     
    return <div style={colorStyle}><DetailsRow { ...props } /></div>;
  }*/

}