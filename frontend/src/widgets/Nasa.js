import React, { Component } from "react";
//import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Nasa extends Component {
    constructor (props){
        super(props);
        this.state = {
            image: "",
            year: "",
            month: "",
            day: "",
            request: false,
            refresh: true,
        }
    }

    useAPI(){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=6XMlhYbjUPAy0kwyZudpa2VhQE4aS3ocsdyAAlGO`)
        .then(res => res.json())
        .then((data) =>{
            this.setState({
                image: data.url,
                request: true,
                refresh: false,
            });
        },
        (error) =>{
            console.error(error);
        })
    }

    render(){
        if (this.state.refresh){
            this.useAPI();
        }

        if (this.state.request){
            return(
                <div className="Nasa_picture">
                    <h4 className="widget-title">NASA Picture of the day</h4>
                    <img src= {this.state.image} className="picture" alt = ""/>
                </div>
            );
        }
        else {
            return(
                <div className="Nasa_picture">
                    <h4 className="widget-title">NASA Picture of the day</h4>
                    <p>Can't find anything...</p>
                </div>
            );
        }
    }
}

export default Nasa;