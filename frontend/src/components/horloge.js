import React from 'react';
import './horloge.css';

export default class Horloge extends React.Component {
    render() {
        return (
            <div className="horloge">
                <div className="heure">
                    <div className="hr"></div>
                </div>
                <div className="minute">
                    <div className="min"></div>
                </div>
                <div className="seconde">
                    <div className="sec"></div>
                </div>

                <div className="numerique">
                    <div className="h-ana">12</div>
                    <div className="m-ana">36</div>
                    <div className="s-ana">02</div>
                </div>

            </div>);
    }
}