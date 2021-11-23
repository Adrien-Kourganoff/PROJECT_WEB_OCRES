import { Component } from "react";
import React from "react";
import Affichage from "../pages/Affichage";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

//import weatherData from "./data";

class LineChartComponent extends Component {
    state = {
        chartData: []
    };

    formatData = (data) =>
        data.map(({ dt_txt, main }) => ({
            // date -> Can be used as dataKey for XAxis
            //Further you can format the date as per your need
            date: dt_txt,
            // temp -> Can be used as dataKey for Line
            temp: main.temp
        }));

    componentDidMount() {
        const fetchData = async () => {
            // Commenting as getting error while fetching
            // But here you can have logic of fetching the data and
            //add listeners etc
            let res = await fetch(
            "api.openweathermap.org/data/2.5/forecast?lat=&lon=45.62565574467891&appid=ca148f5dc67f12aafaa56d1878bb6db2#"
            );
            res = await res.json();

            //Here i'm using dummy promise to simulate the API call
            /*const promise = new Promise((res) => {
                setTimeout(() => {
                    res(weatherData);
                }, 500);
            });
            const res = await promise;*/

            //After getting the data from the backend,
            //format it as per how the LineChart is expecting
            this.setState({
                chartData: this.formatData(res.list)
            });
        };
        fetchData();
    }

    render() {
        const { chartData } = this.state;
        return (
            <LineChart width={600} height={300} data={chartData}>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>
        );
    }
}

export default LineChartComponent;