/*个人名片轮播效果*/
var box3_right=document.getElementById('box3_right');
var personList=document.getElementById('personList').getElementsByTagName('li');
var personListLen=personList.length;
var left_arr=document.getElementById('left_arr');
var right_arr=document.getElementById('right_arr');
var a=0;
//默认
personList[0].style.display="block";
var personalMove=function(){
	a=(a+1)%personListLen;
	personal();
};
//点击右箭头
right_arr.onclick=personalMove;
//点击左箭头
left_arr.onclick=function(){
	if(a<1){a=personListLen;}
	a=(a-1)%personListLen;
	personal();
};
function personal(){
	//初始化所有
	for(var i=0;i<personListLen;i++){
		personList[i].style.display="none";
	}
	//当前单个设置
	personList[a].style.display="block";
};
/*定时*/
createTimer(box3_right,personalMove);