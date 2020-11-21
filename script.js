var a = document.getElementById("bar");



var txt = document.getElementById("txt");



var btn = document.getElementById("btn");
btn.onclick = function(){

var t = "width: " + txt.value +"%;";
a.setAttribute("style" , t);
	
};