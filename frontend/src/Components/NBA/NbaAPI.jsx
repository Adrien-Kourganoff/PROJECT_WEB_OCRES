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
      fetch("https://www.balldontlie.io/api/v1/games?dates[]=2022-11-17")
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result
            });

            console.log(this.state.items);
            console.log("use");
            console.log(this.state.items.data[0]);
        
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
      const test = "oui";
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
           
            //   <NbaWidget  data={datas} />
           <div className="widget2">
               
                <div className="match">
                <div className="logo1"><img src= {require('../../img/imgLAC.png')} alt="logo club" className="logoEquipe"/></div>
                    <div className="score"><p>{datas.data[0].home_team_score}  -  {datas.data[0].visitor_team_score}</p></div>
                    <div className="logo2"><p>{datas.data[0].visitor_team.abbreviation}</p></div>
                </div>
                <div className="match">
                    <div className="logo1"><p>{datas.data[1].home_team.abbreviation}</p></div>
                    <div className="score"><p>{datas.data[1].home_team_score}  -  {datas.data[1].visitor_team_score}</p></div>
                    <div className="logo2"><p>{datas.data[1].visitor_team.abbreviation}</p></div>
                </div>
                <div className="match">
                    <div className="logo1"><p>{datas.data[2].home_team.abbreviation}</p></div>
                    <div className="score"><p>{datas.data[2].home_team_score}  -  {datas.data[2].visitor_team_score}</p></div>
                    <div className="logo2"><p>{datas.data[2].visitor_team.abbreviation}</p></div>
                </div>
                

          
           
           </div>
        );
      }
    }
  }

  export default NbaAPI;