import React, { Component } from "react";
import axios from "axios";



class CryptoAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }



    componentDidMount() {
        fetch("https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true")
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({
                        isLoaded: true,
                        items: result
                    });

                    console.log("Crypto");
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
<<<<<<< HEAD


=======
  
>>>>>>> parent of da60ed5 (SwitchOrdiRyan)
    render() {
        const { error, isLoaded, items } = this.state;
        const datas = this.state.items;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
           
            <p>Hello</p>
          
           
        );
      }

    }
}

export default CryptoAPI;