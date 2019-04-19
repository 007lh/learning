/*
html:
<div class="comm-topact" id="t"></div>

css:
.comm-topact {
    width: 230px;
    height: 30px;
    position: relative;
    background: yellow;
    opacity: 1;
    transition: opacity 6s;
}
*/


//js:
var t=document.getElementById("t");
t.onclick=function(){
    document.getElementById("t").style.opacity = 0.1;
  }
//使用obj.style.属性名，可产生过度效果，其他事件同理；
//注意：元素本身为display：none 时，若此时我们想通过js先将其变为display:block 
//并且随后再触发其他想要的transition过渡效果，需要在 js改变其为display:block 
//后用setTimeout延迟100ms左右的时间再去设置其他过渡动画，否则该过渡动画不会触发。
 