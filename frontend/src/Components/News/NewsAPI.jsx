import React, { Component } from "react";
import axios from "axios";
import "./News.css"


class NewsAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://newsapi.org/v2/top-headlines?country=fr&apiKey=bb94286ae0644bb0bb42453fd3abdb09")
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result
            });

            console.log("News");
         console.log(this.state.items);
            // console.log("Crypto");
        
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

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
           
            <div className="widget4">
                 <div className="titre">
                 <p>News</p>
                 </div>
                 <div className="content">
                    <p className="descr">{datas.articles[0].description}</p>
                    <img src= "https://medias.lequipe.fr/img-photo-jpg/adrien-rabiot-repond-aux-sollicitations-des-medias-le-18-novembre-a-doha-p-lahalle-l-equipe/1500000001719710/478:0,1854:1375-640-640-75/d7ac1.jpg" alt="illustration" className="ImageNews"/>
                 </div>
                 <div className="end">
                      <p>Source: {datas.articles[0].source.name}</p>
                 </div>
                
            </div>
           
          
           
        );
      }
    }
  }

  export default NewsAPI;