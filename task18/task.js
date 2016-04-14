var leftIn = document.getElementById("leftIn");
var leftOut = document.getElementById("leftOut");
var rightIn = document.getElementById("rightIn");
var rightOut = document.getElementById("rightOut");
var Container = document.getElementById("container");
var num = document.getElementById("num");
var arr=[ ];
//左侧入事件
leftIn.addEventListener("click",function(){
arr.unshift(parseInt(num.value));
render();
},false);

//左侧出
leftOut.addEventListener("click",function(){
alert(arr.shift());
render();
},false);

//右侧入
rightIn.addEventListener("click",function(){
arr.push(parseInt(num.value));
render();
},false);

//右侧出
rightOut.addEventListener("click",function(){
alert(arr.pop());
render();
},false);


//渲染队列
function render(){
var items ="";
for(var i=0;i<arr.length;i++){
  items += '<div>'+arr[i]+'</div>';
}
  container.innerHTML=items;
}
