import React from "react";

const BoxAPICreated = ({ name }) => {
    return (
        <div className="bigBox">
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm offset-sm-1">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{name}</h4>
                        </div>
                        <div className="card-body">
                            <h2 id="day0-forecast-main" className="card-title">
                            </h2>
                            <div>
                                <p id="id0"></p>
                                <p id="tempH0"></p>
                                <p id="lieuTempH0"></p>
                                <p id="anneeTempH0"></p>
                                <p id="tempB0"></p>
                                <p id="lieuTempB0"></p>
                                <p id="anneeTempB0"></p>
                                <br/>
                                <br/>
                                <p id="id1"></p>
                                <p id="tempH1"></p>
                                <p id="lieuTempH1"></p>
                                <p id="anneeTempH1"></p>
                                <p id="tempB1"></p>
                                <p id="lieuTempB1"></p>
                                <p id="anneeTempB1"></p>
                                <br/>
                                <br/>
                                <p id="id2"></p>
                                <p id="tempH2"></p>
                                <p id="lieuTempH2"></p>
                                <p id="anneeTempH2"></p>
                                <p id="tempB2"></p>
                                <p id="lieuTempB2"></p>
                                <p id="anneeTempB2"></p>
                                <br/>
                                <br/>
                                <p id="id3"></p>
                                <p id="tempH3"></p>
                                <p id="lieuTempH3"></p>
                                <p id="anneeTempH3"></p>
                                <p id="tempB3"></p>
                                <p id="lieuTempB3"></p>
                                <p id="anneeTempB3"></p>
                                <br/>
                                <br/>
                                <p id="id4"></p>
                                <p id="tempH4"></p>
                                <p id="lieuTempH4"></p>
                                <p id="anneeTempH4"></p>
                                <p id="tempB4"></p>
                                <p id="lieuTempB4"></p>
                                <p id="anneeTempB4"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BoxAPICreated;