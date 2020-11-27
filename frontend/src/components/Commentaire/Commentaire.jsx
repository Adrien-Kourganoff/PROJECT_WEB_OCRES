import React, { Component } from 'react';
import { MessageList } from 'react-chat-elements'
import "./Commentaire.css";
import 'react-chat-elements/dist/main.css';

class Commentaire extends Component {
    constructor(props) {
        super(props);
         this.state = { benef : this.props.user.commentaire };
    }
    

    render() {
        var data =this.state.benef;
    
        return (
            <div className="container-commentaire">
                <div className="message-list-container">
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={data} />
                </div>
            </div>
        );
    }
}

export default Commentaire;