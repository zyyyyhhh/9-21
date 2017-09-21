/*
* @Author: dell
* @Date:   2017-09-21 16:27:03
* @Last Modified by:   dell
* @Last Modified time: 2017-09-21 20:41:03
*/
/*function children(parent){
	let childs = parent.childNodes;

}*/
function next(element,tagName){
	let parent = element.parentNode;
	let child = parent.children;	
	let index = 0;
	for(let i=0;i<child.length;i++){
		if(child[i] == element){
			index = i;
			break;
		}
	}
	let nextAll = Array.from(child).slice(index+1);
	for(let i=0;i<nextAll.length;i++){
		if(nextAll[i].nodeName == tagName.toUpperCase()){
			return i;
		}
	}
	return null;
}




	function next1(element){
	let parent = element.parentNode;
	let child = parent.children;
	let index = 0;
	for(let i=0;i<child.length;i++){
		if(child[i] == element){
			index = i;
			break;
		}
	}
	let nextAll = Array.from(child).slice(index+1);
	return nextAll
}