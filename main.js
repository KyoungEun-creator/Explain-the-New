// page2: wipe transition
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
// console.log('scrollY', value);

// let hubbleRays = document.querySelector('.pg5-hubble-rays');

// window.addEventListener('scroll', function(){
//     let value = window.scrollY;
//     if (value>2858) {
//         webbRays.style.animation = 'slide-back 1s ease-out forwards';
//     } 
// })

// let webbRays = document.querySelector('.pg5-webb-rays');

// window.addEventListener('scroll', function(){
//     let value = window.scrollY;
//     if (value>2822) {
//         webbRays.style.animation = 'slide-back 1s ease-out forwards';
//     } 
// })

// page6: onClick event
document.querySelector('.secondary_mirror_w').addEventListener('mouseover', function(){
    document.querySelector('.secondary_mirror_y').style.display='block';  
});
document.querySelector('.secondary_mirror_w').addEventListener('mouseout', function(){
    document.querySelector('.secondary_mirror_y').style.display='none';  
});
document.querySelector('.secondary_mirror_y').addEventListener('click', function(){
    document.querySelector('.secondary_mirror_y').style.display='block';  
    document.querySelector('.black-bg1').style.display='block';
})
document.querySelector('.black-bg1').addEventListener('click', function(){
    document.querySelector('.secondary_mirror_y').style.display='none';
    document.querySelector('.black-bg1').style.display='none';
});

document.querySelector('.primary_mirror_w').addEventListener('mouseover', function(){
    document.querySelector('.primary_mirror_y').style.display='block';
});
document.querySelector('.primary_mirror_w').addEventListener('mouseout', function(){
    document.querySelector('.primary_mirror_y').style.display='none';
});
document.querySelector('.primary_mirror_y').addEventListener('click', function(){
    document.querySelector('.primary_mirror_y').style.display='block';
    document.querySelector('.black-bg2').style.display='block';
})
document.querySelector('.black-bg2').addEventListener('click', function(){
    document.querySelector('.primary_mirror_y').style.display='none';
    document.querySelector('.black-bg2').style.display='none';
});

document.querySelector('.ISIM_w').addEventListener('mouseover', function(){
    document.querySelector('.ISIM_y').style.display='block';
});
document.querySelector('.ISIM_w').addEventListener('mouseout', function(){
    document.querySelector('.ISIM_y').style.display='none';
});
document.querySelector('.ISIM_y').addEventListener('click', function(){
    document.querySelector('.ISIM_y').style.display='block';
    document.querySelector('.black-bg3').style.display='block';
});
document.querySelector('.black-bg3').addEventListener('click', function(){
    document.querySelector('.ISIM_y').style.display='none';
    document.querySelector('.black-bg3').style.display='none';
});

document.querySelector('.Earth-facing-antenna_w').addEventListener('mouseover', function(){
    document.querySelector('.Earth-facing-antenna_y').style.display='block';
});
document.querySelector('.Earth-facing-antenna_w').addEventListener('mouseout', function(){
    document.querySelector('.Earth-facing-antenna_y').style.display='none';
});
document.querySelector('.Earth-facing-antenna_y').addEventListener('click', function(){
    document.querySelector('.Earth-facing-antenna_y').style.display='block';
    document.querySelector('.black-bg4').style.display='block';
});
document.querySelector('.black-bg4').addEventListener('click', function(){
    document.querySelector('.Earth-facing-antenna_y').style.display='none';
    document.querySelector('.black-bg4').style.display='none';
});

document.querySelector('.Control-system_w').addEventListener('mouseover', function(){
    document.querySelector('.Control-system_y').style.display='block';
});
document.querySelector('.Control-system_w').addEventListener('mouseout', function(){
    document.querySelector('.Control-system_y').style.display='none';
});
document.querySelector('.Control-system_y').addEventListener('click', function(){
    document.querySelector('.Control-system_y').style.display='block';
    document.querySelector('.black-bg5').style.display='block';
});
document.querySelector('.black-bg5').addEventListener('click', function(){
    document.querySelector('.Control-system_y').style.display='none';
    document.querySelector('.black-bg5').style.display='none';
});

document.querySelector('.Startrackers_w').addEventListener('mouseover', function(){
    document.querySelector('.Startrackers_y').style.display='block';
});
document.querySelector('.Startrackers_w').addEventListener('mouseout', function(){
    document.querySelector('.Startrackers_y').style.display='none';
});
document.querySelector('.Startrackers_y').addEventListener('click', function(){
    document.querySelector('.Startrackers_y').style.display='block';
    document.querySelector('.black-bg6').style.display='block';
});
document.querySelector('.black-bg6').addEventListener('click', function(){
    document.querySelector('.Startrackers_y').style.display='none';
    document.querySelector('.black-bg6').style.display='none';
});

document.querySelector('.Sunshield_w').addEventListener('mouseover', function(){
    document.querySelector('.Sunshield_y').style.display='block';
});
document.querySelector('.Sunshield_w').addEventListener('mouseout', function(){
    document.querySelector('.Sunshield_y').style.display='none';
});
document.querySelector('.Sunshield_y').addEventListener('click', function(){
    document.querySelector('.Sunshield_y').style.display='block';
    document.querySelector('.black-bg7').style.display='block';
});
document.querySelector('.black-bg7').addEventListener('click', function(){
    document.querySelector('.Sunshield_y').style.display='none';
    document.querySelector('.black-bg7').style.display='none';
});

// page7: scratch event
document.addEventListener('mousemove', function(e){
    const bg7 = document.querySelector('.outer7');
    const scratch7 = document.createElement('.span7');

    scratch7.style.top = -50 + e.offsetY + 'px'
    scratch7.style.left = -50 + e.offsetX + 'px'

    bg7.appendChild(scratch7);
});

// // page8: scratch event
// document.addEventListener('mousemove', function(e){
//     const bg8 = document.querySelector('.outer8');
//     const scratch8 = document.createElement('.span8');

//     scratch8.style.top = -50 + e.offsetY + 'px'
//     scratch8.style.left = -50 + e.offsetX + 'px'

//     bg8.appendChild(scratch8);
// });

// page9: scratch event
var pg9_mouse = document.querySelector('.outer9');
pg9_mouse.addEventListener('mousemove', function(e){
    // var bg9 = document.querySelector('.outer9');
    var scratch9 = document.createElement('.span9');

    scratch9.style.top = -50 + e.offsetY + 'px'
    scratch9.style.left = -50 + e.offsetX + 'px'

    pg9_mouse.appendChild(scratch9);
});

