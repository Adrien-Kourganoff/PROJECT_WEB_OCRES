import React from 'react';
import Navigation from '../components/navigation';
import "../styles/settings.css";

function Home() {
    return (
      <div className="App">
            <body>
                <Navigation/>
                <div className="Page">
                    <h1>This is home page</h1>
                </div>
            </body>
      </div>
    );
}
  
export default Home;