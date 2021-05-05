window.addEventListener("load", function () {
  var preview_img = document.querySelector(".preview_img");
  var mask = document.querySelector(".mask");
  var big = document.querySelector(".big");

  //1、当我们鼠标经过preview_img 就显示和隐藏mask遮挡层和big大盒子
  preview_img.addEventListener("mouseover", function () {
    mask.style.display = "block";
    big.style.display = "block";
  });
  preview_img.addEventListener("mouseout", function () {
    mask.style.display = "none";
    big.style.display = "none";
  });
  //2、鼠标移动的时候，让黄色的盒子跟着鼠标走
  preview_img.addEventListener("mousemove", function (e) {
    //1、先计算出鼠标在盒子内的坐标
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    //2、减去盒子高度 300的一半 就是我们mask的最终left和top值
    //3、我们mask移动的距离
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    //4、如果x坐标小于0 就让他停在0坐标
    //遮挡层的最大移动距离
    var maskMax = preview_img.offsetWidth - mask.offsetWidth;
    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= maskMax) {
      maskX = maskMax;
    }
    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= maskMax) {
      maskY = maskMax;
    }
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";

    //大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
    //获取大图元素
    var bigIMG = document.querySelector(".bigImg");
    //计算大图的最大移动距离
    var bigMax = bigIMG.offsetWidth - big.offsetWidth;
    //大图片的移动距离
    var bigX = (maskX * bigMax) / maskMax;
    var bigY = (maskY * bigMax) / maskMax;
    bigIMG.style.left = -bigX + "px";
    bigIMG.style.top = -bigY + "px";
  });
});
