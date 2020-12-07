import {textname,markdowntext,markdowntitle,endtext} from "./config/configtext.js"
import {loadStyle,loadMarkdown} from "./components/loadStyle.js"
let draw={
  code:textname,
  divid:'resume_code'
}
loadStyle(draw)
.then(()=>{
  let options={
    code:markdowntext,
    divid:'markerdomn_code'
  }
  loadStyle(options)
  .then(()=>{
    let options={
      code:markdowntitle,
      divid:'resume_code',
      increasing:true
    }
    loadStyle(options)
    .then(()=>{
      let options={
        code:markdowntext,
        divid:'markerdomn_code'
      }
      loadMarkdown(options)
    }).then(()=>{
      let options={
        code:endtext,
        divid:'resume_code',
        increasing:true
      }
      loadStyle(options)
    })
  })
})


















var text4=`
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

/**********************************执行代码区*****************************************/
// writeLeft(()=>{
//   qx(()=>{
//       createPaper(()=>{
//       writeRight(()=>{
//         mdHtml(()=>{
//           md(()=>{
//             end()
//           })
//         })
//       })
//     })
//   })
// })




/**********************************函数区*****************************************/
/**********************************把text1的代码添加到左边区域和style标签中*****************************************/
function writeLeft(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let n=0;
  let intervalId1=setInterval(function(){
    code.innerHTML=Prism.highlight(text1.substring(0,n), Prism.languages.css);
    styleTag.innerHTML=text1.substring(0,n);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text1.length){
      window.clearInterval(intervalId1);
      fn();
    }
  },10)
}

/***********************************开始在右边创建一个空白纸用来写markdown******************************************/
function createPaper(fn){
  let paper=document.createElement('div');
  paper.id='paper';
  let paperPre=document.createElement('pre');
  paperPre.className='content';
  paper.appendChild(paperPre);
  document.body.appendChild(paper);
  fn();
}

/**********************************把text2的代码添加到右边区域中*****************************************/
function writeRight(fn){
  let n1=0;
  let intervalId2=setInterval(function(){
    let rightCode=document.querySelector('#paper>.content');
    rightCode.innerHTML=text2.substring(0,n1);
    rightCode.scrollTop=rightCode.scrollHeight;
    n1 += 1
    if(n1>=text2.length){
      window.clearInterval(intervalId2);
      fn();
    }
  },10)
}

/**********************************将左边倾斜*****************************************/
function qx(fn){
  let code=`#left{transform:skewY(1deg);}`;
  let pre=styleTag.innerHTML;
  styleTag.innerHTML=pre+code;
  fn();
}

/**********************************把text3的代码添加到左边区域中*****************************************/
function mdHtml(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let prefix=code.innerHTML
  let n=0;
  let intervalId3=setInterval(function(){
    code.innerHTML=prefix+Prism.highlight(text3.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text3.length){
      window.clearInterval(intervalId3);
      fn();
    }
  },10)
}

/**********************************把markdown转换为html*****************************************/
function md(fn){
  let div = document.createElement('div');
  div.className = 'html markdown-body content';
  div.innerHTML = marked(text2);
  let markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  fn();
}

/**********************************结束语*****************************************/
function end(){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let pre=code.innerHTML
  let n=0;
  let intervalId4=setInterval(function(){
    code.innerHTML=pre+Prism.highlight(text4.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text4.length){
      window.clearInterval(intervalId4);
    }
  },10)
}



