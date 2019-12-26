window.onload = function(){
	var getLi = document.getElementsByTagName("img");
	function fun(i,j){
		getLi[i].style.opacity = 1;
		getLi[j].style.opacity = 0;
	}
	fun(0,1);
	var i = 0;
	setInterval(function(){
		if(++i >= 5){
			i=0;
			fun(0,4);
		}
		else fun(i,i-1);
	},2000);
}