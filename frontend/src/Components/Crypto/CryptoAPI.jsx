import React, { Component } from "react";
import axios from "axios";
import "./Crypto.css"

import '@progress/kendo-theme-default/dist/all.css';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
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

            const pieData ={
                labels: ["1","2","3"],
                datasets: [{
                  label: 'My First Dataset',
                  data: [65, 59, 80],
                  fill: true,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.5
                }]
              };
            return (

                <div className="widget3">

                    <p>Crypto: {datas.name}</p>

                    <Chart
                        style={{
                            
                        }}
                    >
                        <ChartTitle text="Les sports les plus regardÃ©s" align="center" />
                        <ChartLegend position="right" orientation="vertical" align="end" />
                        <ChartSeries>
                            <ChartSeriesItem

                                type="line"
                                overlay={{
                                    gradient: "glass",
                                }}
                                tooltip={{
                                    visible: false,
                                }}
                                data={pieData}
                                categoryField="name"
                                 field="share"
                                color="color"
                              
                            />
                        </ChartSeries>
                    </Chart>
                </div>



            );
        }
    }
}

export default CryptoAPI;