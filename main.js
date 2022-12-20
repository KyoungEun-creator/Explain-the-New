let hubbleRays = document.querySelector('.pg5-hubble-rays');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log('scrollY', value);

    if (value>2858) {
        webbRays.style.animation = 'slide-back 1s ease-out forwards';
    } 
})

let webbRays = document.querySelector('.pg5-webb-rays');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log('scrollY', value);

    if (value>2822) {
        webbRays.style.animation = 'slide-back 1s ease-out forwards';
    } 
})