import React, { Component } from "react";
import axios from "axios";
import '@progress/kendo-theme-default/dist/all.css';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";


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

   
  
    render() {
        const { error, isLoaded, items } = this.state;
        const datas = this.state.items;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        const pieData = [
          {
            name: "1",
            share: 16000,
            color: "rgba(0, 128, 255, 1)",
          },
          {
            name: "2",
            share: 16100,
            color: "rgba(255, 153, 153, 1)",
            
          },
          {
            name: "3",
            share: 16050,
            color: "rgba(245, 0, 0, 1)",
            explode: true,
            
          },
         
        
      
        ];
        const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
        return (
           

          <p>Hello</p>
           
          
           
        );
      }
    }
  }

  export default CryptoAPI;