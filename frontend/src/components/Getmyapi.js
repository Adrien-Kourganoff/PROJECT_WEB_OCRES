import React from "react";





export default class Myapi extends React.Component {

    state = {
    loading: true,
    house: [],
    };



    async componentDidMount() {
    const url = "http://localhost:3005/posts";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ house: data, loading: false });

    }



    render() {

    if (this.state.loading) 
    {
        return <div>loading...</div>;
    }



    if (!this.state.house.length) 
    {
        return <div>didn't get a property</div>;
    }



    return (

    <div>
    {this.state.house.map(property => (
    <div key={property.title}>
    {property.title}
    < br/>
    {property.description}
    <br />
    <br />
    </div>
    ))}
    </div>

    );

}}