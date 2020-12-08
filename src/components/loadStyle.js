/**
 * 根据传入对象的字符串渲染到元素上
 * @param {*} options 
 */
  export function loadStyle(options={
      code:'', //渲染的元素字符串
      divid:'',//目标元素的domid
      increasing:false//是否增量渲染
  }){
    let divdom=document.querySelector('#'+options.divid)
    let divstyle=document.querySelector('#'+options.divid+'_style')
    let divhtml=options.increasing?divdom.innerText:''
    let num=0
    return new Promise((resolve,reject) => {
        let time=setInterval(()=>{
            if(num>=options.code.length){
                clearInterval(time)
                resolve()
            }
            num+=1
            divdom.innerHTML=Prism.highlight(divhtml, Prism.languages.css)+Prism.highlight(options.code.substring(0,num), Prism.languages.css);
            divdom.scrollTop=divdom.scrollHeight;
            divstyle&& (divstyle.innerText =divhtml+ options.code.slice(0,num))     
        },1)
       
    })
  }
  /**
   * 加载markerdown
   * @param {*} options 
   */
  export function loadMarkdown(options={
    code:'',
    divid:''
}){
  return new Promise((resolve,reject) => {
    let divdom=document.querySelector('#'+options.divid)
    divdom.innerHTML = marked(options.code);
  })
}
 
  