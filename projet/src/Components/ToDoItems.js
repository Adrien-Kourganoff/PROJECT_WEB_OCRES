import React from 'react';
import './ToDoItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ToDoList from './ToDoList'

function ToDoItems(props)
{
    const items = props.items;
    const listItems = items.map(item=>         //boucle qui parcourt chaque élément et le store dans la variable ListItem
        {
            return (
            
            <div className="list" key={item.key}>
                <p className="todo-item">{item.text}
                <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key);
        }} icon="trash" />
        </span>
                </p>
     
            </div>

                )
        })
    return(
        <div>
          {listItems}
        </div>
    );
}

export default ToDoItems;