import React from 'react';
import '../css/widgets.css';

export default class Widgets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { width, heigth, title } = this.props;

        return (
            <div class='widgets' style={{width : {width}, height: {heigth}}}>
                <h1>{title}</h1>
            </div>
            )
    }
}