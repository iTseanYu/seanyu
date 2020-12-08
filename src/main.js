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



