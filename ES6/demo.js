var a = ["php", "java", "python"];
var b = ["html", "css", "javascript"];
var c = ["linux", "mysql", "mongodb"];

var x = [1, 2, 3, 4, 5],
  y = [7, 84, 23],
  z = [12, 0],
  m = [];

var qqq = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
function joint(...a) {
  let es = [...a];
  //   let es6 = es.flat();
  let es6 = [];
  for (let i = 0; i < es.length; i++) {
    for (let j = 0; j < es[i].length; j++) {
      es6.push(es[i][j]);
    }
  }
  return es6;
}

function fn(es) {
  let fn = [];
  for (let i = 0; i < es.length; i++) {
    for (let j = 0; j < es[i].length; j++) {
      fn.push(es[i][j]);
    }
  }
  return fn;
}
// console.log(joint(a, b, c));
// console.log(joint(x, y, z, m));
// console.log(fn(qqq));

module.exports = {
  joint,
  fn,
};
