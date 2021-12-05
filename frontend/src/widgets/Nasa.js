import React, { Component } from "react";

class Nasa extends Component {
    constructor (props){
        super(props);
        this.state = {
            image: "",
            title: "",
            date: this.props.date,
            request: false,
            refresh: true,
        }
    }

    useAPI(){
        let api_string = `https://api.nasa.gov/planetary/apod?api_key=6XMlhYbjUPAy0kwyZudpa2VhQE4aS3ocsdyAAlGO`;
        if(this.state.date){
            api_string = api_string + `&date=${this.state.date.year}-${this.state.date.month}-${this.state.date.day}`;
        }
        fetch(api_string)
        .then(res => res.json())
        .then((data) =>{
            this.setState({
                image: data.url,
                title: data.title,
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

        let date = (this.state.date ? 
            this.state.date.day + "-" + this.state.date.month + "-" + this.state.date.year
             : "Today");

        if (this.state.request){
            return(
                <div className="Nasa_picture" >
                    <h4 className="widget-title">NASA Picture of the day</h4>
                    <p>Title: {this.state.title}</p>
                    <p>date: {date}</p>
                    <img src= {this.state.image} width="60%" height="60%" className="picture" alt = "" />
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
