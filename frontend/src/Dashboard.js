import React from 'react';
import Box from './components/Box.js';
import TodayBox from './components/TodayBox.js';

const Dashboard = ({city}) => {
    return (
    <div>
      <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4">{city}</h2>
      </div>
      <TodayBox name={"Aujourd'hui"}/>
      <div class="App-header">
      <Box name={"demain"}/>
      <Box name={"après-demain"}/>
      <Box name={"le jour d'après"}/>
    </div>
    </div>
    );
};

export default Dashboard;