<template>
  <div>
      <div id="app1">
          姓名：{{fullName}}
          总价：{{prices}}
      </div>
      <div id="app2">
          {{reversedText}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            firstName: 'Jack',
            lastName: 'Green',
            text: '123,456',
            package1: [{
                name: 'iphone7',
                price: 7199,
                count: 2
            },
            {
                name: 'iPad',
                price:2888,
                count: 1
                }],
            package2: [{
                name: 'apple',
                price: 3,
                count: 5
            },
            {
                name: 'banana',
                price:2,
                count: 10
                }],
        }
    },
    computed: {
        prices: function(){
        var prices = 0;
        for(var i = 0; i < this.package1.length; i++){
            prices += this.package1[i].price * this.package1[i].count;
        }
        for(var i = 0; i < this.package2.length; i++){
            prices += this.package2[i].price * this.package2[i].count;
        }
        return prices;
        },
        fullName: {
            get: function(){
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newValue){
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        },
        reversedText: function(){
            return this.text.split(',').reverse().join(',');
        }
    }
}
</script>

<style>
    
</style>