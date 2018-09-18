/*
*author:Frank
*day:2018-01-18
*/
//点击开始，标题栏开始轮动
 function startFun(){
	
  clearInterval(timer);//开始时，清除计时器，避免二次触发
  var title = document.getElementById("title");
  var start = document.getElementById("start");
  var rwd	= document.getElementById("rwd");
  var num=0;
  rwd.innerHTML=mytype[startNum];
  
  timer = setInterval(function(){
    do{
	   num= Math.floor(Math.random()*total)+1;
    }while(str[num]!=0);
    title.innerHTML=num;
  },50);
  
  start.style.background="#ccc";
  
 }
 //点击停止，标题栏停止轮动并输出轮动结果
 function stopFun(){
  var start = document.getElementById("start"),
    txt = document.getElementById("txt"),
    title = document.getElementById("title");
  clearInterval(timer);//清除计时器，停止计时器
  start.style.background="#036";
  startNum=startNum+1;
  temp=title.innerHTML;
  str[temp]=1;
 }
