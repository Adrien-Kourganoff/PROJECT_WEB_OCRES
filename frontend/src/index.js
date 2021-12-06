import React from 'react';
import ReactDOM from 'react-dom';
//import ReactECharts from 'echarts-for-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
	<BrowserRouter>
	<App />
	</BrowserRouter>

	, document.getElementById('root')
);


// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();