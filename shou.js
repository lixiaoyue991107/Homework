var toper = document.getElementsByClassName('toper')[0];
var gao = document.getElementsByClassName('gao')[0];
var div = document.getElementsByClassName('movingpicture')[0];
var select = document.getElementsByTagName('select')[0];
var img = document.getElementsByClassName('l');
var lr = document.getElementsByClassName('lblr')[0];

var dot=document.getElementsByClassName('dot')[0];
var mg=document.getElementsByClassName('mg')[0];
var a = document.getElementsByClassName('a')[0];

var opt = document.getElementsByTagName('option');
var pcz = document.getElementsByClassName('pcz')[0];
var cha = document.getElementsByClassName('chongcd')[0];
var ew = document.getElementsByClassName('erw')[0];

var pic = document.getElementsByClassName('picture');
var left0 = document.getElementsByClassName('Left')[0].children[0].children;

//全体变量，轮播图，next函数
var index = 0;

// 充话费的时候，下拉列表的内容，后面跟着改变
cha.onclick = function (){
	pcz.innerText = '¥'+select.value;
}

// 跳转页面
for(pc = 0;pc<pic.length;pc++){
	pic[pc].onclick = function (){
		location.href = 'xiang.html';
	}
}
//next函数，在接下来的右边悬浮框和顶部悬浮中
function next(j,h,k){
	clearInterval(j.timer);
	j.timer=setInterval(function (){
		var flag = true;
		for(var i in h){
			// 透明度
			if(i === 'opacity'){
				var target = parseInt(parseFloat(h[i])*100);
				var loc = parseInt(parseFloat(getCSS(j,i))*100)||100;
			}else if(i ==='scrollTop'){
				//滑动条
				loc = Math.ceil(j.scrollTop);
				target = parseInt(h[i]);

			}else{
				var target = h[i];
				var loc = parseInt(getCSS(j,i))||0;
			}
			var speed = (target-loc)*0.2;
			speed = (target>=loc)?Math.ceil(speed):Math.floor(speed);

			if(i === 'opacity'){
				j.style.opacity = (loc+speed)/100;
				j.style.filter="alpha(opacity:"+(loc+speed)+")";
			}else{
				j.style[i] =loc+speed+'px';
			}
			if(loc!==target){
				flag = false;
			}
		}

		if(flag){
			clearInterval(j.timer);
			if(k){
				k();
			}
		}
	},20);
}

// 获取样式，用来复制公告栏
function getCSS(j,xr){
	 if(j.currentStyle){
		return j.currentStyle[xr];
	}else{
		return window.getComputedStyle(j,null)[xr];
	}
}
// 让它有足够的内容循环，复制公告栏
newli = mg.cloneNode(true);
newli.style.top = '373px';
gao.appendChild(newli);
var newliUl = document.getElementsByClassName("mg")[1];

// 右边
//鼠标一放上去就会出来，运用到了next函数
for(var aa = 0; aa<left0.length; aa++){
	(function (aa){

		left0[aa].onmouseover = function (){
			next(left0[aa],{right:-20});
			if(aa==2){
				ew.src = '任务所需小图/img/erwei.png';
			}
		}
		left0[aa].onmouseout = function (){
			next(left0[aa],{right:-95});
			if(aa==2){
				ew.src = '任务所需小图/img/serwei.png';
			}
		}

	}(aa))
}


//顶部悬浮
window.onscroll = function (){
	if(window.scrollY>=180){
		toper.style.position = 'fixed';
		toper.style.width = '100%';
		a.style.display = 'block';
	}else if(window.scrollY<180){
		toper.style.position = 'relative';
		toper.style.width = '100%';
		a.style.display = 'none';
	}
}
// 轮播图左右按钮
var see = document.getElementsByClassName('see');
lr.children[0].onclick = function (){
	next(img[index],{left:730});
	index--;
	if(index<0){
		index = img.length-1;
	}
	img[index].style.left='-730px';
	next(img[index],{left:0});
	for(var t = 0;t<see.length;t++){
		see[t].id = '';
	}
	see[index].id = 'current';
}
lr.children[1].onclick = function (){
	next(img[index],{left:-730});
	index++;
	if(index>=img.length){
		index = 0;
	}
	img[index].style.left='730px';
	next(img[index],{left:0});
	for(var t = 0;t<see.length;t++){
		see[t].id = '';
	}
	see[index].id = 'current';
}


// 设置公告栏滚动
var timer;
timer  = setInterval(function (){
	mg.style.top =parseInt(getCSS(mg,'top'))-5+'px'; 
	newliUl.style.top = parseInt(getCSS(newliUl,'top'))-5+'px';
	if(parseInt(getCSS(mg,'top'))<=-373){
		mg.style.top = '373px';
	}
	if(parseInt(getCSS(newliUl,'top'))<=-373){
		newliUl.style.top = '373px';
	}
},200)

//鼠标放上去，滚动停止
gao.onmouseover = function (){
	clearInterval(timer);
}
gao.onmouseout = function (){
	timer  = setInterval(function (){
	mg.style.top =parseInt(getCSS(mg,'top'))-5+'px'; 
	newliUl.style.top = parseInt(getCSS(newliUl,'top'))-5+'px';
	if(parseInt(getCSS(mg,'top'))<=-373){
		mg.style.top = '373px';
	}
	if(parseInt(getCSS(newliUl,'top'))<=-373){
		newliUl.style.top = '373px';
	}
},200)
}

//按键函数
function click(){
	for(var i = 0;i<see.length;i++){
	see[index].id = 'current';
	(function (i){
		see[i].onclick = function (){

			if(i>index){
				next(img[index],{left:-730});
				index=i;
				if(index>=img.length){
					index = 0;
				}
				img[index].style.left='730px';
			}else if(i<index){
				next(img[index],{left:730});
				index=i;
				if(index<0){
					index = img.length-1;
				}
				img[index].style.left='-730px';
			}
			next(img[index],{left:0});
			for(var t = 0;t<see.length;t++){
				see[t].id = '';
			}
			see[index].id = 'current';
		}

	}(i))
}
}
//轮播图下边的数字按键
for(var d=0;d<img.length;d++){
	var see = document.createElement('div');
	see.className='see';
	see.innerText = d+1;
	dot.appendChild(see);
}
var see = document.getElementsByClassName('see');
for(var j = 1;j<img.length;j++){
	img[j].style.left = '730px';
}
click();


// 自动轮播，用到了next函数，当鼠标在上边时，是不轮播的
var timeAuto = setInterval(function (){
	next(img[index],{"left":-730})
	index++;
	if(index>=img.length){
		index=0;
	}
	img[index].style.left = '730px';
	next(img[index],{"left":0});
	for(var t = 0;t<see.length;t++){
		see[t].id = '';
	}
	see[index].id = 'current';
},3000)
//当鼠标在上边时，是不轮播的
div.onmouseover=function (){
	clearInterval(timeAuto);
	lr.style.display = 'flex';
}
//当鼠标不在上边时，是轮播的
div.onmouseout=function (){
		lr.style.display = 'none';
		timeAuto = setInterval(function (){
		next(img[index],{"left":-730})
		index++;
		if(index>=img.length){
			index=0;
		}
		img[index].style.left = '730px';
		next(img[index],{"left":0});
		for(var t = 0;t<see.length;t++){
			see[t].id = '';
		}
		see[index].id = 'current';
},2000)
}
