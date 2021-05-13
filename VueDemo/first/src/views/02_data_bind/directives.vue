.<template>
  <div id="app1">
      <p v-if="show">这是一段文本</p>
      <img v-bind:src="imgUrl">
      <button v-on:click="show = false">点击隐藏文字</button>
      <button v-on:click="show = true">点击显示文字</button>
      <br>
      <a v-bind:href="url">github</a>
      <a href="false">url</a>

      <div 
        class="animation" v-bind:style="{ 'fontSize': fontSize + 'px' }" 
        v-on:click="changeFontSize">
          😍🎂🎂🎂
      </div>
      <div 
        class="animation" :style="{ 'fontSize': fontSize + 'px' }" 
        @click="changeFontSize">
          🤦‍♀️😉🌹💋
      </div>
        <h1>内置指令</h1>
      <div v-if="false">v-if</div>
      <div v-show="false">v-show</div>

        <h1>测试事件修饰符</h1>
      <a href="https://bing.com" @click.prevent="log">点我哈哈</a>
      <input class="haha" @keypress.enter="log">监听回车事件
  </div>
</template>

<script>

export default {
    data() {
        return{
            show: true,
            url: 'https://www.github.com',
            imgUrl: 'https://seopic.699pic.com/photo/40011/0709.jpg_wh1200.jpg',
            fontSize: 16,
        }
    },
    
    methods: {
        handleClose: function(){
            this.show = false;
        },
        changeFontSize: function () {
            this.fontSize++;
        },
        log: function () {
            console.log('点击成功')
        } 
    }        
}

</script>

<style>
    #app1{
        display: block;
    }

    .animation {
        margin-top: 20px;
        border: 10px pink solid;
        padding: 40px;
    }
</style>