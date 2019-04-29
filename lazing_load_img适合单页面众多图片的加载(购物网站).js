//lazing loading img
function loading($img){  //把属性data-src（真实文件路径，ps:  src放入的时分辨率较小的图片，且只要进行一次http请求）放入src里面
	$img.attr('src',$img.attr('data-src'));
	//图片转化，设置data-isloaded属性为1
	$img.attr('data-isloaded',1)
}

function isShow($node){
	//window == $(window)[0] jquery 把window对象放在数组的第一个	
	return $node.offset().top <= window.screen.availHeight  + $(window).scrollTop() ;
}


function start(){
	
	$('.partycontent-item img').not('[data-isloaded]').each(function(){
		var $node = $(this);
		if(isShow($node)){
			loading($node);
		}
	})
}

start(); //刚打开页面，滚动条没动时显示页面的图片	
$(window).on('scroll',function(){
	console.log(111);
	start();
});