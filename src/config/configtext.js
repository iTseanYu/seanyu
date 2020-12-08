export const textname= `/*
* 大家好，我是AYJCSGM。
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
* 后端开发
技术及语言
----
  - **Java**: SpringBoot、SpringCloud、SpringMVC、MyBatis、Shiro、Freemarker
工作经历
----
1. [北京江融信科技有限公司](http://www.jiangrongxin.com/)
开源项目
----
1. [基于SpringBoot + Semantic UI + JPA的个人博客](https://github.com/AYJCSGM/spring-boot-blog)
链接
----
* [技术博客](https://ayjcsgm.github.io/)
* [GitHub](https://github.com/AYJCSGM)
* [码云](https://gitee.com/ayjcsgm)
* [CSDN](https://blog.csdn.net/weixin_43664418)
* [开发笔记](https://github.com/AYJCSGM/AYJCSGM.github.io)

[归档文章](https://ayjcsgm.github.io/)
----


联系我
----
* 联系QQ：**1141341095** 
* 主要涉及技术：**Java后端开发**、**聚合支付**、**公众号开发**、**开源爱好者**、**Linux** 

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/AYJCSGM/resume)，打造你自己的简历！
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