<template>
	<div class="ss">
	<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../static/0df431adcbef7609986d36d429dda3cc7cd99e13[1].jpg" class="img"></div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    <div class="dl">
    	<a>
    		<p><img src="../../../static/icon_chaxun.png"></p>
    	    <p class="s3">活动促销</p>  
    	</a>
    	<a>
    		<p><img src="../../../static/icon_cuxiao.png"></p>
    	    <p class="s3">我要定制</p>   
    	</a>
    	<a>
    		<p><img src="../../../static/icon_dingzhi.png"></p>
    	    <p class="s3">预约中心</p>  
    	</a>
    	<a>
    		<p><img src="../../../static/icon_ingyue.png"></p>
    	    <p class="s3">订单查询</p>  
    	</a>
    </div>
    <div class="a2">
    	<img src="../../../static/crazy_purchase_top_icon.9.png">
    	<img src="../../../static/flash_sale_top_icon.9.png">
    </div>
    <div class="a3">
    	<dl class="te3">
    		<dt>
    			<p>限时抢购</p>
    			<p class="s">秒杀</p>
    		</dt>
    		<dd><p><img src="../../../static/troop_default_head.png">
    		</p><p class="j">家具城</p></dd>
    	</dl>
    	<dl>
    		<dt><p>特价商品</p>
    			<p class="r">快来抢购吧！</p>
    			<p class="r">机会不容错过！</p>
    		</dt>
    		<dd>
    			<span><img src="../../../static/playstore_im.png"></span>
    			
    		</dd>
    	</dl> 	
    </div>
    <div class="a3">
    	<dl>
    		<dt><p class="s">310</p>
    			<p class="s2">372</p>
    		</dt>
    		<dd><img src="../../../static/shop_logo.png"></dd>
    	</dl>
    	<dl>
    		<dt><p>热卖商品</p>
    			<p class="r">快来抢购吧！</p>
    			<p class="r">机会不容错过！</p>
    		</dt>
    		<dd>
    			<span><img src="../../../static/playstore_im.png"></span>
    			
    		</dd>
    	</dl> 	
    </div>
   </div>
    
</template>
<script>

 export default{
	name:"",
	data(){
		return{

		}
	}

}
 
</script>
<style>
.a3{
	margin-left: 2.5%;
}
.s3{
	text-align: center;
}
.s2{
	text-decoration: line-through;
	color: #999999;
}
.r{
	font-weight: normal;
	margin-top: 0.03rem;
	color: #999;
}
.j{
	text-align: center;
}
.ss{
	width: 100%;
	height: 80%;
	margin-top: 0.8rem;
	overflow: auto;
}
   /*html, body {
        position: relative;
        height: 100%;
    }*/
	 .swiper-container {
        width: 100%;
        height: 4rem;
       /*margin-top: -9.3rem;*/
    }
   
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
         Center slide text vertically 
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-wrapper .img{
    	width: 100%;
    	height: 4rem;
    }
    .a2{
    	width: 100%;
    	height: 1.2rem;
    	margin-top: 0.1rem;
    	display: flex;
    }
    .a2 img{
    	width:46%;
    	height: 1rem;
    	margin-left: 2.5%;
    }
    .a3 dl{
    	width: 48.1%;
    	height: 1.5rem;
    	display: flex;
    	font-size: 0.1rem;
    	border: 1px solid #ccc;
    }
    .a3 dd{
    	float: left;
    	margin-top: 0.1rem;
    }
    .a3 dt{
    	margin-top: 0.1rem;
    	font-size: 0.25rem;
    	font-weight: bold;
    	width: 1.5rem;
    	float: left;
        margin-left: 4%;
    
    }
    .a3 img{
    	width:1rem;
    	height: 1rem;	
    }
    .a3{
    	display: flex;
    }
    .s{
    	margin-top: 0.2rem;
    	color: red;
    	font-weight: bold;
    }
  
    .te2{
    	margin-top: 0.3rem;
    }
    .te3{
    	border-right: none;
    }
    .dl{
    	width: 100%;
    	height: 1.5rem;
    	display: flex;
    	justify-content: space-around;
    	flex-direction: row;
    	align-items: center;
    	font-size: 0.1rem;
    }
    .dl img{
    	width: 1.1rem;
    	height: 1.1rem;
    }
    .dl a{
    	display: block;
    	
    }
</style>