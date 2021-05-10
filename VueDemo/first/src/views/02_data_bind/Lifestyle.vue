<template>
    <div>
        <h1 @click="back">返回上一页</h1>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Lifestyle',
    data () {
        return {
            list: []
        }
    },
   created: function () {
       this.list.push("生命周期 created")
   },
   mounted: function () {
       this.list.push("生命周期 mounted")
   },
   beforeDestory: function () {
       console.log("%c ��  �� 实例销毁了")
   },
   methods: {
       back: function () {
           this.$router.go(-1);
       }
   }
}
</script>

<style>

</style>