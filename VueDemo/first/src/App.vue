<template>
  <div id="app">
    <div class="left">
      <h1 class="menu-title">左侧目录</h1>
      <div class="menu-list">
        <router-link class="menu-item" to="/">HelloName</router-link>
        <router-link class="menu-item" to="/life">Lifestyle</router-link>
        <router-link class="menu-item" to="/bind">DataBind</router-link>
      </div>
    </div>

    <div class="right">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  display: flex;
  min-height: 100vh;
}
.left {
  width: 360px;
  background-color: #66cccc;
  color: white;
  padding: 20px;
}
.menu-title {
  border-bottom: 5px solid white;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.menu-item {
  display: inline-block;
  height: 30px;
  width: 100%;
  line-height: 30px;
  color: white;
  text-decoration: none;
  font-size: 22px;
  text-align: left;
  padding-left: 40px;
  transition: all ease-in-out 1s;
}
.menu-item:hover {
  font-size: 30px;
  font-weight: bold;
  transition: all ease-in-out 1s;
}

.right {
  border: 10px gold solid;
  width: 100%;
  padding: 20px;
}
</style>

