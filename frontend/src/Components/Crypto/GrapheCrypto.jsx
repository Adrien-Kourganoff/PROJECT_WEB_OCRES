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
    ChartYAxis,
    ChartArea,
    GridLines,
    ChartSeriesMarkers,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartAxisDefaults,
} from "@progress/kendo-react-charts";
import "./Crypto.css";


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
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=7&interval=daily")
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({
                        isLoaded: true,
                        items: result
                    });

                    console.log("Daily");
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
        console.log("datas->");
        console.log(datas.prices);
        console.log("<-");

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            const test = 2000;
            const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

            return (




                <Chart className="grapho"
                    style={{
                        top: 40,
                        height: 100,
                        width: 150,
                    }}
                >
                    <ChartArea opacity={0} />

                    <ChartValueAxis>
                        <ChartValueAxisItem
                            
                            color= "rgba(192, 1, 1, 0)" 

                        />
                    </ChartValueAxis>
                    
                    <ChartAxisDefaults
                    majorGridLines={{visible: false}}
                    minorGridLines={{visible: false}}
                    
                    />


                    <ChartSeriesMarkers type="cross" />


                    <ChartSeries>
                        <ChartSeriesItem
                            type="line"
                            data={[datas.prices[0][1], datas.prices[1][1], datas.prices[2][1], datas.prices[3][1], datas.prices[4][1], datas.prices[5][1], datas.prices[6][1]]}
                            style="smooth"

                            markers={{
                                visible: false,
                            }}


                            width={1}

                        />
                    </ChartSeries>
                </Chart>



            );
        }
    }
}

export default CryptoAPI;