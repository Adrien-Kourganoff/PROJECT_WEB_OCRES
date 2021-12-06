import React from 'react';
import './Getaddress.css';
  
class Getaddress extends React.Component {
    // simple react component example: rendering third-party data
    // FIXME : add a isError boolean or a status_code==200 check


    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {}
        };
    }


    getData() {
        // GET request using fetch
        var url = 'https://api-adresse.data.gouv.fr/search/?q=plaine des cafres' 
        
        fetch(url, {"method": "GET","headers":{ "accept": "application/json"}})
        .then(response => response.json())
        .then(data => {
        
        this.setState({
          isLoaded: true,
          data: data
           });
      });
    }


    componentDidMount() {
        this.getData();
   }


    render() {
      const { isLoaded, data } = this.state;
      //console.log("isloaded: " + isLoaded)
      //console.log(data)
      if (!isLoaded)
        return (<div className="loading">fetching data ...</div>);

      return (
            <>
            <div className="getaddress"> 
            <h3>Address component from adresse.data.gouv.fr</h3>
            <h4>searched: { data.query }</h4>
                { 
                    data.features.map((feature, ix) => (
                        <div id = {ix} className="box">
                            <p> {ix} { feature.properties.label } 
                                <ul id="lon">longitude {feature.geometry.coordinates[0]}</ul>
                                <ul id="lat">latitude {feature.geometry.coordinates[1]}</ul>
                            </p>
                        </div>
                    ))
                }
              </div>
              </>
            )
        }

    }   

export default Getaddress ;
