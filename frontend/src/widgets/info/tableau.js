import React from 'react';
import { DetailsList } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';


const operations = [
  {
    event: 'Séminaire',
    date: '20-05-2020',
    boite: 'Peugeot',
    nb: '78',
  },
  {
    event: 'Pot de départ',
    date: '03-11-2020',
    boite: 'Apple',
    nb: '30',
  },
  {
    event: 'AfterWork',
    date: '18-03-2021',
    boite: 'ECE',
    nb: '150',
  },
  {
    event: 'Anniversaire',
    date: '28-02-2021',
    boite: 'Particulier',
    nb: '35',
  },
  {
    event: 'Balade découverte',
    date: '23/24-11-2020',
    boite: 'La ville de Paris',
    nb: '10-60',
  }
]

const columns = [
  { key: 'column1', name: 'Event', fieldName: 'event', minWidth: 100, maxWidth: 220, isResizable: true },
  { key: 'column2', name: 'Date', fieldName: 'date', minWidth: 100, maxWidth: 150, isResizable: true },
  { key: 'column3', name: 'Boite', fieldName: 'boite', minWidth: 100, maxWidth: 220, isResizable: true },
  { key: 'column4', name: 'Nb Personnes', fieldName: 'nb', minWidth: 100, maxWidth: 150, isResizable: true },
]

const Tableauevent = () => {
  return (
    <div data-is-scrollable={true}>
      <div>
        <DetailsList
          items={operations}
          columns={columns}
          selectionMode={0}
        />
      </div>
    </div>
  );
};

export default Tableauevent;