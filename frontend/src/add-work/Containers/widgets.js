import React from 'react';
import '../css/widgets.css';

export default class Widgets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { width, height, title, backText } = this.props;

        return (
            <div className='widget' style={{width : width, height: height}}>
                <div className='widgets'>
                    <h1>{title}</h1>
                </div>
                <div className='widgets widarriere'>
                    <p>{backText}</p>
                </div>
            </div>
            )
    }
}