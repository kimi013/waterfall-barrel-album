import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import imgsArrTest from './components/imgsArrTest.js';

var container = document.getElementById('container');

var config = {
  container: container,
  imgsArr: imgsArrTest,
  option: {
    demoType: 'barrel',
    optionValue: 300, // colNum or initialHeight
    spaceValue: 10
  }
};

ReactDOM.render(
  <App
    config = {config}
  />,
  config.container
);