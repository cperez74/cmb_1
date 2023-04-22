const MS382 = [
/*inicio*/
/*A*/
{
    id: 2731,
    title: "anillos ms382",
    img: "/img/img-gsl/2tiempos/motosierras/382/868.png",
    description: ""
},

{
    id: 000,
    title: "amortiguador grande",
    img: "/img/img-gsl/2tiempos/motosierras/382/929.png",
    description: "amortiguador grande ms382"
},

{
    id: 000,
    title: "amortiguador mediano",
    img: "/img/img-gsl/2tiempos/motosierras/382/468.png",
    description: "amortiguador mediano ms382"
},

{
    id: 000,
    title: "amortiguador pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/382/1970.png",
    description: "amortiguador pequeño ms382"
},

/*B*/
/*C*/
/*D*/
/*E*/
{
    id: 3129,
    title: "empaque motor 382",
    img: "/img/img-gsl/2tiempos/motosierras/382/3129.png",
    description: "empaque motor completo ms382"
},

/*F*/
{
    id: 3673,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/382/3673.png",
    description: "filtro de combustible ms382"
},

/*G*/
{
    id: 3132,
    title: "garganta desfogue",
    img: "/img/img-gsl/2tiempos/motosierras/382/3132.png",
    description: "codo de admision o garganta desfogue"
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 3424,
    title: "kit carburador",
    img: "/img/img-gsl/2tiempos/motosierras/382/3424.png",
    description: "elementos internos de carburador"
},

/*
{
    id: 2636,
    title: "kit tensor",
    img: "/img/img-gsl/2tiempos/motosierras/382/0000.png",
    description: ""
},
*/

{
    id: 3587,
    title: "kit trinquete",
    img: "/img/img-gsl/2tiempos/motosierras/382/3587.png",
    description: "juego de trinquetes completo de ms382"
},
/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
/*
{
    id: 2636,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/382/0000.png",
    description: ""
},
*/
/*Q*/
/*R*/
/*
{
    id: 2636,
    title: "resorte de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/382/0000.png",
    description: ""
},
*/

{
    id: 435,
    title: "resorte embrague",
    img: "/img/img-gsl/2tiempos/motosierras/382/435.png",
    description: "resorte embrague ms382"
},

{
    id: 3716,
    title: "retenedor grande",
    img: "/img/img-gsl/2tiempos/motosierras/382/3716.png",
    description: "retenedor ms382 17x37x5"
},

{
    id: 3355,
    title: "retenedor pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/382/3355.png",
    description: "retenedor ms382 15x22x4"
},

/*S*/
{
    id: 2636,
    title: "sin fin",
    img: "/img/img-gsl/2tiempos/motosierras/382/3508.png",
    description: "piñon sin fin ms382 para bomba de lubricacion"
},

/*T*/
{
    id: 3461,
    title: "tapa de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/382/3461.png",
    description: "tapa deposito de aceite"
},

{
    id: 2187,
    title: "tapa de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/382/2187.png",
    description: "tapa deposito de combustible"
},

/*U*/
/*V*/
/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

MS382.map((i) => {
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












