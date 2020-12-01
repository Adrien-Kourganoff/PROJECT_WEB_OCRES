import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './widgets/navigation/sidebar';
import Tableauevent from './widgets/info/tableau';
import Carte from './widgets/info/info2';
import Diagramme from './widgets/info/diagramme';


function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm8 ms-xl2">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm11 ms-xl8">
          <div className="ms-Grid-row">
            <Carte />
          </div>
          <div className="ms-Grid-row">
            <Tableauevent />
          </div>
          <div className="ms-Grid-row">
            <Diagramme />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;