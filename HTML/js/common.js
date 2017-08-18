$(function(){
  var num = 0;
  function goLeft() {if (num == -837) { num = 0; }num -= 1;$(".roll p").css({ left: num })}
  var timer = setInterval(goLeft, 20);
  $(".roll p").hover(function() {clearInterval(timer); },function() {timer = setInterval(goLeft, 20);})
})