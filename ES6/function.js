// 函数定义
var fn = function () {};
function show() {
  console.log("call show function");
}

function delay(fn, seconds) {
  setTimeout(fn, seconds * 1000);
}
// delay(show, 5);

var arrow = () => {
  console.log("arrow called");
};
var arrow_one = (one) => {
  console.log("parameter is ", one);
};
arrow();
arrow_one("first");

var sum = (x, y) => x + y;
console.log(sum(5, 8));

const add = (a) => (b) => a + b;
