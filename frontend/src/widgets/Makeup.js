import React, { Component } from "react";

class Makeup extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            price: "",
            image: "",
            rating: "",
            search: false,
        }
    }

    useAPI(){
        fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        .then(res => res.json())
        .then((data) =>{
            this.setState({
                name: data[0].name,
                price: data[0].price,
                image: data[0].image_link,
                rating: data[0].rating,
                search: true,
            });
        },
        (error) =>{
            console.error(error);
        })
    }

    render(){
        this.useAPI();

        if(this.state.search){
            return(
                 <div className = "Makeup_infos">
                    <h4 className="widget-title">Makeup</h4>
                    <img src= {this.state.image} className="Item_icon" alt = ""/>
                    <p>Name: {this.state.name}</p>
                    <p>Price: {this.state.price} €</p>
                    <p>Rating: {this.state.rating} ⭐️</p>
                </div>
            );
        }
        else{
            return(
                <p>Couldn't find anything...</p>
            );
        }
    }
}

export default Makeup;