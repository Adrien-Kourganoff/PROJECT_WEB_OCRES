import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';

const data = [
  {
    name: '20-05-2020', Bateau1: 40, Bateau2: 26, amt: 2400,
  },
  {
    name: '03-11-2020', Bateau1: 35, Bateau2: 90, amt: 2210,
  },
  {
    name: '18-03-2021', Bateau1: 70, Bateau2: 47, amt: 2290,
  },
  {
    name: '28-02-2020', Bateau1: 41, Bateau2: 38, amt: 2000,
  },
  {
    name: '23/24-11-2020', Bateau1: 19, Bateau2: 55, amt: 2181,
  },
];

export default class Diagramme extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Bateau1" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Bateau2" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
