<template>
  <div id="app">
    <div class="left">
      <h1 class="menu-title">Demo Menu</h1>
      <p id="nav">导航</p>
      <div class="menu-list">
        <router-link class="menu-item" to="/">HelloName</router-link>
        <router-link class="menu-item" to="/life">Lifestyle</router-link>
        <router-link class="menu-item" to="/bind">DataBind</router-link>
        <router-link class="menu-item" to="/directives">directives</router-link>
        <router-link class="menu-item" to="/InstructionsAndEvents">InstructionsAndEvents</router-link>
        <router-link class="menu-item" to="/ShoppingCart">ShoppingCart</router-link>
        <router-link class="menu-item" to="/ToDo">ToDo</router-link>
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
  padding: 0;
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
  position: absolute;
  top: 0;
  width: 20%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px black inset;
  transition: all ease-in-out 1s;
  /* z-index: 100; */
  overflow: hidden;
  padding: 20px;
}
.menu-title {
  text-align: center;
  line-height: 70px;
  font-size: 28px;
  font-weight: 700;
  color: rgb(109, 97, 234);
  letter-spacing: 0.05em;
  border-bottom: 5px solid white;
}

#nav {
  padding: 10px 10px !important;
  letter-spacing: 0.05em;
  font-size: 14px;
  color: #5a5454;
  font-weight: 700;
}
*, ::after, ::before {
    box-sizing: border-box;
}

.menu-item {
  display: block;
  height: 30px;
  width: 80%;
  line-height: 30px;
  color: rgb(90, 84, 84);
  text-decoration: none;
  font-size: 18px;
  text-align: left;
  padding: 12px 15px 12px 25px !important;
  transition: all ease-in-out 1s;
}
.menu-item:hover {
  font-weight: bold;
  transition: all ease-in-out 1s;
}

.right {
  border: 10px gold solid;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: hidden;
}
</style>

