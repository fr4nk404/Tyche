/*
*author:Frank
*day:2018-01-18
*/
//�����ʼ����������ʼ�ֶ�
 function startFun(){
	
  clearInterval(timer);//��ʼʱ�������ʱ����������δ���
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
 //���ֹͣ��������ֹͣ�ֶ�������ֶ����
 function stopFun(){
  var start = document.getElementById("start"),
    txt = document.getElementById("txt"),
    title = document.getElementById("title");
  clearInterval(timer);//�����ʱ����ֹͣ��ʱ��
  start.style.background="#036";
  startNum=startNum+1;
  temp=title.innerHTML;
  str[temp]=1;
 }
