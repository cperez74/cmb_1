const GX240 = [
/*inicio*/
/*M*/
{
    id: 493,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx240/493.png",
    description: "llave de combustible macho para motor 8hp."
},

{
    id: 2172,
    title: "mango de arranque",
    img: "/img/img-gsl/4tiempos/gx240/2172.png",
    description: "mango de arranque para motor a gasolina o diesel."
},

{
    id: 1004,
    title: "medidor.",
    img: "/img/img-gsl/4tiempos/gx240/1004.png",
    description: "medidor para tanque combustible generador."
},

{
    id: 1283,
    title: "modulo sensor",
    img: "/img/img-gsl/4tiempos/gx240/1283.jpg",
    description: "alarma de aceite externa para motor a gasolina."
},

{
    id: 461,
    title: "mofle motor",
    img: "/img/img-gsl/4tiempos/gx240/461.webp",
    description: "mofle motor 9hp."
},

/*N*/
/*Ñ*/
/*O*/
{
    id: 3521,
    title: "oring carburador",
    img: "/img/img-gsl/4tiempos/gx270/3521.png",
    description: "oring base carburador"
},

/*P*/
{
    id: 1463,
    title: "piston gx240 std",
    img: "/img/img-gsl/4tiempos/gx240/564.png",
    description: "piston std de 8hp 73mm ."
},

{
    id: 564,
    title: "piston gx240 0.25",
    img: "/img/img-gsl/4tiempos/gx240/564.png",
    description: "piston sobre medida de 8hp 73mm + 0.25 (0.10)"
},

{
    id: 96,
    title: "platina guia",
    img: "/img/img-gsl/4tiempos/gx240/96.png",
    description: "platina de valvulas de 8hp"
},

{
    id: 1111,
    title: "piñon de lubricacion.",
    img: "/img/img-gsl/4tiempos/gx240/1111.png",
    description: "piñon regulador de aceite 9hp"
},

{
    id: 2718,
    title: "polea de arranque.",
    img: "/img/img-gsl/4tiempos/gx240/2718.png",
    description: "polea de arranque 8hp"
},

/*Q*/
/*R*/
{
    id: 915,
    title: "resorte arranque",
    img: "/img/img-gsl/4tiempos/gx240/915.png",
    description: "resorte de arranque para motor 8hp"
},

{
    id: 1801,
    title: "resorte aceleracion",
    img: "/img/img-gsl/4tiempos/gx240/955.png",
    description: "resorte aceleracion para motor o generador 8hp 0.3mm grosor"
},

{
    id: 2833,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx240/955.png",
    description: "resorte gobernador para generador 1mm grosor"
},

{
    id: 2833,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx240/2452.png",
    description: "resorte gobernador para motor 1.4mm grosor"
},

{
    id: 3725,
    title: "retenedor de aceite",
    img: "/img/img-gsl/4tiempos/gx240/1306.jpg",
    description: "retenedor motor de 8hp referencia 30x46x8"
},

/*S*/
{
    id: 3493,
    title: "seguro valvula de admision",
    img: "/img/img-gsl/4tiempos/gx240/3493.png",
    description: "seguro valvula de admision 8hp"
},

{
    id: 3494,
    title: "seguro valvula de escape",
    img: "/img/img-gsl/4tiempos/gx240/3494.png",
    description: "seguro valvula de escape 8hp"
},

{
    id: 1283,
    title: "sensor nivel de aceite",
    img: "/img/img-gsl/4tiempos/gx240/1283.jpg",
    description: "sensor nivel de aceite externo"
},

{
    id: 98,
    title: "suiche on/off",
    img: "/img/img-gsl/4tiempos/gx240/98.png",
    description: "suiche encendido para motor"
},

/*final*/
]


const piece = document.querySelector(".card")

GX240.map((i) => {
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












