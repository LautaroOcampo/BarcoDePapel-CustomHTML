let producto = document.getElementsByClassName('nav-default-list--horizontal__attribute')[1]
let categoriasPopover = document.getElementsByClassName('categorias-popover-ul')
let subcategoriasPopover = document.getElementsByClassName('subcategorias-ul')
let categoriasLeave = document.getElementsByClassName('categorias-leave')
let madera = document.getElementsByClassName('subcategorias-popover')[4]


producto.addEventListener('mouseenter', () => {
    for(let i = 0 ; i < categoriasPopover.length ; i++){
        categoriasPopover[i].classList.remove('invisible2')
    }
})
producto.addEventListener('mouseleave', () => {
    for(let i = 0 ; i < categoriasPopover.length ; i++){
        categoriasPopover[i].classList.add('invisible2')
    }
})

categoriasPopover[0].addEventListener('mouseenter', () => {
    subcategoriasPopover[0].classList.remove('invisible2')
})
madera.addEventListener('mouseenter', () => {
    subcategoriasPopover[1].classList.remove('invisible2')
})
categoriasPopover[1].addEventListener('mouseenter', () => {
    subcategoriasPopover[2].classList.remove('invisible2')
})
categoriasPopover[2].addEventListener('mouseenter', () => {
    subcategoriasPopover[3].classList.remove('invisible2')
})
categoriasLeave[0].addEventListener('mouseleave', () => {
    subcategoriasPopover[0].classList.add('invisible2')
})
categoriasLeave[1].addEventListener('mouseleave', () => {
    subcategoriasPopover[1].classList.add('invisible2')
})
categoriasLeave[2].addEventListener('mouseleave', () => {
    subcategoriasPopover[2].classList.add('invisible2')
})
categoriasLeave[3].addEventListener('mouseleave', () => {
    subcategoriasPopover[3].classList.add('invisible2')
})



const URLactual = window.location.pathname

let populares = document.getElementsByClassName('populares-section')[0]
let destacadasSection = document.getElementsByClassName('destacadas-section')[0]
let videosSection = document.getElementsByClassName('video-section')[0]
let edadesSection = document.getElementsByClassName('edades-section')[0]
let blogSection = document.getElementsByClassName('blog-section')[0]
let olas = document.getElementsByClassName('olas')

if(URLactual === '/'){
    populares.classList.remove('invisible')
    destacadasSection.classList.remove('invisible')
    videosSection.classList.remove('invisible')
    edadesSection.classList.remove('invisible')
    blogSection.classList.remove('invisible')
    for(let i = 0 ; i < olas.length-1 ; i++){
        olas[i].classList.remove('invisible')
    }

}

setTimeout(() => {
    document.getElementsByClassName('bug')[0].style.color('#ffffff')
    document.getElementsByClassName('bug')[0].classList.add('bug')
},500)

let tituloCategoria = document.getElementsByClassName('ui-search-breadcrumb__title')[0]

const cambiarTituloCategoria = (codigo, categoria) => {
    if(URLactual === `/${codigo}` || URLactual === `/${codigo}_DisplayType_G`){
        tituloCategoria.innerText = categoria
        document.title = `Barco de Papel | ${categoria}`
    }else if(URLactual === codigo){
        tituloCategoria.innerText = categoria
        document.title = `Barco de Papel | ${categoria}`
    }
}

setTimeout(() => {
    
    cambiarTituloCategoria('bdp01','Emociones')
    cambiarTituloCategoria('bdp02','Yoga y mindfulness')
    cambiarTituloCategoria('bdp03','Imaginación y creatividad')
    cambiarTituloCategoria('bdp04','Conversación')
    cambiarTituloCategoria('bdp05','Vocabulario')
    cambiarTituloCategoria('bdp06','Lectoescritura')
    cambiarTituloCategoria('bdp07','Matemáticas')
    cambiarTituloCategoria('bdp08','Resolución de problemas')
    cambiarTituloCategoria('bdp09','Inglés')
    
    cambiarTituloCategoria('bdp31','Juegos de mesa')
    cambiarTituloCategoria('bdp32','Cartas didácticas')
    cambiarTituloCategoria('bdp33','Libros móviles')
    cambiarTituloCategoria('bdp34','Rompecabezas')

    cambiarTituloCategoria('bdp41','Rompecabezas')
    cambiarTituloCategoria('bdp42','Juegos de memoria')
    cambiarTituloCategoria('bdp43','Primeros encastres')
    
    cambiarTituloCategoria('/_DisplayType_G_MIN*RECOMMENDED*AGE_1a%C3%B1os-3a%C3%B1os_NoIndex_True','+18 Meses')
    cambiarTituloCategoria('/_DisplayType_G_MIN*RECOMMENDED*AGE_3a%C3%B1os-5a%C3%B1os_NoIndex_True','+3 Años')
    cambiarTituloCategoria('/_DisplayType_G_MIN*RECOMMENDED*AGE_5a%C3%B1os-6a%C3%B1os_NoIndex_True','+5 Años')
    cambiarTituloCategoria('/_DisplayType_G_MIN*RECOMMENDED*AGE_6a%C3%B1os-8a%C3%B1os_NoIndex_True','+6 Años')
    cambiarTituloCategoria('/_DisplayType_G_MIN*RECOMMENDED*AGE_8a%C3%B1os-12a%C3%B1os_NoIndex_True','+8 Años')
    cambiarTituloCategoria('/_DisplayType_G_MIN*RECOMMENDED*AGE_12a%C3%B1os-*_NoIndex_True','+12 Años')

    cambiarTituloCategoria('bdp99','Combos')

}, 500)


let arrowSection = document.getElementsByClassName('arrow-destacadas')[0]
let arrows = document.getElementsByClassName('arrow-d')
let position = 1

arrows[0].addEventListener('click', () => {
    destacadasSection.scrollLeft -= window.innerWidth;
    position--
    if(position === 1){
        arrows[0].classList.add('invisible')
    }else if(position < 4){
        arrows[1].classList.remove('invisible')
    }
  });

arrows[1].addEventListener('click', () => {
    destacadasSection.scrollLeft += window.innerWidth;
    position++
    if(position === 4){
        arrows[1].classList.add('invisible')
    }else if(position > 1){
        arrows[0].classList.remove('invisible')
    }
});

let lupa = document.querySelectorAll('.explorer-header__svg path')[1]
let form = document.getElementById('search-form')
let input = document.getElementById('search-input')
let boton = document.getElementById('nav-search-button')

boton.addEventListener('click', () => {

    lupa.style.fill = 'rgb(133, 4, 226)'
    form.style.backgroundColor = '#ffffff'

})

input.addEventListener('focus', () => {
    searchInput.style.outline = 'none';
    searchInput.style.border = 'none';
  });

