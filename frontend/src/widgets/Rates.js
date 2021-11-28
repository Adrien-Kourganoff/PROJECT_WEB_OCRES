import React, { Component } from "react";

class Rates extends Component{
    constructor(props){
        super(props);
        this.state = {
            base: "EUR",
            change: "USD",
            value: 0,
            request: false,
        }
    }

    useAPI(){
        fetch(`https://open.er-api.com/v6/latest/${this.state.base}`)
        .then(res => res.json())
        .then((data) =>{
            this.setState({
                value: data.rates[this.state.change],
                request: true,
            });
        },
        (error) =>{
            console.error(error);
        })
    }

    render(){
        this.useAPI();

        if (this.state.request){
            return(
                <div className="Change_rates">
                    <h4 className="widget-title">Change Rates</h4>
                    <p>1 {this.state.base} = {this.state.value} {this.state.change}</p>
                </div>
            );
        }
        else {
            return(
                <div className="Change_rates">
                    <h4 className="widget-title">Change Rates</h4>
                    <p>Can't find anything...</p>
                </div>
            );
        }
    }
}

export default Rates;