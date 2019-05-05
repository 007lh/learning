//https://www.cnblogs.com/liugang-vip/p/5616484.html

window.onload = function(){
		    　　var oUl = document.getElementById("ul1");
		    　　oUl.onclick = function(ev){
		    	　　　　var ev = ev || window.event;
		   		　　　　var target = ev.target || ev.srcElement;
		        　　　　if(target.nodeName.toLowerCase() == 'li'){
		        　 　　　　　　	alert(123);
		　　　　　　　  alert(target.innerHTML);
				　　　　}
		    　　}
		}