import React from "react";
import {Component} from 'react';
import './ToDoList.css';
import ToDoItems from './ToDoItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class ToDoList extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            items : [],
            currentItem:{
                text:'',
                key:''
            }

        }
        this.handleIput = this.handleIput.bind(this); // POUR QUE LES FONCTIONS PUISSENT AUSSI PROFITER DU "this"
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
  handleIput(e) {
      this.setState({          //Pour changer le state de notre input
          currentItem:{        //Création d'ub objet currentItem
              text:e.target.value,
              key:Date.now()  //POUR GARDER L'UNICITE DE LA CLE 
          }
      })
  }

  addItem(e){
      e.preventDefault(); //Pour éviter de rafraîchir toute la page quand on clique sur le bouton
      const newItem = this.state.currentItem;

      if(newItem.text!==" ")
      {const newItems = [...this.state.items,newItem];  //Convertit la liste des items et les sépare en items individuels (destructuring) + ajout de l'input à la liste
      this.setState // Pour update le tableau de nouveaux éléments
          ({
              items:newItems,
              currentItem:{ //pour initialiser l'item actuel avec une chaîne de caractère vide
                  text:'',
                  key:''

              }
          })
      }
    }

    deleteItem(key){
        const filterItems= this.state.items.filter(item => //retourne un nouveau tableau contenant tous les éléments du tableau d'origine correspondant à item
          item.key!==key);
        this.setState({
          items: filterItems
        })
    
      }
      
render() {
    return (
        <div className="todoListMain">
        <div className="headerT">
          <header>
              <form id="todo-form"  onSubmit={this.addItem}>
            <input type="text" placeholder="Goal" className="todo-input" value ={this.state.currentItem.text} onChange={this.handleIput}/>
            <button className="todo-button"type="submit"> Add </button>
          </form>
          
          <ToDoItems items={this.state.items} deleteItem={this.deleteItem} >
          </ToDoItems>
          </header>
        </div>
      </div>
    );
  }
}


export default ToDoList;