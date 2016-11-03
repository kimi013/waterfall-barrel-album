import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import imgsArrTest from './components/imgsArrTest.js';

var container = document.getElementById('container');

var config = {
  container: container,
  imgsArr: imgsArrTest,
  option: {
    demoType: 'waterfall',
    optionValue: 4, // colNum or initialHeight
    spaceValue: 10
  }
};

ReactDOM.render(
  <App
    config = {config}
  />,
  config.container
);