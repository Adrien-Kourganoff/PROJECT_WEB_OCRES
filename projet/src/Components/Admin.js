import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import Widget from './Widget';
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import './Widget.css';
import Button from './Button';
import './button.css';

const Admin = () => {
    return (
        <main>
            <Container>
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Ajout et suppression de musiques</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
             
            <div class="form-group">
    <label for="exampleFormControlTextarea1">Ajout et suppression de "Motivation Quote" BIENSUUUUR</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Ajout et suppression d'astuces</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
        </Container>
        </main>
    )
}

export default Admin;
