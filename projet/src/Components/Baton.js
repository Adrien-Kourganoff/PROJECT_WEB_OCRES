import React from 'react'
import ReactDOM from 'react-dom';
import {Component} from 'react';
import { BarChart, Bar, XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import './Baton.css';


const data = [
  {name: 'Lu', happiness: 3,  amt: 24},
  {name: 'Ma', happiness: 2,  amt: 22},
  {name: 'Me', happiness: 3,  amt: 22},
  {name: 'Je', happiness: 3,  amt: 20},
  {name: 'Ve', happiness: 4,  amt: 21},
  {name: 'Sa', happiness: 3,  amt: 25},
  {name: 'Di', happiness: 5,  amt: 21},
];

class Baton extends React.Component {
	render () {
  	return (
    	<BarChart width={500} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="happiness" fill="#9370db" />
      </BarChart>
    );
  }
}
ReactDOM.render(
  <Baton />,
  document.getElementById('root')
);
export default Baton;