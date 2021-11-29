import React from 'react';
import Navigation from '../components/navigation';
import NextWorker from '../components/nextWorker';
import Map from '../components/map';
import CardWeather from '../components/card';
import "../styles/settings.css";

function Home() {
    return (
      <div>
            <body>
                <Navigation/>
                <div className="Page">
                    <h1>This is home page</h1>
                    <div class="container big events">
                        <h2> I am the event card </h2>
                    </div>
                    <div class="container big photo">
                        <h2> I am the photo card </h2>
                    </div>
                    <div class="container small meteo">
                        <CardWeather/>
                    </div>
                    <div class="container small list">
                        <NextWorker/>
                    </div>
                    <div class="container big map">
                        <Map/>
                    </div>
                    <div class="fix"></div>
                </div>
            </body>
      </div>
    );
}
  
export default Home;