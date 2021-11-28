import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

// regular imports
ReactDOM.render(<App/> , document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App/>, document.getElementById('root'))
  })
}
