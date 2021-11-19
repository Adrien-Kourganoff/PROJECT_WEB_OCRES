import React from 'react';
import '../css/dashBoard.css';

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white',
            isCardFliped: false

        }

    }

    flipCard() {
        this.setState((prevState) => ({ isCardFliped: !prevState.isCardFliped }))
    }

    render() {
        return (

            <div class={`user ${this.state.isCardFliped ? 'flip' : ''}`} onClick={() => this.flipCard()}>
                <div class='meswid widavant'>
                    <p>Voila ici la face avant du widget avec les informations recus par l'api</p>
                </div>
                <div class='meswid widarriere'>
                    <p>Voici la face arrière avec le texte explicatif de ce qui est montré</p>
                </div>
            </div>

        )
    }
}





