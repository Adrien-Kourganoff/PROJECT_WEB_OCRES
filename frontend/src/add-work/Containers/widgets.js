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
        const { user, handleLike } = this.props;
        const { backgroundColor } = this.state;

        return (
            <div class='user'>
                <div class='profile' style={{ background: backgroundColor, color: backgroundColor === 'white' ? 'black' : 'white' }}>
                    <Img src={user.picture} />
                    <div class='profileInfos'>
                        <div class='profileInfo'>
                            {`Prenom: ${user.name}`}
                        </div>
                        <div class='profileInfo'>
                            {`Nom: ${user.surname}`}
                        </div>
                        <div class='profileInfo'>
                            {`Date de naissance: ${user.birthdate}`}
                        </div>
                    </div>
                    <Button text={'Change style'} onClick={this.changeStyle.bind(this)} style={{ alignSelf: 'flex-end' }} />
                </div>
                <Publication text={user.lastPublication} likes={user.like} handleLike={() => handleLike(user.name)} />
            </div>)
    }
}