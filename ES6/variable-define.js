// 作用域
{
  let var_a = 123;
  var var_b = 235;
  const var_c = 556;
}

// console.log(var_a);  // ReferenceError: var_a is not defined
console.log(var_b);
// console.log(var_c); // ReferenceError: var_c is not defined

// 变量提升
// console.log(top_a); // ReferenceError: Cannot access 'top_a' before initialization
console.log(top_b);
let top_a = "top_a";
var top_b = "top_b";

// global 全部变量 属性
global.aaa = "aaa";
console.log(aaa);
