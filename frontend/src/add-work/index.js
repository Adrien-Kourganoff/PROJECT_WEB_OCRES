import React from 'react';
import User from './Containers/dashBoard';
import Harold from './img/harold.jpg';
import Widgets from "./Containers/widgets";
import './index.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="mainContainer">
                    <h1>TEST</h1>
                <div class="firstWidgets">
                    <Widgets width={"10%"} height={"10%"} title={"CRYPTO"}/>
                    <Widgets width={"200px"} height={"200px"} title={"AUTRE"}/>
                    <Widgets width={"200px"} height={"200px"} title={"essaie"}/>
                </div>

            </div>)
    }
}