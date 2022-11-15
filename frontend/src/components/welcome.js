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
                        <input type="text" value={this.state.value} onChange={this.handleChange} size="15"
                            placeholder="Nom d'artiste" />
                    </label>

                    {/* formulaire mot de passe   */}

                    <label>
                        <p>
                            <input type="text" value={this.state.value} onChange={this.handleChange} size="15"
                                placeholder="Mot de passe" /> </p>
                    </label>
                </div>

                <br /> <input type="submit" value="Se connecter" />

            </form>
        );
    }
}