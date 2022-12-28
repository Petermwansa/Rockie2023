window.addEventListener('scroll', () =>{
    let content = document.querySelector('.row-happy');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition) {
        content.classList.add('active-happy');
    } else {
        content.classList.remove('active-happy');
    }
});

window.addEventListener('scroll', () =>{
    let content = document.querySelector('.row-wish');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition) {
        content.classList.add('active-wish');
    } else {
        content.classList.remove('active-wish');
    }
});

window.addEventListener('scroll', () =>{
    let content = document.querySelector('.row-vision');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition) {
        content.classList.add('active-vision');
    } else {
        content.classList.remove('active-vision');
    }
});

window.addEventListener('scroll', () =>{
    let content = document.querySelector('.row-thanks');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition) {
        content.classList.add('active-thanks');
    } else {
        content.classList.remove('active-thanks');
    }
});

window.addEventListener('scroll', () =>{
    let content = document.querySelector('.row-clients');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition) {
        content.classList.add('active-clients');
    } else {
        content.classList.remove('active-clients');
    }
});