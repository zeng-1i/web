// 数组的结构
let [a, b, c] = [3, 6, 8];
console.log(a, b, c);

let [x = 3, y = 5] = [1];
let [m, ...n] = [34, 67, 98, 0];
console.log(x, y);
console.log(m, n);
// 对象的解构

let { bar, foo } = { foo: "aaa", bar: "bbb" };
let { p: foo1, q: bar1 } = { p: 42, q: true };
let { z = 10, c1 = 5 } = { z: 3 };
let { hard, ...mor } = { hard: "qqq", mor: "www", great: "eee" };
console.log(bar, foo);
console.log(foo1, bar1);
console.log(z, c1);
console.log(hard, mor);

var l = 1;
function f1() {
  console.log(l);
  var b = 2;
  var b2 = 44;
  var b3 = 55;
  return function f2() {
    return {
      b,
    };
  };
}
var obj = f1()();
console.log(obj);
