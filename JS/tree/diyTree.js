encoding = "utf-8";

function $(id) {
	return document.getElementById(id);
}
// 一个支点或底层的保存实体
function divParam(oneSelfId, fatherId, showName, lableWay, doubleWay, oneSelfImg, showArea) {
	this.oneSelfId = oneSelfId; // 自身DivId后边的数字
	this.fatherId = (fatherId == '' ? 0 : fatherId);// 父级的DivId后边的数字
	this.showName = showName; // 显示的名字
	this.labelWay = lableWay; // 使用的方法
	this.doubleWay = doubleWay; //第二方法
	this.oneSelfImg = oneSelfImg; // 自己定义的图片
	this.showArea = showArea; // 超链接的显示区域的Id
}
// 树形菜单控件入口
function diyTree(id) {
	this.config = { // 控件可选参数
		treeHappen : false, // 节点在有子级的情况下时候是否还使用用户自定义的方法
		treeDoubleHapen : false, //第二方法
		treeIcon : true, // 是否显示节点和底层图片
		treeLine : false //是否显示虚线
	};
	this.icons = { // 图片集合
			firstClass : '../PSVWeb/js/diy/img/monitoring.png', // 父节点的默认图片
			secondClass : '../PSVWeb/js/diy/img/caram.png', // 最底层节点的默认图片
			line : '../PSVWeb/js/diy/img/line.gif', //普通竖线
			plus : '../PSVWeb/js/diy/img/nolines_plus.gif', // +号图片
			linePlus : '../PSVWeb/js/diy/img/plus.gif', //有线普通+号图片
			plusBottom : '../PSVWeb/js/diy/img/plusbottom.gif',//有线+号结束底线
			minus : '../PSVWeb/js/diy/img/nolines_minus.gif', // -号图片
			lineMinus : '../PSVWeb/js/diy/img/minus.gif', //有线普通-号图片
			minusBottom : '../PSVWeb/js/diy/img/minusBottom.gif', //有线-号结束底线
			join : '../PSVWeb/js/diy/img/join.gif', //普通分支
			joinBottom : '../PSVWeb/js/diy/img/joinbottom.gif' //结束低线
			
	};
	this.DivId = id; // diy的变量名
	this.params = []; // 节点数组
	this.paramsOfAjax = []; // 动态添加字节点数组
	this.cTs = []; // 自身数组
	this.cDs = []; // 字节点的容器
	this.openDiv = []; // 已经打开的节点
	this.clazz = 1; // 默认有多少个图标
	this.DemoDiv = document.createElement("div");
	this.DemoA = document.createElement("a");
	this.DemoImg = document.createElement("img");
	
}
// 将要创建div参数保存在一个数组中
diyTree.prototype.addDiv = function(oneSelfId, fatherId, showName, lableWay, doubleWay,
		oneSelfImg, showArea) {
	this.params[this.params.length] = new divParam(oneSelfId, fatherId,
			showName, lableWay, doubleWay, oneSelfImg, showArea); // 将一个Div的应该包含的信息放到一个实体类中并保存在一个数组中
}
diyTree.prototype.addDivByAjax=function(oneSelfId, fatherId, showName, lableWay, doubleWay,
		oneSelfImg, showArea) {
	this.paramsOfAjax[this.paramsOfAjax.length] = new divParam(oneSelfId, fatherId,
			showName, lableWay, doubleWay, oneSelfImg, showArea); // 将一个Div的应该包含的信息放到一个实体类中并保存在一个数组中
}
// 开始构造树形菜单
diyTree.prototype.toString = function() {
	this.cTs = [];
	this.cDs = []; // 每次运行初始化数组
	var divFactory = this.DemoDiv.cloneNode(false); // 构造菜单框架
	divFactory.id = "diyTree";
	var cT = this.DemoDiv.cloneNode(false); // 构造最顶层父节点
	var cD = this.DemoDiv.cloneNode(false); // 构造最顶层子节点容器
	cT.id = "cT0";
	cD.id = "cD0";
	this.cTs[0] = cT;
	this.cDs[0] = cD;
	this.cTs[0].appendChild(cD);
	divFactory.appendChild(this.cTs[0]);
	// 循环创建div保存在数组中
	var index = 0;
	while(index < this.params.length){
		this.createDiv(this.params[index]);
		index ++;
	}
	// 循环创建图标、超链接和创建各个div的关系
	index = 0;
	while(index < this.params.length){
		this.createImg(this.params[index]); // 创建图片
		this.createA(this.params[index]); // 创建超链接
		if (typeof this.cTs[this.params[index].fatherId] == 'undefined') // 如果不存在当前节点的父节点
			continue;
		if (typeof this.cDs[this.params[index].fatherId] != 'undefined') // 如果当前节点的父节点容器存在
			this.cDs[this.params[index].fatherId]
					.appendChild(this.cTs[this.params[index].oneSelfId]); 
		if (typeof this.cDs[this.params[index].oneSelfId] != 'undefined') // 如果当前节点存在子节点
			this.cTs[this.params[index].oneSelfId]
					.appendChild(this.cDs[this.params[index].oneSelfId]);
		index ++;
	}
	return divFactory;
}
// 动态加载子节点，考虑到数据的多层分级，所以每次只加载一层
diyTree.prototype.toStringByAjax = function(){
	fatherId =  this.paramsOfAjax[0].fatherId;
	var cT = document.getElementById("cT" + fatherId)
	this.cTs[fatherId] = cT;
	if (typeof cT == 'undefined') // 如果不存在当前节点的父节点
		return;
	// 循环创建div保存在数组中
	var index = 0;
	while(index < this.paramsOfAjax.length){
		this.createDiv(this.paramsOfAjax[index]);
		index ++;
	}
	var imgs=cT.getElementsByTagName('img');
	var img=imgs[this.config.treeIcon ? imgs.length-2 : imgs.length-1];
	cT.appendChild(this.cDs[fatherId]);//创建关系
	img.style.visibility = "visible";
	img.id = "sign" + fatherId;
	var minus;
	var plus;
	if(this.config.treeLine && this.config.treeIcon){
		minus = this.icons.lineMinus;
		plus = this.icons.linePlus;
	}else{
		minus = this.icons.minus;
		plus = this.icons.plus;
	}	
	img.onclick = function() { // 为图标添加打开或关闭子节点的事件
		fatherId = window.event.srcElement.id.substring(4,window.event.srcElement.id.length );
		if (document.getElementById("cD" + fatherId).style.display == 'none') {
			document.getElementById("cD" + fatherId).style.display = 'block';
			document.getElementById("sign" + fatherId).src = minus;
		} else {
			document.getElementById("cD" + fatherId).style.display = 'none';
			document.getElementById("sign" + fatherId).src = plus;
		}
	}
	if(!this.config.treeHappen){	//改变节点方法
		var a = cT.getElementsByTagName('a')[0];
		a.href = "javascript:"+this.DivId+".openOrClose('"+ fatherId + "');";
	}
	index = 0;
	while(index < this.paramsOfAjax.length){
		this.createImg(this.paramsOfAjax[index]); // 创建图片
		this.createA(this.paramsOfAjax[index]); // 创建超链接
		if (typeof this.cDs[fatherId] != 'undefined') // 如果当前节点的父节点容器存在
			this.cDs[fatherId]
					.appendChild(this.cTs[this.paramsOfAjax[index].oneSelfId]); 
		index ++;
	}
	this.paramsOfAjax = [];
}
// 创建ct和cd的div
diyTree.prototype.createDiv = function(dp) {
	if (typeof this.cTs[dp.fatherId] == 'undefined') // 如果当前节点的父节点不存在
		return;
	else if (typeof this.cDs[dp.fatherId] == 'undefined') { //如果当前节点的父节点容器不存在，则创建一个出来
		var cD = this.DemoDiv.cloneNode(false);
		cD.id = "cD" + dp.fatherId;
		cD.style.display = "none";
		this.cDs[dp.fatherId] = cD;
	}
	var cT = this.DemoDiv.cloneNode(false);
	cT.id = "cT" + dp.oneSelfId;
	cT.className = "cT";
	this.cTs[dp.oneSelfId] = cT;
}
// 创建超连接
diyTree.prototype.createA = function(dp) {
	var a = this.DemoA.cloneNode(false);
	if (typeof this.cDs[dp.oneSelfId] != 'undefined') // 判断是否存容器
		this.config.treeHappen ? a.href = dp.labelWay : a.href = "javascript:"	// 判断是否使用用户自定义的方法
				+ this.DivId + 	 ".openOrClose(" + dp.oneSelfId + ");";
	else if (dp.labelWay != "" && dp.labelWay != null) // 判断用户有没有自定义方法
		a.href = dp.labelWay;
	a.innerHTML = dp.showName;
	(typeof dp.showArea != 'undefined' ? (dp.showArrea != "" ? a.target = dp.showArea: ""): ""); // A标签的链接的指向目标
	this.cTs[dp.oneSelfId].appendChild(a);
	if (this.config.treeDoubleHapen && dp.doubleWay != "" && dp.doubleWay != null){ // 判断用户有没有第二自定义方法
		var b = this.DemoA.cloneNode(false);
		b.href = dp.doubleWay;
		b.innerHTML= '[选择]';
		b.style.color = 'blue';
		this.cTs[dp.oneSelfId].appendChild(b);
	}
}
// 创建图标
diyTree.prototype.createImg = function(dp) {
	var minus,plus;
	if(this.config.treeLine && this.config.treeIcon){ //决定+-符号的图片
		minus = this.icons.lineMinus;
		plus = this.icons.linePlus;
	}else{
		minus = this.icons.minus;
		plus = this.icons.plus;
	}	
	var imgSum = this.cTs[dp.fatherId].childNodes.length; // 获得父级div的子节点总数
	var index = 0;
	while(index < imgSum){
		if ("A" == this.cTs[dp.fatherId].childNodes[index].nodeName) { // 获得A标签前的所有img数
			imgSum = index;
			break;
		}
		index ++;
	}
	typeof this.cDs[dp.oneSelfId] != 'undefined' ? imgSum-- : "";
	index = this.clazz;
	while (index <= imgSum){ // 循环并生成隐藏的占位图片
		var imgHidden = this.DemoImg.cloneNode(false);
		imgHidden.className = "icon";
		if(index != imgSum || typeof this.cDs[dp.oneSelfId] != 'undefined')	//判断是否使用普通竖虚线还是分支虚线
			imgHidden.src = this.icons.line;
		else
			imgHidden.src = this.icons.join;
		this.config.treeLine ? '' : (imgHidden.style.visibility = "hidden") ;
		this.cTs[dp.oneSelfId].appendChild(imgHidden);
		index ++ ;
	}
	if (typeof this.cDs[dp.oneSelfId] != 'undefined') { // 如果为父节点就生成+号图标
		var imgSign = this.DemoImg.cloneNode(false);
		imgSign.id = "sign" + dp.oneSelfId;
		imgSign.src = plus;
		imgSign.className = "icon";
		imgSign.onclick = function() { // 为图标添加打开或关闭子节点的事件
			if (document.getElementById("cD" + dp.oneSelfId).style.display == 'none') {
				document.getElementById("cD" + dp.oneSelfId).style.display = 'block';
				document.getElementById("sign" + dp.oneSelfId).src = minus;
			} else {
				document.getElementById("cD" + dp.oneSelfId).style.display = 'none';
				document.getElementById("sign" + dp.oneSelfId).src = plus;
			}
		}
		this.cTs[dp.oneSelfId].appendChild(imgSign);
	}
	if (this.config.treeIcon) { // 判断是否需要显示节点相应图片
		var imgIcon = this.DemoImg.cloneNode(false);
		imgIcon.id = "icon" + dp.oneSelfId;
		imgIcon.src = ((typeof dp.oneSelfImg != 'undefined' && dp.oneSelfImg != '') ? dp.oneSelfImg //判断是否使用用户自定义图片
				: typeof this.cDs[dp.oneSelfId] != 'undefined' ? this.icons.secondClass
						: this.icons.firstClass);
		imgIcon.className = "icon";
		this.cTs[dp.oneSelfId].appendChild(imgIcon);
	}
}
// 关闭或打开父节点
diyTree.prototype.openOrClose = function(dpId) {
	if(typeof this.cDs[dpId]=="undefined") // 如果没有该Div直接跳过此功能
		return;
	var minus;
	var plus;
	if(this.config.treeLine && this.config.treeIcon){
		minus = this.icons.lineMinus;
		plus = this.icons.linePlus;
	}else{
		minus = this.icons.minus;
		plus = this.icons.plus;
	}	
	if (document.getElementById("cD" + dpId).style.display == 'none') {
		document.getElementById("cD" + dpId).style.display = 'block';
		document.getElementById("sign" + dpId).src = minus;
	} else {
		document.getElementById("cD" + dpId).style.display = 'none';
		document.getElementById("sign" + dpId).src = plus;
	}
}