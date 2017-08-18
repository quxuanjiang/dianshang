<template>
	 
	<div class="header">
		<input type="text" class="a as" placeholder="请输入关键字"/>
	</div>	
   

   
	
</template>

<script>

 export default{
	name:"header",
	data(){
		return{
         
		}
	}

}
</script>

<style>
 *{
 	margin: 0;
 	padding: 0;
 }
   .header{
   	width: 100%;
   	height: 0.8rem;
   	line-height: 0.2rem;
   	background-color:#d73435;
   	position: fixed;
   	top: 0;
   	left: 0;
   	text-align: center;
   	z-index: 10;
   }
  
   .a{
   	width:90%;
   	border: none;
   	padding-left: 0.4rem;
   	border-radius: 0.1rem;
   	height: 0.5rem;
   	color: #999;
   	font-size: 0.2rem;
   	background-color:white;
   background-image: url(../../assets/public_titlebar_search.png);
   background-repeat: no-repeat;
   background-position: 0.05rem;
   background-size: 0.3rem;
   }
   
   
</style>