import React, { Component } from 'react';
import './generationPokemonStat.css';
import typeColors from './typeColors'
import './cardComponent.css';
import Axios from "axios";

class CardPokemon extends Component {
  render() {
    return (
      <div className="Card">
        <div className="Card__img">
          <img src={this.props.pokemonImgProp[this.props.id]} alt="" />
        </div>
        <div className="Card__name">
          {this.props.pokemonNameProp[this.props.id]}
        </div>
        <div className="Card__types" style={{ backgroundColor: typeColors[this.props.pokemonTypeProp[this.props.id]] }}>
          {this.props.pokemonTypeProp[this.props.id]}
        </div>
        <div className="Card__info">
          <div className="Card__data Card__data--weight">
            <p className="title">Weight</p>
            <p>{this.props.pokemonWeightProp[this.props.id]}</p>
          </div>
          <div className="Card__data Card__data--weight">
            <p className="title">Height</p>
            <p>{this.props.pokemonHeightProp[this.props.id]}</p>
          </div>
          <div className="Card__data Card__data--ability">
            <p className="title">Ability</p>
            <p>{this.props.pokemonAbilitiesProp[this.props.id]}</p>
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
        var i;
        for (i = 0; i < number; i++) {
          let copyNameArray = this.state.pokemonNameListAPI.slice();
          copyNameArray[i] = res.data.results[i].name;
          this.setState({ pokemonNameListAPI: copyNameArray })
          Axios.get(`http://localhost:5000/getPokemonByGeneration/one_pokemon_gen/${this.state.pokemonNameListAPI[i]}`)
            .then(response => {
              let copyNameArray = this.state.pokemonNameAPI.slice();
              copyNameArray[i] = response.data.species.name;
              this.setState({ pokemonNameAPI: copyNameArray });

              let copyImgArray = this.state.pokemonImgAPI.slice();
              copyImgArray[i] = response.data.sprites.front_default;
              this.setState({ pokemonImgAPI: copyImgArray });

              let copyWeightArray = this.state.pokemonWeightAPI.slice();
              copyWeightArray[i] = response.data.weight;
              this.setState({ pokemonWeightAPI: copyWeightArray });

              let copyHeightArray = this.state.pokemonHeightAPI.slice();
              copyHeightArray[i] = response.data.height;
              this.setState({ pokemonHeightAPI: copyHeightArray });

              let copyAbilitiesArray = this.state.pokemonAbilitiesAPI.slice();
              copyAbilitiesArray[i] = response.data.abilities[0].ability.name;
              this.setState({ pokemonAbilitiesAPI: copyAbilitiesArray });

              let copyTypeArray = this.state.pokemonTypeAPI.slice();
              copyTypeArray[i] = response.data.types[0].type.name;
              this.setState({ pokemonTypeAPI: copyTypeArray });

              console.log(response);
              console.log(this.state.pokemonNameAPI[i]);
              console.log(this.state.pokemonImgAPI[i]);
              console.log(this.state.pokemonWeightAPI[i]);
              console.log(this.state.pokemonHeightAPI[i]);
              console.log(this.state.pokemonAbilitiesAPI[i]);
              console.log(this.state.pokemonTypeAPI[i])
            })
        }
        this.setState({ pokemonLoading: false });
      })
  }

  render() {
    let pokemonNameListAPI = this.state.pokemonNameListAPI;
    let pokemonNameAPI = this.state.pokemonNameAPI;
    let pokemonImgAPI = this.state.pokemonImgAPI;
    let pokemonWeightAPI = this.state.pokemonWeightAPI;
    let pokemonHeightAPI = this.state.pokemonHeightAPI;
    let pokemonAbilitiesAPI = this.state.pokemonAbilitiesAPI;
    let pokemonTypeAPI = this.state.pokemonTypeAPI;
    let pokemonLoading = this.state.pokemonLoading;

    console.log(this.state.pokemonNameAPI[0]);
    console.log(this.state.pokemonImgAPI[0]);
    console.log(this.state.pokemonWeightAPI[0]);
    console.log(this.state.pokemonHeightAPI[0]);
    console.log(this.state.pokemonAbilitiesAPI[0]);
    console.log(this.state.pokemonTypeAPI[0])

    return (
      <>
        <div>
          <button onClick={this.searchAllPokemon}>Search Pokemon</button>
          {pokemonLoading && pokemonNameListAPI[151] === undefined ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
            <>
              <div className="grid-container">
                {pokemonNameListAPI.map((i) => {
                  /*   console.log(pokemonNameAPI[i]);
                     console.log(pokemonImgAPI[i]);
                     console.log(pokemonWeightAPI[i]);
                     console.log(pokemonHeightAPI[i]);
                     console.log(pokemonAbilitiesAPI[i]);
                     console.log(pokemonTypeAPI[i])*/
                  return <CardPokemon
                    key={i}
                    id={i}
                    pokemonNameProp={pokemonNameAPI}
                    pokemonImgProp={pokemonImgAPI}
                    pokemonWeightProp={pokemonWeightAPI}
                    pokemonHeightProp={pokemonHeightAPI}
                    pokemonAbilitiesProp={pokemonAbilitiesAPI}
                    pokemonTypeProp={pokemonTypeAPI}
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