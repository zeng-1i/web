$(function () {
  //1、按下回车 把完整数据存储到本地存储里面
  //存储的数据格式 var todolist = [{title:"xxx",done:false}]
  $("#title").on("keydown", function (event) {
    if (event.keyCode === 13) {
      //先读取原来本地存储的数据
      var local = getDate();
      console.log(local);
      //把local数组更新数据 把最新的数据追加给local数组
      local.push({ title: $(this).val(), done: false });
      //把local数组存储到本地
      savaDate(local);
    }
  });

  //读取本地原来存储的数据
  function getDate() {
    var data = localStorage.getItem("todolist");
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  //保存本地存储数据
  function savaDate(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
  }
});
