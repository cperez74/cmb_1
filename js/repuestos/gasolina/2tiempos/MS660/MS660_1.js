const MS660 = [
/*inicio*/
/*A*/
{
    id: 149,
    title: "aguja de alta",
    img: "/img/img-gsl/2tiempos/motosierras/660/149.png",
    description: "aguja de alta (aire) ms660 para modelo WJ-67A"
},

{
    id: 0000,
    title: "aguja de alta",
    img: "/img/img-gsl/2tiempos/motosierras/660/149.png",
    description: "aguja de alta (aire) ms660 para modelo WJ-69B"
},

{
    id: 3604,
    title: "aguja de baja",
    img: "/img/img-gsl/2tiempos/motosierras/660/3604.png",
    description: "aguja de baja (gasolina) ms660 para modelo WJ-67A"
},

{
    id: 856,
    title: "aguja de baja",
    img: "/img/img-gsl/2tiempos/motosierras/660/856.png",
    description: "aguja de baja (gasolina) ms660 para modelo WJ-69B"
},

{
    id: 557,
    title: "aguja de carburador",
    img: "/img/img-gsl/2tiempos/motosierras/660/557.png",
    description: "aguja punzon carburador ms660"
},

{
    id: 3668,
    title: "aguja de minimo",
    img: "/img/img-gsl/2tiempos/motosierras/660/3668.png",
    description: "aguja minimo de gasolina  WJ-67A, WJ-69B"
},

{
    id: 344,
    title: "amortiguador grande",
    img: "/img/img-gsl/2tiempos/motosierras/660/344.png",
    description: "amortiguador grande motosierra ms660"
},

{
    id: 345,
    title: "amortiguador mediano",
    img: "/img/img-gsl/2tiempos/motosierras/660/345.png",
    description: "amortiguador mediano ms660"
},

{
    id: 346,
    title: "amortiguador pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/660/346.png",
    description: "amortiguador pequeño ms660"
},

{
    id: 0000,
    title: "amortiguador platina.",
    img: "/img/img-gsl/2tiempos/motosierras/660/532.png",
    description: "amortiguador de platina ms660 macho"
},

{
    id: 532,
    title: "amortiguador platina.",
    img: "/img/img-gsl/2tiempos/motosierras/660/532.png",
    description: "amortiguador de platina ms660 hembra"
},

{
    id: 868,
    title: "anillos 660",
    img: "/img/img-gsl/2tiempos/motosierras/660/868.png",
    description: "anillos ms660 54mm"
},

{
    id: 533,
    title: "arandela campana",
    img: "/img/img-gsl/2tiempos/motosierras/660/533.png",
    description: "arandela con clip para campana ms660"
},


/*B*/
{
    id: 663,
    title: "bomba de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/660/663.png",
    description: "bomba de lubricacion (aceite) ms660"
},

/*C*/
{
    id: 228,
    title: "campana 660",
    img: "/img/img-gsl/2tiempos/motosierras/660/228.png",
    description: "campana completa ms660 incluye (arandela con clip, canastilla campana, piñon loco 404)"
},

{
    id: 788,
    title: "canastilla campana",
    img: "/img/img-gsl/2tiempos/motosierras/660/788.png",
    description: "canastilla campana ms660"
},

{
    id: 21,
    title: "canastilla piston",
    img: "/img/img-gsl/2tiempos/motosierras/660/21.png",
    description: "canastilla piston ms660"
},

{
    id: 3378,
    title: "carburador",
    img: "/img/img-gsl/2tiempos/motosierras/660/3378.png",
    description: "carburador ms660"
},

{
    id: 348,
    title: "cilindro",
    img: "/img/img-gsl/2tiempos/motosierras/660/348.jpg",
    description: "kit cilindro ms660 (piston, anillos, pasador, clip pasador, cilindro)"
},

{
    id: 533,
    title: "clip arandela",
    img: "/img/img-gsl/2tiempos/motosierras/660/533.png",
    description: "clip arandela campana ms660"
},


/*final*/
]


const piece = document.querySelector(".card");

MS660.map((i) => {
    piece.innerHTML += `
    <div class="topic">
        <article>
            <div class="picture">
                <img src="${i.img}" alt="">
            </div>

            <div class="title">
                <p class="tag">${i.title}</p>
                <p class="detail">${i.description}</p>
                <p class="item">${i.id}</p>
            </div>
        </article>
    </div>`;
});












