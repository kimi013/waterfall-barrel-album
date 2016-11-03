function getRandomNum(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

function getRandomColor() {
  var str = '',
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  for (var i = 0; i < 6; i++) {
    str += arr[Math.floor(Math.random() * 16)];
  }
  return str;
}

var imgsArr = [];
/**
 * [
 *   {
 *     url: 'http://xxx.com/xx.jpg',
 *     width: XX,
 *     height: XX,
 *   }
 * ]
 */


for (var i = 0; i < 30; i++) {
  var width = getRandomNum(300, 800),
      height = getRandomNum(300, 800),
      url = 'http://placehold.it/' + width + 'x' + height + '/' + getRandomColor();
  imgsArr[i] = {
    url: url,
    width: width,
    height: height
  };
}

module.exports = imgsArr;