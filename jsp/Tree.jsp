<html>
<head>
<script>
window.onload = function(e) {
	cancelBubble(  );
	var firstNode = document.getElementById("treeCtn");
	var htm = "";
	firstNode.innerHTML =node1();
	for(var i=0;i<10;i++){
	htm +=node2(i);
}
firstNode.childNodes[0].innerHTML= htm;
}
function fun(node){
	node.innerHTML =node.innerHTML+node1() ;
var htm="";
	for(var i=0;i<10;i++){
	htm +=node2(i);
}
   var s = node.parentNode;
node.lastChild.innerHTML= htm;
node.firstChild.firstChild.src="jian_null.gif";
node.onclick=function(){fun2(node);};
	cancelBubble(  );
	}
function 	fun2(flag){
		cancelBubble(  );
		if(flag.lastChild.style.display=="none"){
			flag.lastChild.style.display="block";
		flag.firstChild.firstChild.src="jian_null.gif";
		}else{
		flag.lastChild.style.display="none";
		flag.firstChild.firstChild.src="jia.gif";
	}
}
function node1(){
   return "<ul></ul>"
}
function node2(flag){
   return  "<li onclick='fun(this);'><div ><img  src ='jia.gif'  />"+flag+"</div></li>"
}

function cancelBubble(){
window.event.cancelBubble = true;
}

 




</script>
<style type="text/css">
	ul,li{  list-style:none; } 
</style>




</head>
<body   >
  
<div  id="treeCtn"  width="20%" height="100%;">  </div>


</body>
</html>