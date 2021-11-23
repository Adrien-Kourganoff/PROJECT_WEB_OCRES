import React from 'react';
import Navigation from '../components/navigation';

function Home() {
    return (
      <div className="App">
        <Navigation/>
        <header className="App-header">
           <h1>This is home page</h1>
        </header>
      </div>
    );
}
  
export default Home;