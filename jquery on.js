//$(selector).on(event,childSelector,data,function)
//提示：如需移除事件处理程序，请使用 off() 方法。
//提示：如需添加只运行一次的事件然后移除，请使用 one() 方法。

//实列：简单jQuery：请写出代码，ul标签下面有1000个li，写一个性能最高的方式实现，在点击li后，输出li的内容
$(“ul”).on(“click”,”li”,function(){

$(this).html(“hit”);

})