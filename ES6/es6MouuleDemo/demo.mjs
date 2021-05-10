export function joint(...a) {
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

export function fn(es) {
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

// module.exports = {
//   joint,
//   fn,
// };
