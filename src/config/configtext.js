export const textname= `/*
* 大家好，我是SeanYu。
* 下面我来简单介绍一下我自己。
* 但是文字介绍过于单调。
* 今天，来点不一样的。
* 来做一个动态简历。
*/

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#resume_code{
  border: 1px solid #aaa;
  padding: 3%;
}

/* 这样太单调了，给代码来点颜色 */
.token.punctuation {
  color: #999;
}
.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}

/* 在加上动态阴影吧 */
#resume_code{
  animation: glow 800ms ease-out infinite alternate;
}
#resume{
  transform: skewY(1deg);
}


/* 现在正式开始 */




/* 于是我就可以在白纸上写字了，请看右边 */

`;
export const markdowntext= `# 自我介绍

SeanYu
----
27岁，前端开发工程师，五年前端从业经验，目前在北京工作。
<br/>

技能
----
* 了解数据可视化技术，熟悉highcharts、echarts等前端可视化技术。
* 了解W3C标准，熟练使用HTML、ES6、CSS、JavaScript、Ajax、DOM等前端技术。
* 熟练响应式布局、弹性盒布局、flex、 rem，能使用ElementUI、Vant 等UI组件库进行页面制作。
* 熟练使用Vue+Vuex+Vue Router+axios进行组件化开发。
* 熟悉主流的前端构建工具，熟练使用Git，熟练使用禅道掌握项目开发流程。
* 理解MVC&MMVM设计模式对表现与数据分离、熟悉Web语义化等有深刻理解。
* 熟悉OGC标准，有开源WebGIS平台开发经验，熟悉ArcGIS API、百度地图API。

工作经历
----
1. 2016~2017 [北京地林伟业科技有限公司](http://www.forestar.com.cn/)
2. 2017~2019 [北京理正软件股份有限公司]https://www.lizheng.com.cn/)
3. 2019~2020 [跨越速运集团有限公司](https://www.ky-express.com/)
开源项目
----
1. [动态简历](https://github.com/iTseanYu/seanyug)
链接
----
* [GitHub](https://github.com/iTseanYu)
* [CSDN](https://blog.csdn.net/weixin_45111619?spm=1010.2135.3001.5113)
----
联系我
----
* 联系QQ：**** 

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/iTseanYu/seanyu)，打造你自己的简历！
`
export const markdowntitle= `
/* 由于使用的是Mmarkdown格式 */
/* 需要转换为Html */

/*
* 接下来使用一个优秀的库
* 将我们的Mmarkdown转换为Html
*/
`
export const  endtext=`
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`