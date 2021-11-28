import React from 'react';
import LastPictures from '../components/lastPicture';
import Navigation from '../components/navigation';
import "../styles/settings.css";

function Home() {
    return (
      <div className="App">
            <body>
                <Navigation/>
                <div className="Page">
                    <LastPictures/>
                </div>
            </body>
      </div>
    );
}
  
export default Home;