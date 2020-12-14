import React from "react";
import {Component} from 'react';
import './ToDoList.css';
import ToDoItems from './ToDoItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'react-bootstrap';
import axios from 'axios';

library.add(faTrash);

class ToDoList extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
                objectif:'',
        }
        this.onChangeObjectif = this.onChangeObjectif.bind(this); // POUR QUE LES FONCTIONS PUISSENT AUSSI PROFITER DU "this"
        this.addItem = this.addItem.bind(this);
    }

  onChangeObjectif(e) {
      this.setState({          //Pour changer le state de notre input
        objectif:e.target.value,
      })
  }

  addItem(e){
      e.preventDefault(); //Pour éviter de rafraîchir toute la page quand on clique sur le bouton
      const newItem ={
        objectif: this.state.objectif,
      }
      console.log(newItem);
      axios.post('http://localhost:5000/goal/add',newItem)
      .then(res =>console.log(res.data));
      window.location="./Accueil";
    }

      
render() {
    return (

      <Card>
      <Card.Body>
        <div className="todoListMain">
        <div className="headerT">
          <header>
              <form id="todo-form"  onSubmit={this.addItem}>
            <input type="text" placeholder="Goal" className="todo-input" value ={this.state.objectif} onChange={this.onChangeObjectif}/>
            <button className="todo-button"type="submit"> Add </button>
          </form>
          
          <ToDoItems />
          </header>
        </div>
      </div>
      </Card.Body>
  </Card>
    );
  }
}


export default ToDoList;