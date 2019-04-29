// 延缓执行

//如若再延缓时间wait内触发，将重新计时
function debounce(func, wait) {
  var timeout;

  return function() {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}


// 立即执行
function debounce(func, wait) {
  var timeout;

  return function() {
    var context = this;
    var args = arguments;
    //clearTimeout清除的是执行内容，不清除setTimeout的id;
    if (timeout) clearTimeout(timeout);

    var callNow = !timeout;
	//settimeout的返回值是对应定时器的id值即下面的timeout,
    timeout = setTimeout(function() {
      timeout = null;
    }, wait);

    if (callNow) func.apply(context, args);
  };
}