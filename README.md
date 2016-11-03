# waterfall-barrel-album

使用React框架编写的相册库。

[DEMO](https://kimi013.github.io/waterfall-barrel-album/)

在 app/main.jsx 设置参数
```js
var config = {
  container: container,
  imgsArr: imgsArrTest,
  option: {
    demoType: 'waterfall',
    optionValue: 4, // colNum or initialHeight
    spaceValue: 10
  }
};
```
其中 optionValue 的值在瀑布流中表示 column 数量，在木桶布局中表示初始高度。spaceValue 表示图片间距。
imgsArr 表示图片的数据，以 JSON 形式表示：
```json
[
  {
    url: 'http://xxx.com/xx.jpg',
    width: XX,
    height: XX
  }
]
```

