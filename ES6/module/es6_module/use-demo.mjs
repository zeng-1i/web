import hello from './demo_module.mjs' ; 
import {a as renameA , A , b, default as d}from './demo_module.mjs' ; 
import * as module2 from './demo_module.mjs';

console.log(hello);
console.log(renameA, A, b, d);
console.log(module2);