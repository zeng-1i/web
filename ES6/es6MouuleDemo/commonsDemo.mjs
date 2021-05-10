// var example = require("./demo");
import { joint, fn } from "./demo.mjs";
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
console.log(joint(a, b, c));
console.log(joint(x, y, z, m));
console.log(fn(qqq));
