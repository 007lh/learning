//高宽度问题
    var winW=document.body.clientWidth||document.docuemntElement.clientWidth;//网页可见区域宽
    var winH=document.body.clientHeight||document.docuemntElement.clientHeight;//网页可见区域宽
    //以上为不包括边框的宽高，如果是offsetWidth或者offsetHeight的话包括边框
    
    var winWW=document.body.scrollWidth||document.docuemntElement.scrollWidth;//整个网页的宽
    var winHH=document.body.scrollHeight||document.docuemntElement.scrollHeight;//整个网页的高

    var scrollHeight=document.body.scrollTop||document.docuemntElement.scrollTop;//网页被卷去的高
    var scrollLeft=document.body.scrollLeft||document.docuemntElement.scrollLeft;//网页左卷的距离

    var screenH=window.screen.height;//屏幕分辨率的高
    var screenW=window.screen.width;//屏幕分辨率的宽
    var screenX=window.screenLeft;//浏览器窗口相对于屏幕的x坐标（除了FireFox）
    var screenXX=window.screenX;//FireFox相对于屏幕的X坐标
    var screenY=window.screenTop;//浏览器窗口相对于屏幕的y坐标（除了FireFox）
    var screenYY=window.screenY;//FireFox相对于屏幕的y坐标
	
//event
//event事件问题
    document.onclick=function(ev){//谷歌火狐的写法，IE9以上支持，往下不支持；
        var e=ev;
        console.log(e);
    }
    document.onclick=function(){//谷歌和IE支持，火狐不支持；
        var e=event;
        console.log(e);
    }
    document.onclick=function(ev){//兼容写法；
        var e=ev||window.event;
        var mouseX=e.clientX;//鼠标X轴的坐标
        var mouseY=e.clientY;//鼠标Y轴的坐标
    }
	
//阻止事件冒泡
//js阻止事件传播，这里使用click事件为例
    document.onclick=function(e){
        var e=e||window.event;
        if (e.stopPropagation) {
            e.stopPropagation();//W3C标准
        }else{
            e.cancelBubble=true;//IE....
        }
    }
	
	//js阻止默认事件
    document.onclick=function(e){
        var e=e||window.event;
        if (e.preventDefault) {
            e.preventDefault();//W3C标准
        }else{
            e.returnValue='false';//IE..
        }
    }
	
	//关于event事件中的target
    document.onmouseover=function(e){
        var e=e||window.event;
        var Target=e.target||e.srcElement;//获取target的兼容写法，后面的为IE
        var mouse_from=e.relatedTarget||e.formElement;//鼠标来的地方，同样后面的为IE...
        var mouse_to=e.relatedTarget||e.toElement;//鼠标去的地方
    }
	
	//鼠标滚轮事件
    //火狐中的滚轮事件
    document.addEventListener("DOMMouseScroll",function(event){
        alert(event.detail);//若前滚的话为 -3，后滚的话为 3
    },false)
    //非火狐中的滚轮事件
    document.onmousewheel=function(event){
        alert(event.detail);//前滚：120，后滚：-120
    }
	
	
//DOM节点相关，主要兼容IE 6 7 8
    function nextnode(obj){//获取下一个兄弟节点
        if (obj.nextElementSibling) {
            return obj.nextElementSibling;
        } else{
            return obj.nextSibling;
        };
    }
    function prenode(obj){//获取上一个兄弟节点
        if (obj.previousElementSibling) {
            return obj.previousElementSibling;
        } else{
            return obj.previousSibling;
        };
    }
    function firstnode(obj){//获取第一个子节点
        if (obj.firstElementChild) {
            return obj.firstElementChild;//非IE678支持
        } else{
            return obj.firstChild;//IE678支持
        };
    }
    function lastnode(obj){//获取最后一个子节点
        if (obj.lastElementChild) {
            return obj.lastElementChild;//非IE678支持
        } else{
            return obj.lastChild;//IE678支持
        };
    }
	
	
	
//通过类名获取元素
    document.getElementsByClassName('');//IE 6 7 8不支持；

    //这里可以定义一个函数来解决兼容问题，当然别在这给我提jQuery...
    //第一个为全局获取类名，第二个为局部获取类名
    function byClass1(oClass){//全局获取，oClass为你想要查找的类名，没有“.”
        var tags=document.all?document.all:document.getElementsByTagName('*');
        var arr=[];
        for (var i = 0; i < tags.length; i++) {
            var reg=new RegExp('\\b'+oClass+'\\b','g');
            if (reg.test(tags[i].className)) {
                arr.push(tags[i]);
            };
        };
        return arr;//注意返回的也是数组，包含你传入的class所有元素；
    }

    function byClass2(parentID,oClass){//局部获取类名，parentID为你传入的父级ID
        var parent=document.getElementById(parentID);
        var tags=parent.all?parent.all:parent.getElementsByTagName('*');
        var arr=[];
        for (var i = 0; i < tags.length; i++) {
        var reg=new RegExp('\\b'+oClass+'\\b','g');
            if (reg.test(tags[i].className)) {
                arr.push(tags[i]);
            };
        };
        return arr;//注意返回的也是数组，包含你传入的class所有元素；
     }
	
	//设置监听事件
     function addEvent(obj,type,fn){//添加事件监听，三个参数分别为 对象、事件类型、事件处理函数，默认为false
        if (obj.addEventListener) {
            obj.addEventListener(type,fn,false);//非IE
        } else{
            obj.attachEvent('on'+type,fn);//ie,这里已经加上on，传参的时候注意不要重复加了
        };
    }
    function removeEvent(obj,type,fn){//删除事件监听
        if (obj.removeEventListener) {
            obj.removeEventListener(type,fn,false);//非IE
        } else{
            obj.detachEvent('on'+type,fn);//ie，这里已经加上on，传参的时候注意不要重复加了
        };
    }