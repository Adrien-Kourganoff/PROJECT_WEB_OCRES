import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import AdminAstuce from './AdminAstuce';
import AjoutMotivation from './AjoutMotivation';
import SupprimerAstuces from './SupprimerAstuces';
import axios from 'axios';
import './SupprimerAstuces.css';
import SupprimerMotivation from './SupprimerMotivation';

const Admin = () => {
    return (
        <main>
            <Container>
             
  <AjoutMotivation/>
  <SupprimerMotivation/>
  <AdminAstuce/>
  <div className="Centrer">
  <SupprimerAstuces/>
  </div>
        </Container>
        </main>
    )
}

export default Admin;