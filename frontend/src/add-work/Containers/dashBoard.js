import React from 'react';
import '../../index.css';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white'
        }
    }

    render() {
        return (
            <div class='user'>
                <h2>Essaie</h2>
            </div>)
    }
}