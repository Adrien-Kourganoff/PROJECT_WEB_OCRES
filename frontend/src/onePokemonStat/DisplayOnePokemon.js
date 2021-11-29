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
            pokemonColorAPI: "",
            pokemonIdAPI: "",
            pokemonLoading: true
        };
    }

    handlePokemonNameChange = (e) => {
        this.setState({ pokemonName: e.target.value });
    }

    searchPokemon = () => {
        console.log("1");
        this.setState({ pokemonLoading: true });
        Axios.get(`http://localhost:5000/getPokemon/pokemonStat/${this.state.pokemonName}`)
            .then(res => {
                if (res.status === 200 && res != null) {
                    //this.setState({ pokemonNameAPI: res.data.species.name });
                    this.setState({ pokemonImgAPI: res.data.sprites.front_default });
                    this.setState({ pokemonHpAPI: res.data.stats[0].base_stat });
                    this.setState({ pokemonAttackAPI: res.data.stats[1].base_stat });
                    this.setState({ pokemonDefenseAPI: res.data.stats[2].base_stat });
                    this.setState({ pokemonTypeAPI: res.data.types[0].type.name });
                    this.setState({ pokemonIdAPI: res.data.id });
                    this.setState({ pokemonChosen: true });
                    console.log(res);

                    Axios.get(`http://localhost:5000/getPokemon/pokemonNameFr/${this.state.pokemonIdAPI}`)
                        .then(response => {
                            if (response.status === 200 && response != null) {
                                this.setState({ pokemonNameAPI: response.data.names[4].name });
                                this.setState({ pokemonColorAPI: response.data.color.name });
                            } else {
                                console.log('problem in second call');
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                    this.setState({ pokemonLoading: false });
                } else {
                    console.log('problem in first call');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let color = "";
        if (this.state.pokemonColorAPI === "black") {
            color = "#1D2525";
        }
        if (this.state.pokemonColorAPI === "blue") {
            color = "#2350B8";
        }
        if (this.state.pokemonColorAPI === "brown") {
            color = "#904F17";
        }
        if (this.state.pokemonColorAPI === "gray") {
            color = "#999999";
        }
        if (this.state.pokemonColorAPI === "green") {
            color = "#438A3B";
        }
        if (this.state.pokemonColorAPI === "pink") {
            color = "#FFB7CE";
        }
        if (this.state.pokemonColorAPI === "purple") {
            color = "#8D5E9B"
        }
        if (this.state.pokemonColorAPI === "red") {
            color = "#BB4B49";
        }
        if (this.state.pokemonColorAPI === "white") {
            color = "#F0EEFF";
        }
        if (this.state.pokemonColorAPI === "yellow") {
            color = "#FFF380";
        }
        return (
            <div className="DisplayOnePokemon">
                <div className="TitleSection">
                    <h1>Pokemon Stats</h1>
                    <input type="text" onChange={this.handlePokemonNameChange} value={this.state.pokemonName} />
                    <button onClick={this.searchPokemon}>Search Pokemon</button>
                </div>
                <div className="DisplaySection">
                    {((!this.state.pokemonChosen) && (this.state.pokemonLoading == false)) ? (
                        <h1>Please choose a Pokemon</h1>
                    ) : (
                        <>
                            <h1>{this.state.pokemonNameAPI}</h1>
                            <img src={this.state.pokemonImgAPI} style={{ backgroundColor: color }} />
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