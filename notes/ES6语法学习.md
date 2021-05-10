# 资料参考



ES6语法 https://www.jianshu.com/p/d23a506cdca2

ES6语法重点整理 https://zhuanlan.zhihu.com/p/30400262



npm/yarn 镜像设置

```shell
$ npm config set registry https://registry.npm.taobao.org
$ yarn config set registry https://registry.npm.taobao.org
```









# 一、变量声明  var ，let ， const 的区别





不存在变量提升

不允许重复声明

作用域



# 二、变量的解构

【ES6系列】变量的解构赋值 https://segmentfault.com/a/1190000014824986

```js
let [a, b, c] = [1, 2, 3];
let [a=5, b=7] = [1];
let [a, ...b] = [1, 2, 3];

let { bar, foo } = { foo: "aaa", bar: "bbb" };
let { p: foo, q: bar } = { p: 42, q: true };
let {a = 10, b = 5} = {a: 3};
// ...var 解构对象剩余的属性
```





# 三、箭头函数 

关于箭头函数的嵌套 https://blog.csdn.net/qq_24147051/article/details/100888958



```
const add = a => {
    return function (a) {
        return a + b
    }
}
const add_curr = a => b => a + b;

add(1)(2)
```



# 四、模板字符串





# 五、Promise 



# 六、模块导入导出



## 6.1 commonjs 模块

CommonJS规范 https://javascript.ruanyifeng.com/nodejs/module.html



## 6.2 es6 module 模块

ES6 Module 语法学习总结 https://juejin.cn/post/6844903993462751239



```js
export const a = 5;
export class A {}
export function b() {}
const c = 'my export name is default';
export default c; // 将 c 重命名为 default




import default_var from './module'
import { a as renameA, A, b, default as d } from './module'; 
import * as module2 from './module2';  // 到处全部命名为一个变量 

```

