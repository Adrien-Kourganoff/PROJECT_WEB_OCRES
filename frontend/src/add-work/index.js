import React from 'react';
import User from './Containers/dashBoard';
import Harold from './img/harold.jpg';

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="mainContainer">
                    <h1>TEST</h1>
                <User />

            </div>)
    }
}