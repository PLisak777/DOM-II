// Your code goes here

const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseenter', () => {
    funBus.src = "https://funbuses.com/oak/files/bus/buscropped-onrainbow.jpg"
    funBus.style.transition = "0.3s"
})
funBus.addEventListener('mouseleave', () => {
    funBus.src = 'img/fun-bus.jpg'
})