/*
* @Author: dell
* @Date:   2017-09-20 15:07:22
* @Last Modified by:   dell
* @Last Modified time: 2017-09-20 19:03:13
*/
window.onload = function(){
	let banner = document.getElementsByClassName('banner')[0];
	let list = document.getElementsByClassName('img-list')[0];
	let imgs = list.getElementsByTagName('li');
	let imgsw = parseInt(getComputedStyle(list,null).width);
	let yuan = document.getElementsByClassName('yuan')[0];
	let yuans = yuan.getElementsByTagName('li');
	let left = document.getElementsByClassName('banner-left')[0];
	let right = document.getElementsByClassName('banner-right')[0];

	let now = 0;
	let next = 0;
	let flag = true;
	let t = setInterval(move, 3000);


	for(let i=0;i<yuans.length;i++){
		yuans[i].onclick = function(){
			if(now == i){return;}
			yuans[i].style.background = 'red';
			yuans[now].style.background = '#17171c';
			imgs[i].style.left = imgsw+'px';
			animate(imgs[now],{left:-imgsw});
			animate(imgs[i],{left:0});
			now = next = i;
		}
	}
	


	function move(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
			imgs[next].style.left = `${imgsw}px`;
			animate(imgs[now],{left:-imgsw});
			animate(imgs[next],{left:0},function(){
				flag = true;
			}); 
			yuans[next].style.background = 'red';
			yuans[now].style.background = '#17171c';
			now = next;
	}


	function moveL(){
		next--;
		if(next<0){
			next = imgs.length-1;
		}
			imgs[next].style.left = -imgsw+'px';
			animate(imgs[now],{left:imgsw});
			animate(imgs[next],{left:0},function(){
				flag = true;
			}); 
			yuans[next].style.background = 'red';
			yuans[now].style.background = '#17171c';
			now = next;
	}

	


	left.onclick = function(){
		if(!flag){
			return;
		}
		moveL();
		flag = false;
	}
	right.onclick = function(){
		if(!flag){
			return;
		}
		move();
		flag = false;
	}


	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move, 3000);
	}
}