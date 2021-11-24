import React from 'react'
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';

import EthDatas from '../../containers/EthDatas/EthDatas';
import  {Container} from 'react-bootstrap';
  

function App() {
  return (
    <div>
      <Header/>
      <Container fluid className="App">
        <EthDatas/>
      </Container>
    </div>
  );
}

export default App;
