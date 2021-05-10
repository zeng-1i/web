<template>
  <div>
      {{ book }}
    <p>
      {{ date }} 
    </p>
    <p>
        {{ link }}
    </p>
    <p v-html="link">

    </p>
    <p v-pre>
        {{ link }}
    </p>
    <hr>
    {{ number / 10 }}
    {{ isOK ? '确定' : '取消' }}
    {{ text.split(",").reverse().join(",") }}

    <hr>

    <div>
        {{ date | formatDate }}
    </div>
  </div>
</template>

<script>
        var padDate= function(value){
            return value <10 ? '0' + value : value;
        }

export default {
    data() {
        return {
            book: '《Vue.js实战》',
            date:new Date(),
            link:'<a href="#">这是一个链接</a>',

            number: 100,
            isOK: false,
            text: '123,456',
        }
    },
    mounted: function(){
        this.timer=setInterval(() => {
            this.date=new Date()
        }, 1000);
    },
    filters: {
        formatDate: function(value){
            var date = new Date(value);
            var year = date.getFullYear();
            var month = padDate(date.getMonth() + 1);
            var day = padDate(date.getDate())
            var hours = padDate(date.getHours())
            var minutes = padDate(date.getMinutes())
            var seconds = padDate(date.getSeconds())

             return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
            // return year + '-' + month + '-' + day + ' ' + hours + ':' + minu 
        }
    },
    methods: {


    }
}
</script>

<style>

</style>