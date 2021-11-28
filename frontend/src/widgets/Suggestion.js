import React, { Component } from "react";

class Suggestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            activity: "Nothing to suggest",
            participants: 0,
            refresh: true,
        };
    }
    useAPI(){
        fetch(`https://www.boredapi.com/api/activity`)
        .then(res => res.json())
        .then((data) =>{
            this.setState({
                activity: data.activity,
                participants: data.participants,
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

        return(
            <div className = "activity_suggestion">
                <h4 className="widget-title">Suggestion</h4>
                <p>
                    Activity suggestion: {this.state.activity}
                </p>
                <p>
                    Nb of participants: {this.state.participants}
                </p>
            </div>
        );
    }
}

export default Suggestion;