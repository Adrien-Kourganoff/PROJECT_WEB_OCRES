import React, { Component } from 'react'

import { RadialBarChart, RadialBar, Legend } from 'recharts';

import dataAge from '../Data/dataAge'

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};


class Cardcinq extends Component {
  
  render () {
    
    return (
      <div className='Cardcinq'>
        <h3>Ages des acheteurs</h3>
        <br></br>
        <center>
        <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={dataAge}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
        </center>

      </div>
    )
  }
}

export default Cardcinq