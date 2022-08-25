// jshint esversion:6
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let hours=document.querySelector(".hour");
let mins=document.querySelector(".min");
let secs=document.querySelector(".sec");
let hour=0;
let min=0;
let sec=0;
var interval;
var a=require("supervillains");
var b= supervillains.random();
console.log(b);
start.addEventListener("click",function(){
  interval=setInterval(function(){
  if(sec<59){
    sec+=1;
    secs.innerHTML=sec<10 ? " 0" + sec : sec;
  }
  else{
    sec=0;
    secs.innerHTML=sec<10 ? " 0" + sec : sec;
  }
  },1000);
  start.style.pointerEvents="none";
});
