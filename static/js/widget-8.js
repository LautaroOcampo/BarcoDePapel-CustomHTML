
const URLactual = window.location.pathname

if(URLactual === '/nosotros'){

    document.getElementById('root-app').style.backgroundImage = 'url(https://iili.io/HUQ3hbt.jpg)'
    document.getElementById('root-app').style.backgroundSize = 'contain'

    if (document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        main.innerHTML = `
        <section class="mayoristas-section">
            <div class="nos-div">
                <div class="nos-header">
                    <div class="nos-header-h2">
                        <img src="https://iili.io/HUrMoIs.png"/>
                    </div>
                    <div class="nos-header-flecha">
                        <img src="https://iili.io/HUrMGCx.png"/>
                    </div>
                    <div class="nos-header-logo">
                        <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/26/1359504426/logo-2023050209373064600.webp"/>
                    </div>
                </div>
                <div class="nos-text">
                    <p>Somos una empresa familiar que nació en el 2016. Comenzamos creando juegos que diviertan y estimulen a los pequeños de nuestra familia, aquellos primeros y tan especiales clientes. En 2018 dejamos nuestra querida cocina en Parque Chacabuco, para mudarnos a unas cuadras nomás a lo que hoy es nuestra fábrica de juegos y juguetes. Muchos se sumaron en el camino y hoy somos un equipo que se divierte mientras trabaja creando y armando productos nobles y duraderos para toda la familia.</p>
                    <p>“Todos los aprendizajes más importantes de la vida, se hacen jugando”<br>Francesco Tonucci</p>
                </div>
                    <div class="nos-video-section">
                        <div class="nos-video-div">
                            <iframe src="https://www.youtube.com/embed/psiOM85PdTs" width="560" height="315"
                            title="YouTube video player"
                           loading="lazy" frameborder="0"
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                 allowfullscreen></iframe>
                            <div>
                                <img class="flecha-arriba" src="https://iili.io/HUrMCpn.png"/>
                                <img class="conocenos" src="https://iili.io/HUrMBkX.png"/>
                            </div>
                        </div>
                        <div class="nos-video-img">
                            <img src="https://iili.io/HUrMxhG.png">
                        </div>                        
                    <div>
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
            <div class="nos-div">
                <div class="nos-header">
                    <div class="nos-header-h2">
                        <img src="https://iili.io/HUrMoIs.png"/>
                    </div>
                    <div class="nos-header-flecha">
                        <img src="https://iili.io/HUrMGCx.png"/>
                    </div>
                    <div class="nos-header-logo">
                        <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/26/1359504426/logo-2023050209373064600.webp"/>
                    </div>
                </div>
                <div class="nos-text">
                    <p>Somos una empresa familiar que nació en el 2016. Comenzamos creando juegos que diviertan y estimulen a los pequeños de nuestra familia, aquellos primeros y tan especiales clientes. En 2018 dejamos nuestra querida cocina en Parque Chacabuco, para mudarnos a unas cuadras nomás a lo que hoy es nuestra fábrica de juegos y juguetes. Muchos se sumaron en el camino y hoy somos un equipo que se divierte mientras trabaja creando y armando productos nobles y duraderos para toda la familia.</p>
                    <p>“Todos los aprendizajes más importantes de la vida, se hacen jugando”<br>Francesco Tonucci</p>
                </div>
                    <div class="nos-video-section">
                        <div class="nos-video-div">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/psiOM85PdTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div>
                                <img class="flecha-arriba" src="https://iili.io/HUrMCpn.png"/>
                                <img class="conocenos" src="https://iili.io/HUrMBkX.png"/>
                            </div>
                        </div>
                        <div class="nos-video-img">
                            <img src="https://iili.io/HUrMxhG.png">
                        </div>                        
                    <div>
            </div>
        </section>
        `
        throw new Error("Error controlado");
    }
}