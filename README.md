# waterfall-barrel-album

使用React框架编写的相册库，通过 webpack 进行模块化管理。

[DEMO](https://kimi013.github.io/waterfall-barrel-album/)

## 使用方法

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
```js
[
  {
    url: 'http://xxx.com/xx.jpg',
    width: XX,
    height: XX
  }
]
```

本地运行：
```
npm install
npm start
```
浏览器自动打开['http://localhost:8000'](http://localhost:8000)

部署：
```
npm deploy 
// or
npm deploy-windows
```
