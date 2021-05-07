// npm install --save axios
// Callback Hell http://callbackhell.com/
var axios = "hello";
var { get } = require("axios");

const axiosModule = require("axios");
get("https://jsonplaceholder.typicode.com/users")
  .then(({ data }) => {
    console.log(data.length);
    return "hello";
  })
  .then((value) => {
    console.log(value);
    return axiosModule.get("https://jsonplaceholder.typicode.com/users");
  })
  .then(({ data }) => {
    console.log("有一次请求", data.length);
  })
  .catch((error) => {
    console.log("报错了", error);
  });
