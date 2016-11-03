import React from 'react';

class ImgItem extends React.Component {
  componentDidMount() {
    // 预加载
    var img = new Image();
    img.src = this.props.src;
    img.addEventListener('load', function(e) {
      this.refs.imgWrapper.className += ' loaded';
    }.bind(this));
  }

  render() {
    return (
      <div className = "img-item" style = {this.props.style.imgItem}>
        <div className = "img-bg" style = {this.props.style.imgBg}>
          <div className = "img-wrapper" ref = "imgWrapper">
            <img src = {this.props.src} alt = {this.props.src} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ImgItem;