import React, { Component } from 'react';
import './generationPokemonStat.css';
import typeColors from './typeColors'
import './cardComponent.css';
import Axios from "axios";

class CardPokemon extends Component {
  render() {
    console.log(this.props.pokemonType);
    return (
      <div className="Card">
        <div className="Card__img">
          <img src={this.props.pokemonImg} alt="" />
        </div>
        <div className="Card__name">
          {this.props.pokemonName}
        </div>
        <div className="Card__types" style={{ backgroundColor: typeColors[this.props.pokemonType] }}>
          {this.props.pokemonType}
        </div>
        <div className="Card__info">
          <div className="Card__data Card__data--weight">
            <p className="title">Weight</p>
            <p>{this.props.pokemonWeight}</p>
          </div>
          <div className="Card__data Card__data--weight">
            <p className="title">Height</p>
            <p>{this.props.pokemonHeight}</p>
          </div>
          <div className="Card__data Card__data--ability">
            <p className="title">Ability</p>
            <p>{this.props.pokemonAbilities}</p>
          </div>
        </div>
      </div>
    );
  }
}

class GenerationPokemonStat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNameListAPI: [],
      pokemonNameAPI: [],
      pokemonImgAPI: [],
      pokemonWeightAPI: [],
      pokemonHeightAPI: [],
      pokemonAbilitiesAPI: [],
      pokemonTypeAPI: [],
      pokemonLoading: true
    };
  }

  searchAllPokemon = () => {
    this.setState({ pokemonLoading: true });
    let number = 151;
    Axios.get(`http://localhost:5000/getPokemonByGeneration/allPokemonGen/${number}`)
      .then(res => {
        this.setState({ pokemonLoading: true });
        var i, j;
        for (i = 0; i < number; i++) {
          let copyNameArray = this.state.pokemonNameListAPI.slice();
          copyNameArray[i] = res.data.results[i].name;
          this.setState({ pokemonNameListAPI: copyNameArray })
        }
        for (j = 0; j < 151; j++) {
          Axios.get(`http://localhost:5000/getPokemonByGeneration/one_pokemon_gen/${this.state.pokemonNameListAPI[j]}`)
            .then(response => {
              let copyNameArray = this.state.pokemonNameAPI.slice();
              copyNameArray[j] = response.data.species.name;
              this.setState({ pokemonNameAPI: copyNameArray });

              let copyImgArray = this.state.pokemonImgAPI.slice();
              copyImgArray[j] = response.data.sprites.front_default;
              this.setState({ pokemonImgAPI: copyImgArray });

              let copyWeightArray = this.state.pokemonWeightAPI.slice();
              copyWeightArray[j] = response.data.weight;
              this.setState({ pokemonWeightAPI: copyWeightArray });

              let copyHeightArray = this.state.pokemonHeightAPI.slice();
              copyHeightArray[j] = response.data.height;
              this.setState({ pokemonHeightAPI: copyHeightArray });

              let copyAbilitiesArray = this.state.pokemonAbilitiesAPI.slice();
              copyAbilitiesArray[j] = response.data.abilities[0].ability.name;
              this.setState({ pokemonAbilitiesAPI: copyAbilitiesArray });

              let copyTypeArray = this.state.pokemonTypeAPI.slice();
              copyTypeArray[j] = response.data.types[0].type.name;
              this.setState({ pokemonTypeAPI: copyTypeArray });

              console.log(response);
            })
        }
        this.setState({ pokemonLoading: false });
      })
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.searchAllPokemon}>Search Pokemon</button>
          {this.state.pokemonLoading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
            <>
              <div className="grid-container">
                {this.state.pokemonNameListAPI.map((i) => {
                  return <CardPokemon
                    key={i}
                    pokemonName={this.state.pokemonNameAPI[i]}
                    pokemonImg={this.state.pokemonImgAPI[i]}
                    pokemonWeight={this.state.pokemonWeightAPI[i]}
                    pokemonHeight={this.state.pokemonHeightAPI[i]}
                    pokemonAbilities={this.state.pokemonAbilitiesAPI[i]}
                    pokemonType={this.state.pokemonTypeAPI[i]}
                  />
                })}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default GenerationPokemonStat;