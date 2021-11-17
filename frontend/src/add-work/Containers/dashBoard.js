import React from 'react';
import '../css/dashBoard.css';

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
                <h2 class="salut">Essaie</h2>
                
            </div>)
    }
}