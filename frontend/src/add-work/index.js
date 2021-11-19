import React from 'react';
import User from './Containers/dashBoard';
import Harold from './img/harold.jpg';
import './index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div class="mainContainer">
                <h1>DASHBOARD CRYPTO</h1>
                <User />



            </div>)
    }
}