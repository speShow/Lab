
;(function(){
	var box3_tt = document.getElementsByClassName("box3_tt");
	var box3_cont = document.getElementsByClassName("box3_cont");
	box3_tt[0].style.color="#797979";
	box3_tt[0].style.background="#f4f4f4";
	box3_cont[0].style.display="block";
	for(var i = 0; i<3;i++){
		box3_tt[i].index = i;
		box3_tt[i].onclick = function(){
			for(var j = 0; j<3;j++){
				box3_tt[j].style.color="#fff";
				box3_tt[j].style.background="#6f6f6f";
				box3_cont[j].style.display = "none";
			}
			this.style.color="#797979";
			this.style.background="#f4f4f4";
			box3_cont[this.index].style.display = "block";
		}
	}
})();












