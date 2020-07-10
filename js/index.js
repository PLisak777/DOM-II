// Your code goes here

const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseenter', () => {
    funBus.src = "https://funbuses.com/oak/files/bus/buscropped-onrainbow.jpg"
    funBus.style.transition = "all 0.3s"
})
funBus.addEventListener('mouseleave', (event) => {
    event.target.src = "img/fun-bus.jpg";
})

const navList = document.querySelectorAll('nav a')
navList.forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = 'red'
    })
    navList.forEach(item => {
        item.addEventListener('mouseout', event => {
            event.target.style.color = ""
        })
    })
})
