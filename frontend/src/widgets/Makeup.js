import React, { Component } from "react";

class Makeup extends Component {
    constructor(props){
        super(props);
        let parameters;
        if(this.props.parameters){
            parameters = this.props.parameters;
        }else{
            parameters = {
                brand: "maybelline"
            };
        }
        this.state = {
            name: "",
            price: "",
            image: "",
            rating: "",
            request: false,
            refresh: true,

            parameters: parameters,
        }
    }

    useAPI(){
        fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.state.parameters.brand}`)
        .then(res => res.json())
        .then((data) =>{
            this.setState({
                name: data[0].name,
                price: data[0].price,
                image: data[0].image_link,
                rating: data[0].rating,
                request: true,
            });
        },
        (error) =>{
            console.error(error);
        })
    }

    render(){
        if(this.state.refresh){
            this.useAPI();
        }

        if(this.state.request){
            return(
                 <div className = "Makeup_infos">
                    <h4 className="widget-title">Makeup</h4>
                    <img src= {this.state.image} width="30%" height="30%"className="Item_icon" alt = ""/>
                    <p>Name: {this.state.name}</p>
                    <p>Price: {this.state.price} €</p>
                    <p>Rating: {this.state.rating} ⭐️</p>
                </div>
            );
        }
        else{
            return(
                <div className = "Makeup_infos">
                    <h4 className="widget-title">Makeup</h4>
                    <p>Can't find anything...</p>
                </div>
            );
        }
    }
}

export default Makeup;
