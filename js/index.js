// Your code goes here

const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseenter', (event) => {
    funBus.src = "https://funbuses.com/oak/files/bus/buscropped-onrainbow.jpg"
    funBus.style.transition = "all 0.3s"
    event.stopPropagation();
})

const navList = document.querySelectorAll('nav a')
navList.forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = 'red'
        event.target.style.transform = 'scale(1.2)'
        event.target.style.transition = 'all 0.3s'
    })
    navList.forEach(item => {
        item.addEventListener('mouseout', event => {
            event.target.style.color = ""
            event.target.style.transform = 'scale(1.0)'
        })
    })
})

const logoHead = document.querySelector('.logo-heading')
logoHead.addEventListener('click', () => {
    logoHead.style.transform = 'scale(1.5)'
})

const headLines = document.querySelectorAll('h2')
headLines.forEach(item => {
    item.addEventListener('dblclick', event => {
        item.textContent = 'Only once is necessary, thanks.';
    })
})

const imgContent = document.querySelectorAll('.img-content img')

imgContent.forEach(item => {
    item.addEventListener('drag', (event) => {
        imgContent.alert("I do not consent to this!");
    })
})