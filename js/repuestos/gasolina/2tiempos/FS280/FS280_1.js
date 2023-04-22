const FS280 = [
/*inicio*/
/*A*/
{
    id: 550,
    title: "anillos fs 280",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/550.png",
    description: "anillos 40mm"
},

{
    id: 1587,
    title: "arandela proteccion",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/1587.png",
    description: "arandela de proteccion para la transmision"
},

/*B*/
/*C*/
{
    id: 3611,
    title: "canastilla piston fs280",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/3611.png",
    description: "canastilla, rodamiento de aguja o rolin de piston fs280"
},

{
    id: 1.66,
    title: "campana fs280",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/1.66.png",
    description: "campana de cuadrante para fs280"
},

{
    id: 3067,
    title: "conector filtro aire",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/3067.png",
    description: "garganta desfogue o codo admision"
},

/*D*/
/*E*/
{
    id: 1589,
    title: "elemento filtro aire",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/1589.png",
    description: "elemento espuma para filtro de aire"
},

/*F*/
{
    id: 3001,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/3001.png",
    description: "diltro de combustible pequeño"
},

/*G*/
{
    id: 3490,
    title: "guaya fs280",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/3490.png",
    description: "guaya de aceleracion"
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 189,
    title: "kit carburador",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/189.png",
    description: "elementos internos del carburador"
},

{
    id: 3491,
    title: "kit piston",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/3491.png",
    description: "incluye piston, anillos, pasador y pin pasador"
},

/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 495,
    title: "piñon eje fs280",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/495.png",
    description: "piñon eje o pivote para transmision fs280"
},

{
    id: 1.67,
    title: "placa de apriete",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/1.67.png",
    description: "arandela plato fs280"
},

{
    id: 188,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/188.png",
    description: "polea de arranque fs280"
},

/*Q*/
/*R*/
{
    id: 1448,
    title: "retenedor grande",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/1448.png",
    description: "retenedor de aceite referencia 00x00x00"
},

{
    id: 3450,
    title: "retenedor pequeño",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/3450.png",
    description: "retenedor de aceite referencia 00x00x00"
},

{
    id: 551,
    title: "resorte embrague",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/551.png",
    description: "resorte embrague o de cloche"
},

/*S*/
/*T*/
{
    id: 3141,
    title: "tapa de arranque",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/3141.png",
    description: "tapa de arranque completa"
},

{
    id: 3292,
    title: "tuerca ",
    img: "/img/img-gsl/2tiempos/guadañas/fs280/3292.png",
    description: "tuerca de seguridad transmision"
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

FS280.map((i) => {
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












