import React from 'react';
import '../css/dashBoard.css';
import Widgets from "./widgets";

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white',
            isCardFliped1: false,
            isCardFliped2: false,
            isCardFliped3: false
        }

    }

    flipCard1() {
        this.setState((prevState) => ({ isCardFliped1: !prevState.isCardFliped1 }))
    }

    flipCard2() {
        this.setState((prevState) => ({ isCardFliped2: !prevState.isCardFliped2 }))
    }
    flipCard3() {
        this.setState((prevState) => ({ isCardFliped3: !prevState.isCardFliped3 }))
    }

    render() {
        return (
            <div className='widgetsContainer'>
                <div className={`user1 ${this.state.isCardFliped1 ? 'flip' : ''}`} onClick={() => this.flipCard1()}>
                    <Widgets width={"10em"} height={"100px"} title={"CRYPTO"} backText={"Voici la face arrière avec le texte explicatif de ce qui est montré"}/>
                </div>
                <div className={`user2 ${this.state.isCardFliped2 ? 'flip' : ''}`} onClick={() => this.flipCard2()}>
                    <Widgets width={"200px"} height={"200px"} title={"AUTRE"} backText={"Voici la face arrière avec le texte explicatif de ce qui est montré"}/>
                </div>
                <div className={`user3 ${this.state.isCardFliped3 ? 'flip' : ''}`} onClick={() => this.flipCard3()}>
                    <Widgets width={"200px"} height={"200px"} title={"essaie"} backText={"Voici la face arrière avec le texte explicatif de ce qui est montré"}/>
                </div>
            </div>


        )
    }
}





