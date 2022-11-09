import React from 'react';

import './welcome.css';



export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>


                {/* formulaire nom d'artiste  */}

                <div className="formulaire">
                    <label >
                        Nom d'artiste :
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    {/* formulaire mot de passe   */}

                    <label>
                        <p> Mot de passe :
                            <input type="text" value={this.state.value} onChange={this.handleChange} /> </p>
                    </label>
                </div>

                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}