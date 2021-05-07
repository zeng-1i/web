// rest 获取剩余所有的参数
// rest 展开数组或对象

function say(first, ...words) {
  console.log("first", first);
  for (let x in words) {
    console.log("第", Number(x) + 2, "个单词", words[x]);
  }
}

say("hello", "world", "javascript");

function sum(a, b, c, d) {
  return a + b + c + d;
}

// 展开数组
var numbers = [1, 2, 3, 4];
console.log(sum(...numbers));

// 展开对象
var obj = {
  first: "javascript",
  second: "php",
  third: "python",
};
var obj2 = {
  four: "c shapr",
  five: "c plus plus",
  six: "java",
};
obj = {
  ...obj,
  ...obj2,
};
console.log(obj);

//**************************************************
// 模板字符串
//**************************************************
var str = "sdfsdfds" + "sdfsdfsdfdsf";
var str2 = `
hello 
world
`;
var str3 = `${str2} javascript`;
var a = 4,
  b = 5;
console.log(str, str2);
console.log(str3);
console.log(`a + b = ${a + b}`);

//***********************************************
// class
//***********************************************
class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  print() {
    console.log(`Student name is ${this.name}, score is ${this.score}`);
  }
}

class Zengli extends Student {
  code() {
    for (let i = 0; i < 50; i++) {
      console.log(`第${i + 1}次，I must be genius`);
    }
  }
}
var student = new Student("曾力", 100);
student.print();

var zengli = new Zengli("曾力", 100);
zengli.code();

// Promise 封装
// 加载图片函数
function loadPic(id, src, sec) {
  return new Promise((resolve, reject) => {
    let oImg = new Image();
    oImg.onload = function () {
      resolve(oImg);
    };
    oImg.onerror = function () {
      reject(`编号为${id}的任务失败`);
    };
    // oImg.src = src;
    setTimeout(() => {
      oImg.src = src;
    }, sec); //延迟加载函数
  });
}
