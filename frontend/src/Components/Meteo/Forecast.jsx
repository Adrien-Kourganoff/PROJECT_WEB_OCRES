import React, { Component } from "react";
import axios from "axios";
import Day from "./Day";
import "./Forecast.css";

const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "768a35a09a1701be84498950a95e7cf5";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null
    };
  }

  callAPI = city => {
    // Call API
    axios
      .get(`${API_URL}?q=Paris&appid=${API_KEY}&units=metric`)
      .then(({ data }) => {
        console.log(data);
        // Recupere uniquement la propriété data
        const { list } = data;
        // On prend les trois premières heures de chaque jour (donc de 0-3h))
        const forecast = [list[0]];

        this.setState({ forecast });
      })
      .catch(console.error);
  };

  // Lance un appel au lancement du component
  componentDidMount() {
    const { city } = this.props;
    this.callAPI(city);
  }

  // A chaque update relance une api
  componentDidUpdate(nextProps) {
    // Ici on verifie que la mise à jour concerne bien le champs city
    if (nextProps.city !== this.props.city) {
      this.callAPI(nextProps.city);
    }
  }

  render() {
    const { forecast } = this.state;
    const { city } = this.props;
    if (!forecast) return <p>Loading...</p>;
    return (
      
        <div className="forecast-container">
          {/* render tout le tableau */}
          {forecast.map((forecastData, index) => {
            return <Day key={index} data={forecastData} />;
          })}
          {/* <Day data={forecast[0]}/>
          <Day data={forecast[1]}/>
          <Day data={forecast[2]}/>
          <Day data={forecast[3]}/>
          <Day data={forecast[4]}/> */}
        </div>
     
    );
  }
}

export default Forecast;