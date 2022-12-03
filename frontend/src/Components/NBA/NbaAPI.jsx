import React, { Component } from "react";
import axios from "axios";
import "../Meteo/Forecast.css";
import NbaWidget from "./NbaWidget";
import "./Nba.css"


class NbaAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://www.balldontlie.io/api/v1/games?dates[]=2022-11-30")
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result
            });

            console.log(this.state.items);
            console.log("use");
        
        },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      const datas = this.state.items;
    //   const nomImg = this.state.items.data[0].visitor_team.abbreviation;
    //    console.log(nomImg) ;
       console.log("oui");
      const test = "LAC";
      
      console.log('../../img/img'+test+'.png');

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
           
            //   <NbaWidget  data={datas} />
           <div className="widget2">
            
            <p className="Titre">Resultats de la nuit</p>
               
                <div className="match">
                    <div className="logo1"><img src= {require('../../img/img'+datas.data[0].home_team.abbreviation+'.png')} alt="logo club" className="logoEquipe"/></div>
                    <div className="score"><p>{datas.data[0].home_team_score}  -  {datas.data[0].visitor_team_score}</p></div>
                    <div className="logo1"><img src= {require('../../img/img'+datas.data[0].visitor_team.abbreviation+'.png')} alt="logo club" className="logoEquipe"/></div>
                </div>
                
                <div className="match">
                    <div className="logo1"><img src= {require('../../img/img'+datas.data[1].home_team.abbreviation+'.png')} alt="logo club" className="logoEquipe"/></div>
                    <div className="score"><p>{datas.data[1].home_team_score}  -  {datas.data[1].visitor_team_score}</p></div>
                    <div className="logo1"><img src= {require('../../img/img'+datas.data[1].visitor_team.abbreviation+'.png')} alt="logo club" className="logoEquipe"/></div>
                </div>  
                 
                <div className="match">
                    <div className="logo1"><img src= {require('../../img/img'+datas.data[2].home_team.abbreviation+'.png')} alt="logo club" className="logoEquipe"/></div>
                    <div className="score"><p>{datas.data[2].home_team_score}  -  {datas.data[2].visitor_team_score}</p></div>
                    <div className="logo1"><img src= {require('../../img/img'+datas.data[2].visitor_team.abbreviation+'.png')} alt="logo club" className="logoEquipe"/></div>
                </div>
        
           </div>
        );
      }
    }
  }

  export default NbaAPI;