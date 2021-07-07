// Your code goes here

// Variables Start

const header = document.querySelector('.main-navigation')
const [red, green, blue] = [69, 111, 225]
const body = document.querySelector('body')
const funBus = document.querySelector('.intro img');
const navList = document.querySelectorAll('nav a')
const logoHead = document.querySelector('.logo-heading')
const headLines = document.querySelectorAll('h2')
const imgRounded = document.querySelector('.img-content .img-fluid')

// Variables End

// Rules/Functions

const midImg = document.querySelector('.content-section .img-content img')
midImg.setAttribute('class', "mid-img")

// Global Events Start

window.addEventListener('load', event => {
    window.alert('Welcome to The FUN BUS!!');
})

window.addEventListener('keydown', () => {
    window.alert('Use your mouse, peasant')
})

window.addEventListener('scroll', () => {
    // Thanks to StackOverflow
    // TODO: Get backgroundColor back to white when at top
    let y = 1 + (window.scrollY || window.pageYOffset) / 150
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    body.style.color = 'white';
})

// header.addEventListener('scroll', (e) => {
//     let y = 1 + (window.scrollY || window.pageYOffset) / 150
//     y = y < 1 ? 1 : y 
//     const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
//     e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//     e.target.style.color = 'white';
// })

// Global Events End

// Header/Nav Event Start

header.addEventListener('click', (e) => {
    header.style.backgroundColor = 'dodgerblue'
    e.stopPropagation()
})

navList.forEach(item => { 
    // TODO: Figure out how to add loop for DRY code
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

logoHead.style.color = "black"
logoHead.addEventListener('click', (event) => {
    event.target.style.transform = 'scale(1.5)'
    event.target.style.color = 'crimson'
    event.stopPropagation()
})
logoHead.addEventListener('mouseover', e => {
    e.target.textContent = 'Don\'t Click Me'
})
logoHead.addEventListener('mouseleave', e => {
    e.target.style.transform = 'scale(1.0)'
    e.target.textContent = 'OW, QUIT IT!!'
})

headLines.forEach(item => {
    item.addEventListener('dblclick', () => {
        item.textContent = 'Only once is necessary, thanks.';
    })
})

funBus.addEventListener('mouseenter', (event) => {
    event.target.src = "https://funbuses.com/oak/files/bus/buscropped-onrainbow.jpg"
    event.target.style.transition = "all 0.3s"
    event.stopPropagation()
})
funBus.addEventListener('mouseleave', e => {
    e.target.src = '/fun-bus.927a34f2.jpg'
})

// Header/Nav Event End

// Image Events Start

imgRounded.addEventListener('contextmenu', e => {
    imgRounded.src = 'https://i.chzbgr.com/full/6786128640/h24672EDA/whoa-dont-touch-me-there-that-is-my-nono-square'
    e.preventDefault();
})

midImg.addEventListener('drag', e => {
    e.target.style.display = 'none'
    // TODO: Figure out why alert method kills the GD page here, but not on load
    // alert('NOPE') ? "" : location.reload();
})

// Image Events End