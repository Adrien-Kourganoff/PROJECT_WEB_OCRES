import React from 'react';
import Navigation from '../components/navigation';
import "../styles/settings.css";

function Home() {
    return (
      <div>
            <body>
                <Navigation/>
                <div className="Page">
                    <h1>This is home page</h1>
                    <div class="container events">
                        <h2> I am the event card </h2>
                    </div>
                    <div class="container photo">
                        <h2> I am the photo card </h2>
                    </div>
                    <div class="container meteo">
                        <h2> I am the meteo card </h2>
                    </div>
                    <div class="container list">
                        <h2> I am the list card </h2>
                    </div>
                    <div class="container map">
                        <h2> I am the map card </h2>
                    </div>
                    <div class="fix"></div>
                </div>
            </body>
      </div>
    );
}
  
export default Home;