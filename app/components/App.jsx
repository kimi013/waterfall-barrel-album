import React from 'react';
import WaterfallAlbum from './WaterfallAlbum.jsx';
import BarrelAlbum from './BarrelAlbum.jsx';
import Controller from './Controller.jsx';

require('normalize.css');
require('./App.less');

// 图片信息数组
var imgsArr = require('./imgsArrTest.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    this.handleChangeSpace = this.handleChangeSpace.bind(this);
    this.handleChangeDemoType = this.handleChangeDemoType.bind(this);
    this.handleChangeContainerWidth = this.handleChangeContainerWidth.bind(this);

    var state = JSON.parse(JSON.stringify(this.props.config.option));
    if (state.demoType === 'waterfall') {
      if (!(state.optionValue >= 1 && state.optionValue <= 8)) {
        state.optionValue = 4;
      }
    } else if (state.demoType === 'barrel') {
      state.containerWidth = this.props.config.container.clientWidth;
      if (!(state.optionValue >= 200 && state.optionValue <= 500)) {
        state.optionValue = 300;
      }
    }
    this.state = state;
  }


  handleChangeOption(optionValue) {
    var optionValueNum = parseInt(optionValue.trim(), 10);
    // 设置optionValue，即colNum或initialHeight
    if ((this.state.demoType === 'waterfall' && optionValue >= 1 && optionValue <= 8) ||
        (this.state.demoType === 'barrel' && optionValue >= 200 && optionValue <= 500)) {
      var state = JSON.parse(JSON.stringify(this.state));
      state.optionValue = optionValue;
      this.setState(state);
    } else {
      alert('Invalid value!');
    }
  }

  handleChangeSpace(spaceValue) {
    var spaceValueNum = parseInt(spaceValue.trim(), 10);
    if (spaceValueNum >= 0 && spaceValueNum <= 50) {
      var state = JSON.parse(JSON.stringify(this.state));
      state.spaceValue = spaceValueNum;
      this.setState(state);
    } else {
      alert('Invalid value!');
      return ;
    }
  }


  handleChangeDemoType() {
    var state = JSON.parse(JSON.stringify(this.state));
    if (this.state.demoType === 'waterfall') {
      state.demoType = 'barrel';
      state.optionValue = 300;
      state.containerWidth = this.props.config.container.clientWidth;

      window.addEventListener('resize', this.handleChangeContainerWidth.bind(this));

    } else if (this.state.demoType === 'barrel') {
      state.demoType = 'waterfall';
      state.optionValue = 4;
      delete state.containerWidth;
    }
    this.setState(state);
  }


  handleChangeContainerWidth(event) {
    var containerWidth = this.props.config.container.clientWidth;
    if (containerWidth !== this.state.containerWidth) {
      this.setState({
        containerWidth: containerWidth
      });
    }
  }


  componentDidMount() {
    if (this.state.demoType === 'barrel') {
      var changeContainerWidth = function (event) {
        var containerWidth = this.props.config.container.clientWidth;
        if (containerWidth !== this.state.containerWidth) {
          this.setState({
            containerWidth: containerWidth
          });
        }
      }.bind(this);

      // 如果出现垂直滚动条，容器宽度发生改变
      changeContainerWidth();

      window.addEventListener('resize', this.handleChangeContainerWidth.bind(this));
    }
  }


  render() {
    var albumComponent = null,
        demoType = this.state.demoType,

        configObj = {
          waterfall: {
            optionName: 'column number',
            optionRange: '1 ~ 8'
          },
          barrel: {
            optionName: 'initial height',
            optionRange: '200 ~ 500'
          }
        },

        controller = <Controller
          demoType = {demoType}
          optionName = {configObj[demoType]['optionName']}
          optionRange = {configObj[demoType]['optionRange']}
          changeOption = {this.handleChangeOption}
          changeSpace = {this.handleChangeSpace}
          changeDemoType = {this.handleChangeDemoType}
        />;

    if (demoType === 'waterfall') {
      albumComponent = <WaterfallAlbum
        imgsArr = {imgsArr}
        space = {this.state.spaceValue}
        colNum = {this.state.optionValue}
      />;
    } else if (demoType === 'barrel') {
      albumComponent = <BarrelAlbum
        imgsArr = {imgsArr}
        space = {this.state.spaceValue}
        initialHeight = {this.state.optionValue}
        containerWidth = {this.state.containerWidth}
      />;
    }

    return (
      <div id = "app">
        {controller}
        {albumComponent}
      </div>
    );
  }
}

module.exports = App;