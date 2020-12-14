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
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Ajout et suppression de musiques</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
             
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