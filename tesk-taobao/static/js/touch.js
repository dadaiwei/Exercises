/*
var oBox = document.querySelector('#app');
var oCon = document.querySelector('#app .main');

var olicent = 2476.14;
  var maxY =  oBox.clientHeight - olicent;

var startPoint = 0;
var startY = 0;
var translateY = 0;

var lastY = 0;
var lastTime = 0;
var lastDis = 0;
var lastTimeDis =0 ;


var r = /,\s(-?[\d\.]*)\)/;


oBox.addEventListener('touchstart',function(e){
   oCon.style.transition = '';
   startPoint = e.changedTouches[0].pageY;
   if(isNaN(translateY)){
   translateY = ( getComputedStyle(oCon,false)['transform'].match(r)[1] )*1;
   };
   startY  = translateY;
   lastY = startY;
   lastTime = new Date().getTime();
   lastDis = 0;
   lastTimeDis =0 ;

});
oBox.addEventListener('touchmove',function(e){
   var nowTime = new Date().getTime();
   var nowPoint = e.changedTouches[0].pageY;
   var disY = nowPoint - startPoint;
   translateY = disY +startY;

   lastDis = translateY - lastY;
   lastTimeDis = nowTime - lastTime;


   lastY = translateY;
   lastTime = nowTime;

   oCon.style.transform = 'translate3d(0,'+translateY+'px,0)';
});

oBox.addEventListener('touchend',function(e){
   var speed = ( lastDis / lastTimeDis )*350;
   if( isNaN(translateY) ){
   translateY = ( getComputedStyle(oCon,false)['transform'].match(r)[1] )*1;
   }else{
   translateY = translateY +speed;
   }
   if( translateY > 0 ){
   translateY = 0;
   }
   if( translateY < maxY ){
   translateY = maxY;
   }
   oCon.style.transition = '600ms cubic-bezier(0.34, 0.92, 0.58, 0.9)';
   oCon.style.transform = 'translate3d(0,'+translateY+'px,0)';
});
*/
