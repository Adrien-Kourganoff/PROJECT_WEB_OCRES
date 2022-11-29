import React from "react";


import "./note.css";

class Note extends React.Component {
  render() {
    return (
      <div>

        <div className="Bienvenue">Votre Dashboard, Charlie</div>


        <div className="titre_notes">Notes</div>



        <div className="rectangle" />

        <div className="Ajouter"> <input className="Ajouter" type="submit" value="Ajouter une note" /></div>

      </div>
    );
  }
}



export default Note;
