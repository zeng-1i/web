# Vue.js 实战

分三个篇章，基础篇讲一些框架的基本语法，进阶篇讲了 vue-router 路由 vuex 状态管理，实战篇的插件封装以及文章和购物车。



先讲vue的一些基础语法：

Vue数据绑定，css class绑定

指令与事件

计算属性

内置指令，v-if v-show v-for 

方法事件绑定

表单与v-model

组件相关，props slot





# 一、Vue 安装使用

```
$ npm install vue-cli -g
$ vue init webpack my-project
```

npm/yarn 镜像设置

```shell
$ npm config set registry https://registry.npm.taobao.org
$ yarn config set registry https://registry.npm.taobao.org
```





# 二、指令与事件

## 2.1 指令与事件以及语法糖

v-bind 将data里面的变量绑定到dom节点的属性中，缩写为 `:`

v-on 将methods里的方法绑定到dom节点的事件上，也可以直接绑定表达式。缩写为 `@`



事件修饰符 .stop 阻止事件冒泡   .prevent 阻止事件原本的动作    .once 只触发一次  



## 2.2 style 和 class 的绑定

style 绑定的几种形式，自己来测试一下

class 绑定的几种形式，直接写在绑定 :class 中，或者抽离到 data 属性中。



## 2.3 vue常用内置指令

v-once 只渲染一次，变量变化后也不会变。

v-if  会直接把节点从dom树中移除     v-show 简单的 display: none 通过css来控制元素的隐藏和显示 

v-for  循环渲染 v-for="(item, index) in items"  v-for="(value, key, index) in users"

v-model  双向绑定，用于表单的6



渲染元素，处于性能考虑，会复用已有元素。不希望这样做，需要加key，告诉vue来重新渲染。



## 2.4 自定义指令

进阶内容，厉害了自己来学



## 2.5 计算属性 computed 

让你少写很多代码。

从 data 属性中计算出来的，但是可以当做 data 属性来用。

定义 computed 属性 	