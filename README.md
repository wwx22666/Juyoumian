# 聚有面儿开发文档

[github项目地址](https://github.com/wwx22666/Juyoumian)

[聚有面儿网站](http://www.juyoumian.com/index/index.html)

### 一. 配置环境

1. 前端环境:用到了jquery库 在文本编辑器VIM里直接开发
2. 前端开发语言:html,css,JavaScript
3. 后端环境:WAMP windows+apache+MySQL+PHP
4. 调试浏览器: Chrome  Firefox

### 二. 各个文件及文件夹的作用

#### 1. JuNet				       父文件夹

1. template			模板文件夹
2. index				首页文件夹
3. place				地点文件夹
4. mall				商城文件夹
5. easter_egg			彩蛋文件夹
6. activity			        活动文件夹
7. user center                    用户中心文件夹
8. README.md		        开发文档	

#### 2. index mall place activity     子文件夹

1. images				存放图片的文件夹
2. scripts			        存放JavaScript文件的文件夹
3. styles				存放css样式文件的文件夹

#### 3. images			        二级子文件夹

- 从psd从提取出来的图片 最好加一个标识名然后存放进来

#### 4. scripts				二级子文件夹

- x.js						x为页面名
- activity.js		                活动的js文件
- global.js			                全局的js文件	//一般作用于整个网页 存在template文件夹中
- jquery-3.2.1.min.js		//用于解析jquery库 存在template文件夹中

#### 5. styles					二级子文件夹

- color.css			        颜色样式		//尽量加入备注指明调了哪块的颜色
- font.css			                字体样式		//同上
- layout.css			        布局样式		//同上
- x.css				        x为页面名	//是上述三个css的集合

### 三. 浏览索引

#### 1. 首页

- 首页滚动图展示的是聚有面儿网站里带有的活动插图
- 点击地点 彩蛋 文创 公告栏 分别跳转地点页 彩蛋页 商城页 活动页

#### 2. 导航栏

- 点击聚有面儿的Logo可以直接跳转至首页
- 点击地点、活动 、彩蛋 、商城导航栏分别跳转地点页、活动页、彩蛋页和商城页
- 点击个人中心弹出登录注册窗口

#### 3. 地点页

- 目前支持北京市里的海淀区，朝阳区和西城区页面
- 点击收藏按钮，星星变亮，若已收藏，点击后星星变暗
- 地点页朝阳区中的红砖美术馆有三级页面，点击进入，其中有一个瀑布流布局

#### 4. 活动页

- 搜索框
- 小米今日未来馆可点开，进入三级页面

#### 5. 彩蛋页

- 点击西城区最左边的地标进入西城区地图
- 进入下一级地图后点击左侧的三个地标进入沙燕风筝版2048，点击右侧四个地标进入糖葫芦版见缝插针

#### 6. 商城页

- 分为三个部分，文创页，图片页，音乐页
- 文创页点击相应的图片会跳转至相应的淘宝购买链接
- 图片页起到一个图片的展示效果
- 音乐页有一个独立音乐播放按钮的内置音乐播放

### 四.开发日志

#### 2017.09.01

1. 把一开始的网页HTML的代码改的工整了一点  参考了一下一本叫锋利的jquery的网页实例
2. 用CSS给导航栏加了一个阴影
3. 加了一些备注
4. 在global.js中用jquery框架里的一个接口写了一个垂直居中函数 然后把导航栏调成了垂直居中

#### 2017.09.02

1. 将place.html基本实现
2. 问题主要在搜索下拉框样式的改变

#### 2017.09.03

1. 修改了文件夹整体储存框架
2. 将导航栏的黑色背景问题解决了

#### 2017.09.04

1. 将导航栏的黑色背景问题彻底解决，现在每次进入一个网页导航栏会维持已在此网页的提示
2. 将index.html基本实现 缺少滚动框图片的那部分内容与函数
3. 进行了字体的优化，字体优化作用于全局，在template/styles/font中加入了PingFangRegular 字体，并应用于index.html及各个页面的导航栏中

#### 2017.09.05

- 将place.html的下拉框样式做出了调整，place.html基本完成

#### 2017.09.11

1. 将导航栏和底部以及滚动图设成了与浏览器宽度一样大
2. 改变了导航栏的颜色与字体
3. 将活动修改成彩蛋
4. 学习了一点关于JS淡入淡出的效果
5. 用jquery应该可以实现看大图的效果。

#### 2017.09.12

1. 将导航栏与滚动图贴在了一起
2. 实现了点开大图的效果
3. 将商城图片mallPicture.html基本实现
4. 解决了导航版块中隔着小白线的bug
5. 现在鼠标移到购物车和个人中心的时候能正确地显示可点击了

#### 2017.09.14

1. 彩蛋页的导航栏之所以与其他页的导航栏不同，由于彩蛋页无右侧滚动条栏
2. 增加了placeHaidian.html和placeXicheng.html
3. 修改了一些文字排版的样式
4. 将底部版权栏完成
5. 遇到一个没有解决的问题:网页的内容大小与视觉稿的大小出现一些差别,如果调整chrome的缩放比例可以解决问题

#### 2017.09.16

1. 彩蛋页目前可以显示2048小游戏了
2. 活动页的小米图片可以正确地链接到小米详细的活动（三级页面）
3. 地点页的红砖美术馆可以正确链接到红砖美术馆的三级页面了
4. 首页的彩蛋目前会正确地显示了
5. 商城的图片页也能正确地显示了
6. 首页的滚动特效依旧没做出来

#### 2017.09.17

1. 在template/styles/layout.css里修改了所有页面的底色 为#F4F4F4（灰色）
2. 活动页面、地点三级页和活动三级页的地图全屏并对齐框。





