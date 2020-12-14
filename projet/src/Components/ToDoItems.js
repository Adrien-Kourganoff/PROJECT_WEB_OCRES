import React from 'react';
import './ToDoItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ToDoList from './ToDoList'
import axios from 'axios';

const Goal = props => (
    <div className="list">
                <p className="todo-item">{props.goal.objectif}
                <span>
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.onSubmit(props.goal._id);
        }} icon="trash" />
        </span>
                </p>
            </div>
  )
  class ToDoItems extends React.Component {
    constructor(props){
        super(props);
        this.Laliste=this.Laliste.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
          objectif:'',
          listeObjectif:[],
        }
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/goal/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                listeObjectif:response.data
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }


       onSubmit(id){
        axios.delete(`http://localhost:5000/goal/`+id)
            .then(res =>console.log(res.data)); 
            {
              this.setState({
                listeObjectif: this.state.listeObjectif.filter(el=>el._id !=id)
              })
            }
      }
      Laliste(){
        return this.state.listeObjectif.map(currentgoal => {
          return <Goal goal={currentgoal} onSubmit={this.onSubmit} key={currentgoal._id}/>
        })
      }

      render() {
       return(
          <div>{this.Laliste()}</div>
          );
       }
    }
      export default ToDoItems;