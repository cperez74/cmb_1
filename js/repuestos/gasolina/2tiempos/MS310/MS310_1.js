const MS310 = [
/*inicio*/
/*A*/
{
    id: 3135,
    title: "amortiguador grande",
    img: "/img/img-gsl/2tiempos/motosierras/310/3135.png",
    description: "amortiguador grande para motosierra ms310"
},

{
    id: 3348,
    title: "amortiguador pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/310/3348.png",
    description: "amortiguador pequeño para motosierra ms310"
},

{
    id: 2171,
    title: "anillos ms310",
    img: "/img/img-gsl/2tiempos/motosierras/310/868.png",
    description: "anillos para motosierra ms310 47mm"
},

{
    id: 533,
    title: "arandela con pin",
    img: "/img/img-gsl/2tiempos/motosierras/310/533.png",
    description: ""
},

{
    id: 1.1,
    title: "arandela embrague",
    img: "/img/img-gsl/2tiempos/motosierras/310/1.1.png",
    description: ""
},

/*B*/
/*C*/
/*D*/
/*E*/
{
    id: 942,
    title: "esparrago grande",
    img: "/img/img-gsl/2tiempos/motosierras/310/942.png",
    description: ""
},

{
    id: 439,
    title: "esparrago pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/310/439.png",
    description: ""
},


/*F*/
{
    id: 2978,
    title: "filtro de aire",
    img: "/img/img-gsl/2tiempos/motosierras/310/2978.png",
    description: "elemento filtro de aire ms 310"
},

{
    id: 3578,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/310/181.png",
    description: "filtro de combustible punta pequeña"
},


/*G*/
{
    id: 3126,
    title: "garganta desfogue",
    img: "/img/img-gsl/2tiempos/motosierras/310/3126.png",
    description: "conector de desfogue cilindro exosto"
},


/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 2976,
    title: "kit carburador",
    img: "/img/img-gsl/2tiempos/motosierras/310/2976.png",
    description: "kit carburador ms 310 - 361"
},

{
    id: 2168,
    title: "kit piston",
    img: "/img/img-gsl/2tiempos/motosierras/310/2168.png",
    description: "kit piston ms 310 incluye (piston, anillos, pasador y seguros del pasador)"
},

{
    id: 3125,
    title: "kit tensor cadena",
    img: "/img/img-gsl/2tiempos/motosierras/310/3125.png",
    description: "tensor para cadena ms310"
},


/*L*/
/*M*/
{
    id: 2267,
    title: "manguera de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/310/2267.png",
    description: "manguera para el deposito de aceite ms 310"
},

{
    id: 3687,
    title: "manguera de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/310/3687.png",
    description: ""
},


/*N*/
/*Ñ*/
/*O*/
/*P*/

/*
{
    id: 0000,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/310/0000.png",
    description: ""
},
*/

/*Q*/
/*R*/
{
    id: 2158,
    title: "resorte de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/310/2158.png",
    description: "resorte o cinta de arranque para motosierra ms310"
},

{
    id: 3408,
    title: "resorte embrague",
    img: "/img/img-gsl/2tiempos/motosierras/310/3408.png",
    description: "resorte embrague para motosierra ms310"
},

{
    id: 883,
    title: "retenedor",
    img: "/img/img-gsl/2tiempos/motosierras/310/883.png",
    description: "retenedor de aceite referencia 17x30x5"
},


/*S*/
{
    id: 3508,
    title: "sin fin",
    img: "/img/img-gsl/2tiempos/motosierras/310/2268.png",
    description: "piñon sin fin ms 310"
},

/*T*/
{
    id: 3461,
    title: "tapa de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/310/3461.png",
    description: "tapa deposito de aceite"
},

/*final*/
]


const piece = document.querySelector(".card");

MS310.map((i) => {
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












