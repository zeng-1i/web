function animate(obj, target, callBack) {
  // console.log(callBack);
  //当我们不断的点击按钮，这个元素的速度会越来越快，因为定时器开多了
  //解决方案就是在函数最上面清除一下定时器
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    //步长值写到定时器的里面
    //   var step = Math.ceil((target - obj.offsetLeft) / 10);
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      if (callBack) {
        callBack();
      }
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}
