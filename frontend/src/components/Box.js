import React from "react";

const Box = ({name}) => {
    return(
    <div class="box">
        <div class="container">
            <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm offset-sm-1">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">{name}</h4>
                    </div>
                    <div class="card-body">
                        <h2 id="day1-forecast-main" class="card-title">
                        </h2>
                        <div>
                            <p id="day1-forecast-more-info"></p>
                            <div id="day1-icon-weather-container" ></div>
                            <h3 id="day1-forecast-temp"> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/API_Weather.js"></script>
        <script src="js/script.js"></script> 
    </div>
    );
};
export default Box;