import React from 'react';
/**
 * props:
 * {
 *    demoType: waterfall / barrel,
 *    optionName: colNum / initialHeight,
 *    optionRange: 1 - 8 / 200 - 500,
 *    changeOption: ,
 *    changeSpace: ,
 *    changeDemoType:
 * }
 */

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.changeOption = this.changeOption.bind(this);
    this.changeSpace = this.changeSpace.bind(this);
  }

  changeOption() {
    this.props.changeOption(this.refs.optionValue.value);
    this.refs.optionValue.value = '';
  }

  changeSpace() {
    this.props.changeSpace(this.refs.spaceValue.value);
    this.refs.spaceValue.value = '';
  }

  render() {
    return (
      <div className = "controller">
        <h2>{this.props.demoType + ' Album'}</h2>
        <div className = "change-option">
          <p className = "title">{this.props.optionName + ': '}</p>
          <input type = "text"
            ref = "optionValue"
            className = "change-input change-option-input"
            placeholder = {this.props.optionRange}
          />
          <input type = "button"
            value = "Change"
            className = "change-button change-option-button"
            onClick = {this.changeOption}
          />
        </div>
        <div className = "change-space">
          <p className = "title">Space: </p>
          <input type = "text"
            ref = "spaceValue"
            className = "change-input change-space-input"
            placeholder = "0 ~ 50"
          />
          <input type = "button"
            value = "Change"
            className = "change-button change-space-button"
            onClick = {this.changeSpace}
          />
        </div>
        <div className = {'change-demo-type change-to-' + this.props.demoType}>
          <input type = "button"
            value = "Change Demo Type"
            className = {'change-button change-to-' + this.props.demoType + '-button'}
            onClick = {this.props.changeDemoType}
          />
        </div>
      </div>
    );
  }
}

module.exports = Controller;