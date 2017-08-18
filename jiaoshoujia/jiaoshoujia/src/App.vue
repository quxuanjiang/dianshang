<template>
  
  <div id="app">
       <router-view></router-view>
      <myheader></myheader>
      
  	   <myfoot></myfoot>
  	   
  </div>
</template>

<script>

 import myfoot from './components/footer'
 import myheader from './components/header'

 export default{
	data(){
		return{
      
		}
	},
	components:{
		myfoot,
		myheader

	}

}

</script>
<style>

.high{
 	background: yellowgreen;
 }
 
</style>
