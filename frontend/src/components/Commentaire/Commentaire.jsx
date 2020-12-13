import React, { Component } from 'react';
import { MessageList } from 'react-chat-elements'
import "./Commentaire.css";
import 'react-chat-elements/dist/main.css';

class Commentaire extends Component {


    render() {
        
        const comElements = this.props.user.commentaire.map(function (comElements) {
            return {
                position: "left",
                comType: "text",
                title: comElements.title,
                text: comElements.text,
                date: new Date(),
            }
        });
        return (
            <div className="container-commentaire">
                <div className="message-list-container">
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={comElements} />
                </div>
            </div>
        );
    }
}

export default Commentaire;