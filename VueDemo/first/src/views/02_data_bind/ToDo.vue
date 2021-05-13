<template>
<div>
      <header >
		<form action="javascript:postaction()" id="form">
				<label>TODO</label>
				<input type="text" id="title" name="title" 
				placeholder="添加待办" required="required" autocomplete="off"
                @keypress.enter="log" v-model="massage"/>
		</form>
	</header>
	<section>
		<h2 onclick="save()">正在进行<span id="todocount"></span></h2>
		<ol id="todolist" class="demoBox">
			<li v-for="(lis,index) in list" :key="lis">{{lis}}<span id="here" @click="sel(index)">X</span></li>
		</ol>
		<!-- <h2>Done <span id="donecount"></span></h2> -->
		<!-- <ul id="donelist"> -->
			<!-- <li></li> -->
		<!-- </ul> -->
	</section>
</div>

</template>

<script>
export default {
    data(){
        return{
            list:[
                '待处理',
                '随便吧',
                '搞定了',
            ],
			massage:'',
        }
    },
    methods: {
        log: function(){
			this.list.push(this.massage);
			this.massage = '';
            // li.creatElement("li");
        },
		sel: function(i){
			this.list.splice(i, 1);
		}
    }
}
</script>

<style>
    body {
			margin: 0;
			padding: 0;
			font-size: 1rem;
			background: skyblue;
		}
		header {
			height: 3.125rem;
			background: mediumpurple;
		}
		section {
			margin: 0 auto;
		}
		label {
			float: left;
			margin-left: 35%;
			margin-right: 10%;
			width: 100px;
			line-height: 50px;
			font-size: 24px;
		}
		header input {
			float: left;
			width: 10%;
			height: 24px;
			margin: 0 auto;
			margin-top: 12px;
			text-indent: 10px;
			border-radius: 5px;
			box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset;
			border: none;
		}
		input:focus{outline-width:0}
		h2 {
			position: relative;
		}
		#todocount {
			position: absolute;
			top: 2px;
			right: 5px;
			display: inline-block;
			padding: 0 5px;
			height: 20px;
			border-radius: 20px;
			background: deeppink;
			line-height: 22px;
			text-align: center;
			color: #666;
			font-size: 14px;
		}
        li {
            border: 1px solid pink;
        }
        #here {
            display: block;
            float: right;
            background-color: #fff;
        }
</style>