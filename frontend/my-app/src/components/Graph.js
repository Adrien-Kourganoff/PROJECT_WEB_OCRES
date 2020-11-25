/* Graph.js */

import React from 'react';
import CanvasJSReact from '../canvasjs.react.js';

var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Graph extends Component {
	render() {
		const options = {
			animationEnabled: true,
			color:{
				color:"blue"
			},
			title: {
				text: "Bénéfices de l'entreprise"
			},
			axisY: {
				title: "bénefices",
				suffix: "k€"
			},
			data: [{
				type: "splineArea",

				dataPoints: [
					{ x: new Date(2020, 0), y: 70.735 },
					{ x: new Date(2020, 1), y: 74.102 },
					{ x: new Date(2020, 2), y: 72.569 },
					{ x: new Date(2020, 3), y: 72.743 },
					{ x: new Date(2020, 4), y: 72.381 },
					{ x: new Date(2020, 5), y: 71.406 },
					{ x: new Date(2020, 6), y: 73.163 },
					{ x: new Date(2020, 7), y: 74.270 },
					{ x: new Date(2020, 8), y: 72.525 },
					{ x: new Date(2020, 9), y: 73.121 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
              