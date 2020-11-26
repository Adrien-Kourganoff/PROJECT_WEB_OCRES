import React, { Component } from 'react';
import { MessageList } from 'react-chat-elements'
import "./Commentaire.css";
import 'react-chat-elements/dist/main.css';

class Commentaire extends Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    data = [{
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(2018, 8, 22, 15, 0, 0),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        {
            position: 'left',
            type: 'text',
            title: 'Elit magna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        }
    ]

    render() {
        return (
            <div className="container-commentaire">
                <div className="message-list-container">
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={this.data} />
                </div>
            </div>
        );
    }
}

export default Commentaire;