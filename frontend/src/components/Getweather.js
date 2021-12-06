import React from 'react';
import './Getweather.css';

class Getweather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: {}
        };
    }

    getData() {
                // Simple GET request using fetch
        fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Paris&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b',
              {"method": "GET","headers":{ "accept": "application/json"}})
            .then(response => response.json())
        .then(data => {
        
            this.setState({
              isLoaded: true,
              data: data

               });
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
      const { isLoaded, data } = this.state;
      var jour = 0;
      console.log("isloaded: " + isLoaded)
      console.log(data)
      if (!isLoaded)
        return (<div className="loading">fetching data ...</div>);
      return (
            <>
            <div className="getaddress"> 

            <h3>Meteo pour les sept prochains jours</h3>
            <span> { data.city.name }, {data.city.country } </span>
            <input id="searchBar" type="text" placeholder="type a location ..."></input>

                { 
                    data.list.map((item, ix) => (
                        
                        <div id = {ix} className="box">
                            <h4>Jour {ix+1} </h4>
                            temperature: { item.temp.day } °C <br/>
                            temperature ressentie: { item.feels_like.day } °C <br/>
                            humidité { item.humidity } % <br/>
                            temps: {item.weather[0].main} <br/>
                            <div class="weather-icon"><img src="http://openweathermap.org/img/wn/10d@2x.png" />
                            </div>
                            
                        </div>
                    ))
                }
              </div>
              </>
            )
        }
}

export default Getweather ;