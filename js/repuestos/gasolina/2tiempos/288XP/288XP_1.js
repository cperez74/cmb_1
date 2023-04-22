const XP288 = [
/*inicio*/
/*A*/
{
    id: 104,
    title: "aguja carburador 288xp",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/104.png",
    description: "aguja para carburador 288xp"
},

{
    id: 1540,
    title: "amortiguador tanque 288xp",
    img: "/img/img-gsl/2tiempos/motosierra/288xp/1540.jpg",
    description: "amortiguador para tanque de combustible 288xp"
},

{
    id: 2663,
    title: "anillos 288xp",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/2663.png",
    description: "anillos 288xp."
},

/*B*/
{
    id: 3140,
    title: "brida carburador",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/3140.png",
    description: "base carburador (brida) 288xp"
},

/*C*/
{
    id: 1894,
    title: "canastilla campana",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/1894.png",
    description: "canastilla campana 288xp "
},

{
    id: 1116,
    title: "canastilla piston",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/1116.png",
    description: "canastilla piston 288xp "
},

{
    id: 3136,
    title: "cuña cigueñal",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/3136.png",
    description: "cuña cigueñal 288xp "
},

{
    id: 153,
    title: "campana",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/153.png",
    description: "campana completa 288xp "
},

/*D*/
/*E*/
/*
{
    id: 2029,
    title: "empaque motor",
    img: "/img/img-gsl/2tiempos/motosierra/288xp/2029.png",
    description: "empaque motor completo"
},
*/

{
    id: 1541,
    title: "esparrago 288xp",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/1541.png",
    description: "tornillo esparrago para 288xp"
},

/*F*/
/*
{
    id: 366,
    title: "filtro de aire",
    img: "/img/img-gsl/2tiempos/motosierra/288xp/366.png",
    description: "elemento filtro de aire 288xp"
},
*/

{
    id: 1275,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/1275.png",
    description: "filtro de combustible ceramica punta delgada"
},

/*G*/
/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 162,
    title: "kit carburador 288xp",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/162.png",
    description: "juego de diafragmas internos del carburador 288xp"
},

{
    id: 235,
    title: "kit piston 288xp",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/235.png",
    description: "este kit esta incluye anillos, piston, pasador y seguro de pasador"
},

/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/

/*
{
    id: 29,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/motosierra/288xp/29.png",
    description: "polea de arranque 288xp"
},
*/

/*Q*/
/*R*/
{
    id: 436,
    title: "resorte arranque",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/436.png",
    description: "cinta o resorte de arranque para motosierra 288xp"
},

{
    id: 435,
    title: "resorte embrague",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/435.png",
    description: "resorte embrague motosierra 288xp"
},

{
    id: 3265,
    title: "retenedor 288xp",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/3265.png",
    description: "retenedor de aceite 288xp"
},


/*S*/
{
    id: 101,
    title: "sin fin 288xp",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/101.png",
    description: "sin fin para motosierra 288xp"
},


/*T*/
{
    id: 885,
    title: "tornillo cilindro",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/885.png",
    description: "tornillo cilindro 288xp"
},

{
    id: 536,
    title: "tuerca esparrago",
    img: "/img/img-gsl/2tiempos/motosierras/288xp/536.png",
    description: "tuerca esparrago 288xp/cs52/5200"
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

XP288.map((i) => {
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












