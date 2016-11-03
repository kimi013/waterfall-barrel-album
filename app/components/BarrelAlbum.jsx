import React from 'react';
import ImgItem from './ImgItem.jsx';

class BarrelAlbum extends React.Component {
  render() {
    // 如果高度为initialHeight，一行的比例
    var rowRatio = this.props.containerWidth / this.props.initialHeight,
    // 一行的图片信息的数组与最终的比例
    rowDetail = {
      rowArr: [],
      totalRatio: 0
    },
    // 所有ImgItem的数组
    imgItems = [];

    for (var i = 0, len = this.props.imgsArr.length; i < len; i++) {
      var img = this.props.imgsArr[i];
      rowDetail.totalRatio += img.width / img.height;
      rowDetail.rowArr.push(img);

      // 如果一行最终比例大于rowRatio，或以遍历到最后一个图片
      if (rowDetail.totalRatio >= rowRatio || i === len - 1) {
        // 比例的差别
        var ratioDif = (i === len - 1 && rowDetail.totalRatio <= rowRatio) ? 1 :
          (rowDetail.totalRatio / rowRatio);
        // 一行ImgItem的数组
        var rowItems = rowDetail.rowArr.map(function (item, index) {
          return (
            <ImgItem
              src = {item.url}
              style = {{
                imgItem: {
                  width: this.props.initialHeight * (item.width / item.height) / ratioDif + 'px',
                  height: this.props.initialHeight / ratioDif + 'px',
                  padding: this.props.space / 2 + 'px'
                },
                imgBg: {
                  height: '100%'
                }
              }}
            />);
        }.bind(this));

        // 经这一行的ImgItem添加到所有ImgItem的数组里
        Array.prototype.push.apply(imgItems, rowItems);

        // 清空rowDetail，用于下一行的计算
        rowDetail = {
          rowArr: [],
          totalRatio: 0
        };
      }
    }

    return (
      <div className = "barrel-album">
        {imgItems}
      </div>
    );
  }
}

module.exports = BarrelAlbum;