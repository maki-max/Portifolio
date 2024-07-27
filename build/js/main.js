const initApp = () =>{
    const mobile = document.getElementById('mobile-menu')
    const menu = document.getElementById('mobile-button')
    const toggleMenu = () =>{
     menu.classList.toggle('hidden')
     menu.classList.toggle('flex')
    }
    mobile.addEventListener('click',toggleMenu)
    menu.addEventListener('click' , toggleMenu)
}
document.addEventListener('DOMContentLoadedd',initApp)

