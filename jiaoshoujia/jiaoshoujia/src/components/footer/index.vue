<template>
   
	<div id="footer">
		<router-link to="/lunbo" tag="dl">
			<dt><img src="../../../static/footer_home_icon.png"></dt>
			<dd>首页</dd>
		</router-link>
		<router-link to="/fenlei" tag="dl">
			<dt><img src="../../../static/footer_category_icon.png"></dt>
			<dd>商品</dd>
		</router-link>
		<router-link to="/gouwu" tag="dl">
			<dt><img src="../../../static/footer_shoppingcart_icon.png"></dt>
			<dd>购物车</dd>
		</router-link>
		<router-link to="/about" tag="dl">
			<dt><img src="../../../static/footer_user_icon.png"></dt>
			<dd>个人中心</dd></router-link>

	</div>
</template>
<script>
	export default {
		name: "footer",
		data() {
			return {

			}
		}

	}
</script>

<style>
	#footer {
		width: 100%;
		height: 1rem;
		background: white;
		border:1px solid #CCCCCC;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		align-items: center;
		font-size: 0.1rem;
		text-align: center;
	}
	
	#footer img{
		width: 0.4rem;
		height: 0.4rem;
	}
	
</style>