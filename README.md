# waterfall-barrel-album

使用React框架编写的相册库，通过 webpack 进行模块化管理。

[DEMO](https://kimi013.github.io/waterfall-barrel-album/)

## 使用方法
### 参数设置
在 app/main.jsx 中设置参数
```js
var config = {
  container: document.getElementById('container'),
  imgsArr: ,
  option: {
    demoType: 'waterfall',
    optionValue: 4, // colNum or initialHeight
    spaceValue: 10
  }
};
```

- container：向该元素中渲染
- imgsArr 表示图片的数据，以 JSON 形式表示：
```js
[
  {
    url: 'http://xxx.com/xx.jpg',
    width: XX,
    height: XX
  }
]
```
- demoType：展示形式，waterfall 或 barrel
- optionValue：在瀑布流中表示 column 数量，在木桶布局中表示初始高度
- spaceValue：图片间距

###本地运行与部署

本地运行：
```
npm install
npm start
```
浏览器自动打开 [http://localhost:8000](http://localhost:8000)

部署：
```
npm deploy 
// or
npm deploy-windows
```

##浏览器兼容性
![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Chrome 4.0+ ✔ | Firefox 10.0+ ✔ | Opera 15.0+ ✔ | Safari 4.0+ ✔ |
