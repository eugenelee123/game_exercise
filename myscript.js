
let img=new Image();
img.src="stylesheets/Cat n dog Sprites/cat/Walk (4).png"
img.onload=function(){
  init();
};

let canvas = document.querySelector('td');
let ctx = canvas.getContext('2d');

function init(){
  window.requestAnimationFrame(step);
}

function step(){

  window.requestAnimationFrame(step)
}
