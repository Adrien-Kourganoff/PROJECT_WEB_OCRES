import React, { useEffect, useState } from 'react';
import"./App2.css"
import Axios from 'axios'

function App2(){
  const[title,setTitle]  = useState('');
  const[description,setDescription]  = useState('');
  const[offers, setOffersList]= useState([]);
 


    useEffect(()=>{
   Axios.get("http://localhost:3005/posts").then((response)=>{
    setOffersList(response.data);
   });
    },[]);


    const addToList=()=>{
   Axios.post("http://localhost:3005/posts",{
    title:title,
    description: description,
    })
  };



return(
<div className="App2">
   
    <h1>Ajouter une annonce</h1><br/>

    <label>Nom:</label>
    <input type="text" onChange={(event)=>{setTitle(event.target.value)}}></input>

    <label>Description:</label>
    <input type="text" onChange={(event)=>{setDescription(event.target.value)}}></input><br/>
    <button onClick={addToList}>Add To list</button>


    <h1>NOUVELLES ANNONCES</h1>
{ offers.map((val,key)=> {
    return(
    <div key={key} className="offers">
    <h3>{val.title}</h3> 
    <p>{val.description}</p> {" "}
    <input type="text" placeholder="Change title...." />
    <button >Update</button>
    <button >Delete</button>
   
    </div>
    );
    })

}

</div>
);

}

export default App2;