// 时间戳
function throttle(func, wait) {
  var previous = 0;

  return function() {
    var now = Date.now();
    var context = this;
    var args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}
// 定时器
function throttle(func, wait) {
  var timeout;

  return function() {
    var context = this;
    var args = arguments;
    if (!timeout) {
      timeout = setTimeout(function() {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}