import React from 'react';
import Navigation from '../components/navigation';
import NextWorker from '../components/nextWorker';
import "../styles/settings.css";

function Home() {
    return (
      <div className="App">
            <body>
                <Navigation/>
                <div className="Page">
                    <NextWorker/>
                </div>
            </body>
      </div>
    );
}
  
export default Home;