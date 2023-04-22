const MS660 = [
/*inicio*/
/*C*/
{
    id: 3570,
    title: "cuña cigueñal",
    img: "/img/img-gsl/2tiempos/motosierras/660/3570.png",
    description: "cuña cigueñal ms660"
},

/*D*/
/*E*/
{
    id: 229,
    title: "embrague ms660",
    img: "/img/img-gsl/2tiempos/motosierras/660/229.jpg",
    description: "embrague para motosierra ms660"
},

{
    id: 2094,
    title: "empaque carter",
    img: "/img/img-gsl/2tiempos/motosierras/660/2094.jpg",
    description: "empaque motor ms660"
},

{
    id: 3260,
    title: "empaque cilindro",
    img: "/img/img-gsl/2tiempos/motosierras/660/3260.png",
    description: "empaque cilindro ms660"
},

{
    id: 559,
    title: "empaque exosto",
    img: "/img/img-gsl/2tiempos/motosierras/660/559.png",
    description: "empaque mofle o exosto ms660"
},

{
    id: 1522,
    title: "empaque motor",
    img: "/img/img-gsl/2tiempos/motosierras/660/1522.jpg",
    description: "empaque motor completo ms660"
},

{
    id: 293,
    title: "esparrago ms 660",
    img: "/img/img-gsl/2tiempos/motosierras/660/3487.png",
    description: "esparrago ms660 0x0"
},

{
    id: 3487,
    title: "esparrago ms 660",
    img: "/img/img-gsl/2tiempos/motosierras/660/293.png",
    description: "esparrago ms660 8mm x 10mm para rectificar rosca."
},

/*F*/
{
    id: 3456,
    title: "filtro de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/660/3456.png",
    description: "filtro de aceite ms660"
},

{
    id: 3569,
    title: "filtro de aire",
    img: "/img/img-gsl/2tiempos/motosierras/660/3569.png",
    description: "elemento filtro de aire ms660"
},

{
    id: 1969,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/660/1969.png",
    description: "filtro de combustible para motosierra ms660"
},

/*G*/
{
    id: 3126,
    title: "garganta desfogue",
    img: "/img/img-gsl/2tiempos/motosierras/660/3126.png",
    description: "garganta de desfogue ms660"
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 167,
    title: "kit carburador",
    img: "/img/img-gsl/2tiempos/motosierras/660/167.png",
    description: "kit diafragmas para carburador ms660"
},

{
    id: 3568,
    title: "kit piston",
    img: "/img/img-gsl/2tiempos/motosierras/660/3568.png",
    description: "kit piston ms660 incluye (piston, anillos, pasador y clip pasador)"
},

{
    id: 1115,
    title: "kit tornillo tensor",
    img: "/img/img-gsl/2tiempos/motosierras/660/1115.png",
    description: "kit tensor completo ms660"
},

/*L*/
{
    id: 432,
    title: "lamina guia",
    img: "/img/img-gsl/2tiempos/motosierras/660/432.png",
    description: "platina guia tapa cadena ms660"
},

/*M*/
{
    id: 3387,
    title: "manguera de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/660/3387.png",
    description: "manguera de aceite ms660"
},

{
    id: 3605,
    title: "manguera de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/660/3605.png",
    description: "manguera de combustible para ms660"
},

/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 3291,
    title: "pin de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/660/3291.png",
    description: "pin de arranque ms660"
},

{
    id: 3455,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/660/3455.png",
    description: "polea de arranque para motosierra ms660"
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












