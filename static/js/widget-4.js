setTimeout(() => {
    const URLactual = window.location.pathname
    const body = document.getElementsByTagName('body')[0]
    
    if(URLactual === '/' || URLactual === '/p/contacto' || URLactual === '/rompecabezas-y-sus-beneficios' || URLactual === '/55-feria-del-juguete' || URLactual === '/mayoristas' || URLactual === '/nosotros'){
        body.style.backgroundImage = 'url(https://iili.io/HrwnqwQ.png)'
        body.style.backgroundSize = 'contain'
    }   

},500)

let menuMobileCategorias = document.getElementsByClassName('menu-mobile-categorias')
let menuMobileCategoriasDiv = document.getElementsByClassName('menu-mobile-categorias-div')
let categoriasMobile = document.getElementsByClassName('nav-default-list--vertical__item')
let arrowMobile = document.getElementsByClassName('arrow-mobile')

categoriasMobile[1].addEventListener('click', () => {
    categoriasMobile[2].classList.toggle('invisible')
    categoriasMobile[11].classList.toggle('invisible')
    categoriasMobile[18].classList.toggle('invisible')
    categoriasMobile[28].classList.toggle('invisible')

    arrowMobile[0].classList.toggle('rotate')
})

categoriasMobile[2].addEventListener('click', () => {
    categoriasMobile[3].classList.toggle('invisible')
    categoriasMobile[4].classList.toggle('invisible')
    categoriasMobile[5].classList.toggle('invisible')
    categoriasMobile[6].classList.toggle('invisible')
    categoriasMobile[7].classList.toggle('invisible')

    categoriasMobile[8].classList.add('invisible')
    categoriasMobile[9].classList.add('invisible')
    categoriasMobile[10].classList.add('invisible')

    arrowMobile[1].classList.toggle('rotate')
})

categoriasMobile[7].addEventListener('click', () => {
    categoriasMobile[8].classList.toggle('invisible')
    categoriasMobile[9].classList.toggle('invisible')
    categoriasMobile[10].classList.toggle('invisible')

    arrowMobile[2].classList.toggle('rotate')
})

categoriasMobile[11].addEventListener('click', () => {
    categoriasMobile[12].classList.toggle('invisible')
    categoriasMobile[13].classList.toggle('invisible')
    categoriasMobile[14].classList.toggle('invisible')
    categoriasMobile[15].classList.toggle('invisible')
    categoriasMobile[16].classList.toggle('invisible')
    categoriasMobile[17].classList.toggle('invisible')

    arrowMobile[3].classList.toggle('rotate')
})

categoriasMobile[18].addEventListener('click', () => {
    categoriasMobile[19].classList.toggle('invisible')
    categoriasMobile[20].classList.toggle('invisible')
    categoriasMobile[21].classList.toggle('invisible')
    categoriasMobile[22].classList.toggle('invisible')
    categoriasMobile[23].classList.toggle('invisible')
    categoriasMobile[24].classList.toggle('invisible')
    categoriasMobile[25].classList.toggle('invisible')
    categoriasMobile[26].classList.toggle('invisible')
    categoriasMobile[27].classList.toggle('invisible')

    arrowMobile[4].classList.toggle('rotate')
})


setTimeout(() => {

    let topPosition = document.getElementsByClassName('destacadas-section')[0].offsetTop
    
    let arrows = document.getElementsByClassName('arrow-d')
    
    arrows[0].style.top = `${topPosition + 143}px`
    arrows[0].style.left = `20px`
    arrows[1].style.top = `${topPosition + 143}px`
    arrows[1].style.left = `${screen.width - arrows[1].offsetWidth - 20}px`

}, 1000)