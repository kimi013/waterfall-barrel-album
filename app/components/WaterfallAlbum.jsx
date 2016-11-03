import React from 'react';
import ImgItem from './ImgItem.jsx';


class Waterfall extends React.Component {
  constructor(props) {
    super(props);
    this.arrange = this.arrange.bind(this);
    this.config = {
      colsArr: [],
      colsHeight: []
    };
  }

  arrange(colNum, imgsArr, space) {
    var colsArr = this.config.colsArr,
        colsHeight = this.config.colsHeight;
    colsArr.length = 0;
    colsHeight.length = 0;
    for (var i = 0; i < colNum; i++) {
      colsArr.push([]);
      colsHeight.push(0);
    }

    for (var j = 0, len = imgsArr.length; j < len; j++) {
      var minHeightIndex = colsHeight.indexOf(Math.min.apply(Math, colsHeight));
      var img = imgsArr[j];
      colsArr[minHeightIndex].push(
        <ImgItem src = {img.url}
          style = {{
            imgItem: {
              padding: this.props.space / 2 + 'px'
            },
            imgBg: {
              paddingBottom: img.height / img.width * 100 + '%'
            }
          }}
        />
      );
      colsHeight[minHeightIndex] += img.height / img.width;
    }
  }

  render() {
    this.arrange(this.props.colNum, this.props.imgsArr, this.props.space);
    var imgItems = [];
    var styleObj = {
      width: 100 / this.props.colNum + '%'
    }
    for (var i = 0; i < this.props.colNum; i++) {
      imgItems.push(
        <div className = "column" style = {styleObj}>
          {this.config.colsArr[i]}
        </div>
      );
    }
    return (
      <div className = "waterfall-album">
        {imgItems}
      </div>
    );
  }
}

module.exports = Waterfall;