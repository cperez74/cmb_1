const TL43 = [
/*inicio*/
/*E*/
{
    id: 1511,
    title: "eje 9 estrias",
    img: "../../../img/img-dsl/",
    description: ""
},

{
    id: 1552,
    title: "elemento filtro de aire.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1552.png",
    description: "elemnto filtro de aire espuma tl43."
},

{
    id: 1145,
    title: "embrague",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1145.png",
    description: "embrague completo para tl43."
},

{
    id: 91,
    title: "empaque cilindro",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/91.png",
    description: "empaque cilindro para guadaña tl43 (bc430)."
},

/*F*/
{
    id: 3624,
    title: "filtro de aire",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/",
    description: ""
},

{
    id: 72,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/72.png",
    description: "filtro de combustible pequeño para tl43 (bc430)."
},

{
    id: 3001,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/3001.png",
    description: "filtro de combustible grande para tl43 (bc430)."
},

{
    id: 3579,
    title: "filtro de combustible ceramica",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/3579.png",
    description: "filtro de combustible de ceramica para guadaña."
},

/*G*/
{
    id: 960,
    title: "gatillo comando #1",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/960.png",
    description: "gatillo de acelerador de guadaña tl43 - tl52"
},

{
    id: 277,
    title: "gatillo comando #2",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/277.png",
    description: "gatillo de acelerador # 2 de guadaña tl43 - tl52"
},

{
    id: 802,
    title: "guaya acelerador #1",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/.png",
    description: ""
},

{
    id: 1085,
    title: "guaya acelerador #2",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/.png",
    description: ""
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 2603,
    title: "kit buje 26mm.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/2603.png",
    description: "kit buje para eje de guadaña incluye 5 unidades."
},

{
    id: 3158,
    title: "kit buje 28mm.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/2603.png",
    description: "kit buje para eje de guadaña incluye 5 unidades."
},

{
    id: 1897,
    title: "kit carburador.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1897.png",
    description: "en este kit de carburador estan todos los componentes innternos del carburador."
},

{
    id: 2833,
    title: "kit empaques.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/2839.png",
    description: "empaque motor para guadaña completo"
},

{
    id: 73,
    title: "kit manguera.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/73.png",
    description: "juego de mangueras de combustible con base"
},

{
    id: 2592,
    title: "kit piñones.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/2592.png",
    description: "este juego de piñones incluye un piñon de ataque y un piñon corona."
},

{
    id: 1578,
    title: "kit piston.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/3697.png",
    description: "este kit incluye piston, anillos, pasador, clip pasador, canastilla piston."
},

{
    id: 2421,
    title: "kit retenedor",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/2421.png",
    description: "este kit incliuye retenedor xxx y retenedor xxx."
},
/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
/*Q*/
/*R*/
/*S*/
/*T*/
/*U*/
/*V*/
/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

TL43.map((i) => {
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












