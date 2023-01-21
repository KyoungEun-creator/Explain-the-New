document.addEventListener('mousemove', function(e){
    const body = document.querySelector('body');
    const scratch = document.createElement('span');

    scratch.style.top = -50 + e.offsetY + 'px'
    scratch.style.left = -50 + e.offsetX + 'px'

    body.appendChild(scratch);
});