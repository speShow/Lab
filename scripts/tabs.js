/*选项卡切换*/
var tabs=document.getElementById('tabs').getElementsByTagName('li');
var tabsCont=document.getElementsByClassName('box3_cont');
//默认
//tabs[0].className+=" cur";
tabs[0].style.color="#797979";
tabs[0].style.background="#f4f4f4";
tabs[0].style.cursor="default";
tabsCont[0].style.display="block";
// for(var i=0;i<tabs.length;i++){
//   	tabs[i].onmouseover=function(){
// 	  	for(var j=0;j<tabs.length;j++){
// 	  		tabs[j].style.color="#fff";
// 			tabs[j].style.background="#6f6f6f";
// 	  	}
// 		this.style.color="#797979";
// 		this.style.background="#f4f4f4";
// 		this.style.cursor="pointer";
//   	};
// }
for(var i=0;i<tabs.length;i++){
	tabs[i].index = i;
	tabs[i].onclick = function(){
		//初始化所有
		for(var j=0;j<tabs.length;j++){
		  	// tabs[j].className=;
			tabs[j].style.color="#fff";
			tabs[j].style.background="#6f6f6f";
			tabs[j].style.cursor="pointer";
			tabsCont[j].style.display="none";
		}
		//当前单个设置
		//this.className+=" cur"; 
		this.style.color="#797979";
		this.style.background="#f4f4f4";
		this.style.cursor="default";
		tabsCont[this.index].style.display="block";
		
	};
}