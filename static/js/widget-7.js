
const URLactual = window.location.pathname

if(URLactual === '/mayoristas'){

    // document.getElementById('root-app').style.backgroundImage = 'url(https://iili.io/HUQ3hbt.jpg)'
    // document.getElementById('root-app').style.backgroundSize = 'contain'

    if (document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        main.innerHTML = `
        <section class="mayoristas-section">
        <div class="may-div">
            <div class="may-header">
                <div class="may-header-h2">
                    <img src="https://iili.io/HUQ3XeI.png"/>
                </div>
                <div class="may-header-logo">
                    <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/26/1359504426/logo-2023050209373064600.webp"/>
                </div>
            </div>
            <div class="may-text">
                <p>Si tenés una tienda y querés vender nuestros productos podés contactarte con nuestro equipo de ventas</p>
                <p>Mandanos un mail a <a href="mailto:contacto@barcodepapel.com.ar"><strong>contacto@barcodepapel.com.ar</strong></a></p>
                <p>O mandanos un mensaje al <a href="https://api.whatsapp.com/send?phone=5491151751717" target="_blank" ><strong class="wp">+54 9 1151751717</strong></a></p>
                <div>
                    <img src="https://iili.io/HUrBS1V.png"/>
                </div>
            </div>
            
            <a href="https://pdfhost.io/v/nuUa6RlPc_CATALOGO_BARCO_DE_PAPEL_2023" target="_blank" class="may-catalogo">
                <img src="https://iili.io/HUrqJat.png"/>
            </a>
        </div>
    </section>
        `

        throw new Error("Error controlado");
    } else if (document.querySelector(".ui-search--zrp")) {
        const ui_search = document.querySelector(".ui-search--zrp");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        main.innerHTML = `        
        <section class="mayoristas-section">
        <div class="may-div">
            <div class="may-header">
                <div class="may-header-h2">
                    <img src="https://iili.io/HUQ3XeI.png"/>
                </div>
                <div class="may-header-logo">
                    <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/26/1359504426/logo-2023050209373064600.webp"/>
                </div>
            </div>
            <div class="may-text">
                <p>Si tenés una tienda y querés vender nuestros productos podés contactarte con nuestro equipo de ventas</p>
                <p>Mandanos un mail a <a href="mailto:contacto@barcodepapel.com.ar"><strong>contacto@barcodepapel.com.ar</strong></a></p>
                <p>O mandanos un mensaje al <a href="https://api.whatsapp.com/send?phone=5491151751717" target="_blank" ><strong class="wp">+54 9 1151751717</strong></a></p>
                <div>
                    <img src="https://iili.io/HUrBS1V.png"/>
                </div>
            </div>
            
            <a href="https://pdfhost.io/v/nuUa6RlPc_CATALOGO_BARCO_DE_PAPEL_2023" target="_blank" class="may-catalogo">
                <img src="https://iili.io/HUrqJat.png"/>
            </a>
        </div>
    </section>`

        
throw new Error("Error controlado");
    }
}
console.log(7)