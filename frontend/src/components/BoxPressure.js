import React from "react";

const BoxPressure = ({ name }) => {
    return (
        <div className="box">
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm offset-sm-1">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{name}</h4>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                            </h2>
                            <div>
                                <p id="pressure"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BoxPressure;