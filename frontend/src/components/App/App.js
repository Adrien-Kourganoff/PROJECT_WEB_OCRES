import React from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {Container} from 'react-bootstrap';

import Header from '../Header/Header';
//import EthDatas from '../../containers/EthDatas/EthDatas';
import Widgets from '../../containers/Widgets/Widgets';
  

function App() {
  return (
    <div>
      <Header/>
      <Container fluid className="App">
        <Widgets/>
      </Container>
    </div>
  );
}

export default App;
