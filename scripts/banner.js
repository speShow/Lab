/*图片轮播效果*/
var banner=document.getElementById('banner');
var bannerPic=document.getElementById('banner_pic').getElementsByTagName('div');
var bannerPicLen=bannerPic.length;
var pot=document.getElementById('pot').getElementsByTagName('a');
var larr=document.getElementById('larr');
var rarr=document.getElementById('rarr');
var now=0;
//var objMove;
//默认
bannerPic[0].style.opacity="1";
pot[0].className="cur";
//点击圆点
for(var i=0;i<pot.length;i++){
	pot[i].index=i;
	pot[i].onclick=function(){
		//初始化所有
		for(var j=0;j<bannerPicLen;j++){
			pot[j].className="";
			bannerPic[j].style.opacity="0";
			bannerPic[j].style.transition="opacity 0.7s linear";
		}
		//当前单个设置
		this.className="cur"; 
		bannerPic[this.index].style.opacity="1";
		bannerPic[this.index].style.transition="opacity 0.7s linear";
		now=this.index;
	};
}
var objMove=function(){
	now=(now+1)%bannerPicLen;
	pic();
};
//点击右箭头
rarr.onclick=objMove;
//点击左箭头
larr.onclick=function(){
	if(now<1){now=bannerPicLen;}
	now=(now-1)%bannerPicLen;
	pic();
};
function pic(){
	//初始化所有
	for(var i=0;i<bannerPicLen;i++){
		pot[i].className="";
		bannerPic[i].style.opacity="0";
		bannerPic[i].style.transition="opacity 0.7s linear";
	}
	//当前单个设置
	pot[now].className="cur";
	bannerPic[now].style.opacity="1";
	bannerPic[now].style.transition="opacity 0.7s linear";
};

createTimer(banner,objMove);

/*定时*/
function createTimer(id,moveMqee){
	var timer=setInterval(moveMqee,3000);
	id.onmouseover=function(){
		clearInterval(timer);
	};
	id.onmouseout=function(){
		timer=setInterval(moveMqee,3000);
	};
}