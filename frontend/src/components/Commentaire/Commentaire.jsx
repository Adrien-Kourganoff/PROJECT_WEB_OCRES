import React, { Component } from 'react';
import { MessageList } from 'react-chat-elements'
import "./Commentaire.css";
import 'react-chat-elements/dist/main.css';

class Commentaire extends Component {


    render() {

        return (
            <div className="container-commentaire">
                <div className="message-list-container">
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={this.props.user.commentaire} />
                </div>
            </div>
        );
    }
}

export default Commentaire;