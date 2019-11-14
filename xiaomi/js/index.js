	// 页头点击效果
	var otabs = document.getElementById('tabs').getElementsByTagName("li");
	var lists = document.getElementById("list").getElementsByTagName("ul");
	for(var i = 0; i < otabs.length; i++){
		otabs[i].onclick = showlist;
	}
	



	function showlist(){
		for(var i = 0; i < otabs.length; i++){
			if(otabs[i] === this){
				otabs[i].className = "active";
				lists[i].className = "active";
			}else{
				otabs[i].className = "";
				lists[i].className = "clearfix";
			}
		}
	}
	//滚动仍然固定位置
	var seckillNav = document.getElementById("seckillNav");
	window.onscroll = function (){
		var scrollTop = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||0;
		if(scrollTop >= 260){
			seckillNav.className = "seckill-nav seckill-navfixed";
		}else{
			seckillNav.className = "seckill-nav";
		}
	}
	
	
