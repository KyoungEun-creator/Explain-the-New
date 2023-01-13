// page2
var ctx = c.getContext("2d"),
img = new Image();         // image to show

img.onload = start;
img.src = "weic2216f.jpg";

function start() {
  c.onmousemove = function(e) {
    var r = c.getBoundingClientRect(),
        x = e.clientX - r.left;
    ctx.clearRect(0, 0, c.width, c.height); 
    ctx.drawImage(img, 0, 0, x, c.height,  0, 0, x, c.height); 
    ctx.fillRect(x, 0, 5, c.height); 
  };
}


// page
console.log('scrollY', value);

let hubbleRays = document.querySelector('.pg5-hubble-rays');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if (value>2858) {
        webbRays.style.animation = 'slide-back 1s ease-out forwards';
    } 
})

let webbRays = document.querySelector('.pg5-webb-rays');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if (value>2822) {
        webbRays.style.animation = 'slide-back 1s ease-out forwards';
    } 
})