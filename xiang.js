// 获取所需标签
var littop = document.getElementsByClassName('mxlittop')[0];
var bigImg = document.getElementsByClassName('xbig')[0];
var littleBottom = document.getElementsByClassName('mxlitbomImg');
var move = document.getElementsByClassName('xmove')[0];
var mxle = document.getElementsByClassName('mxarrft')[0];
var mxri = document.getElementsByClassName('xarrowRight')[0];
var ic0 = document.getElementsByClassName('ic')[0];
var mxdc = document.getElementsByClassName('mxdc')[0];
var input = document.getElementsByClassName('ip')[0];
var sc = document.getElementsByClassName('sc')[0];
var one = document.getElementsByClassName('one')[0]; 
var two = document.getElementsByClassName('two')[0]; 
var burCar = document.getElementsByClassName('bt2')[0];
var mb = document.getElementsByClassName('mxmb')[0];
var countinue = document.getElementsByClassName('countinue')[0];
var mjs = document.getElementsByClassName('mjs')[0];
var mc = document.getElementsByClassName('mc')[0];
var mxmb = document.getElementsByClassName('mxmb')[0];
var mclo = document.getElementsByClassName('mclo')[0]
var index = 0;
littleBottom[index].parentNode.style.border = '2px solid #FFA500';
littop.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
littop.style.backgroundSize = 'contain';

littop.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
littop.style.backgroundSize = 'contain';

for(var i = 0;i<littleBottom.length;i++){
	(function (i){
		littleBottom[i].onmouseover = function (){
			littleBottom[index].parentNode.style.border = 'none';
			index = i;
			littleBottom[index].parentNode.style.border = '2px solid #FFA500';
			littop.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
			littop.style.backgroundSize = 'contain';
		}
	}(i))
}
mxle.onclick = function (){
	littleBottom[index].parentNode.style.border = 'none';
	index--;
	if(index<0){
		index=1;
	}
	littleBottom[index].parentNode.style.border = '2px solid #FFA500';
	littop.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
	littop.style.backgroundSize = 'contain';
}
mxri.onclick = function (){
	littleBottom[index].parentNode.style.border = 'none';
	index++;
	if(index>1){
		index=0;
	}
	littleBottom[index].parentNode.style.border = '2px solid #FFA500';
	littop.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
	littop.style.backgroundSize = 'contain';
}

littop.onmouseover = function (){
	move.style.display = 'inline-block';
	bigImg.style.display = 'block';
	bigImg.children[0].src='任务所需小图/img/pp'+index+'.jpeg';
	littop.onmousemove = function (e){
		var e = e||window.event;
		moveLeft = e.clientX - move.offsetWidth*2 -littop.offsetParent.offsetLeft-move.offsetParent.offsetLeft;
		moveTop = e.clientY - move.offsetHeight*2 - littop.offsetParent.offsetTop-move.offsetParent.offsetTop;
		if(moveLeft<0){
			moveLeft = 0;
		}else if(moveLeft>=littop.offsetWidth-move.offsetWidth){
			moveLeft=littop.offsetWidth-move.offsetWidth;
		}
		if(moveTop<0){
			moveTop = 0;
		}else if(moveTop>=littop.offsetHeight-move.offsetHeight){
			moveTop=littop.offsetHeight-move.offsetHeight;
		}
		move.style.left = moveLeft+'px';
		move.style.top = moveTop+'px';

		bigImg.children[0].style.left = -moveLeft/(littop.offsetWidth/bigImg.children[0].offsetWidth)+'px';
		bigImg.children[0].style.top = -moveTop/(littop.offsetHeight/bigImg.children[0].offsetHeight)+'px';
	}
	
}


littop.onmouseout = function (){
	move.style.display = 'none';
	bigImg.style.display = 'none';
}
mxdc.onmouseover = function (){
	if(parseInt(input.value)==1){
		mxdc.style.cursor = 'not-allowed';
	}else{
		mxdc.style.cursor = 'pointer';
	}
}
ic0.onmouseover = function (){
	if(parseInt(input.value)==5){
		ic0.style.cursor = 'not-allowed';
	}else{
		ic0.style.cursor = 'pointer';
	}
}




ic0.onclick = function (){
	if(input.value<5){
		input.value=parseInt(input.value)+1;
	}else{
		ic0.style.cursor = 'not-allowed';
	}
	
}
mxdc.onclick = function (){
	if(input.value>1){
		input.value=parseInt(input.value)-1;
	}else{
		mxdc.style.cursor = 'not-allowed';
	}
}




sc.innerText = '"'+one.innerText+'"';
one.onclick = function (){
	sc.innerText = '"'+one.innerText+'"';
	one.style.background="url('任务所需小图/img/duigou.png')no-repeat";
	one.style.backgroundPosition="57px 17px";
	one.style.border='1px solid #FF1493';
	two.style.background="none";
	two.style.border = 'none';
}
two.onclick = function (){
	sc.innerText = '"'+two.innerText+'"';
	two.style.background="url('任务所需小图/img/duigou.png')no-repeat";
	two.style.backgroundPosition="57px 17px";
	one.style.background="none";
	two.style.border='1px solid #FF1493';
	one.style.border = 'none';
}
// 购物车
burCar.onclick = function (){
	mb.style.display = 'block';
	mc.style.display='block'; 
}
countinue.onclick = function (){
	mxmb.style.display = 'none';
	mc.style.display='none';

}
mjs.onclick = function (){
	mxmb.style.display = 'none';
	mc.style.display='none';
}
mclo.onclick = function (){
	mxmb.style.display = 'none';
	mc.style.display='none';
}