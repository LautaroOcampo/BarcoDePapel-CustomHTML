(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://http2.mlstatic.com/storage/mshops-appearance-api/images/26/1359504426/logo-2023050209373064600.webp';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://http2.mlstatic.com/storage/mshops-appearance-api/images/26/1359504426/logo-2023050209373064600.webp';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);

let components = document.getElementsByClassName('component-wrapper')
let video = document.getElementsByClassName('video-section')[0]
let footer = document.getElementsByClassName('explorer-footer-contact-container')[0]
let populares = document.getElementsByClassName('populares-section')[0]
let olas = document.getElementsByClassName('olas')

const URLactual = window.location.pathname

setTimeout(() => {

    if(URLactual === '/'){
      olas[4].parentNode.insertBefore(components[2], olas[4])
      
      video.parentNode.insertBefore(components[1], video)
      
      components[1].parentNode.insertBefore(populares,components[1])
    }
    if(URLactual === '/p/contacto'){
      let imagen = document.createElement('img')
      imagen.src = 'https://iili.io/Hg0a8gt.jpg'
      if(screen.width > 800){
        imagen.classList.add('contact-img')
        document.getElementsByClassName('contact-form__input--email')[0].appendChild(imagen)
      }else{
        imagen.classList.add('contact-img-mobile')
        document.getElementsByClassName('contact-form')[0].appendChild(imagen)
      }
    }

}, 500);
