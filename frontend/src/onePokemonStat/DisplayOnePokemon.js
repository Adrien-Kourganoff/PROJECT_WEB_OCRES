import "./DisplayOnePokemon.css";
import React, { Component } from "react";
import Axios from "axios";

class DisplayOnePokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonChosen: false,
            pokemonName: "",
            pokemonNameAPI: "",
            pokemonImgAPI: "",
            pokemonHpAPI: "",
            pokemonAttackAPI: "",
            pokemonDefenseAPI: "",
            pokemonTypeAPI: "",
            pokemonType2API: ""
        };
    }

    handlePokemonNameChange = (e) => {
        this.setState({ pokemonName: e.target.value });
    }
    searchPokemon = () => {
        Axios.get(`http://localhost:5000/getPokemon/pokemonStat/${this.state.pokemonName}`)
            .then(res => {
                this.setState({ pokemonNameAPI: res.data.species.name });
                this.setState({ pokemonImgAPI: res.data.sprites.front_default });
                this.setState({ pokemonHpAPI: res.data.stats[0].base_stat });
                this.setState({ pokemonAttackAPI: res.data.stats[1].base_stat });
                this.setState({ pokemonDefenseAPI: res.data.stats[2].base_stat });
                this.setState({ pokemonTypeAPI: res.data.types[0].type.name });
                this.setState({ pokemonChosen: true });
                console.log(res);
            })
    }

    render() {
        return (
            <div className="DisplayOnePokemon">
                <div className="TitleSection">
                    <h1>Pokemon Stats</h1>
                    <input type="text" onChange={this.handlePokemonNameChange} value={this.state.pokemonName} />
                    <button onClick={this.searchPokemon}>Search Pokemon</button>
                </div>
                <div className="DisplaySection">
                    {!(this.state.pokemonChosen) ? (
                        <h1>Please choose a Pokemon</h1>
                    ) : (
                        <>
                            <h1>{this.state.pokemonNameAPI}</h1>
                            <img src={this.state.pokemonImgAPI} />
                            <h3>Type: {this.state.pokemonTypeAPI}</h3>
                            <h4>Hp: {this.state.pokemonHpAPI}</h4>
                            <h4>Attack: {this.state.pokemonAttackAPI}</h4>
                            <h4>Defense: {this.state.pokemonDefenseAPI}</h4>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default DisplayOnePokemon;