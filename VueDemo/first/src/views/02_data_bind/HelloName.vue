<template>
    <div class="container">
        <h1 class="top">这是第一个组件</h1>
        <input type="text" v-model="name" placeholder="您的名字" />
        <h1>您好， {{ name }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HelloName',
    data() {
        return {
            name: ''
        }
    }
}
</script>

<style>
    .container {
        padding: 20px;
    }
    .top {
        margin-bottom: 50px;
    }
</style>