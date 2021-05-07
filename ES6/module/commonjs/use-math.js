var math = require("./math");

console.log(math.sum(4, 4));
console.log(math.multiple(4, 4));

var { sum, multiple } = require("./math");
console.log(sum(5, 5));
console.log(multiple(5, 5));
