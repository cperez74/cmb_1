const RII143 = [
/*inicio*/
/*A*/
{
    id: 104,
    title: "aguja 143RII",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/104.png",
    description: "aguja de carburador 143RII husqvarna"
},

{
    id: 3258,
    title: "anillos 143RII",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3258.png",
    description: "anillos 143RII husqvarna"
},

/*B*/
/*C*/
{
    id: 3549,
    title: "carburador 143RII",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3549.png",
    description: ""
},

/*D*/
/*E*/
{
    id: 2085,
    title: "empaque cilindro",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/2085.png",
    description: "empaque cilindro 143RII"
},

{
    id: 3074,
    title: "empaque motor",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3074.png",
    description: ""
},

/*F*/

{
    id: 2636,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3258.png",
    description: ""
},

/*G*/
{
    id: 1456,
    title: "guaya 143RII",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/1456.png",
    description: "guaya de aceleracion para guadaña 143RII"
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 1897,
    title: "kit carburador",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/1897.png",
    description: ""
},
/*

/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 3070,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3070.png",
    description: "polea de arranque 143RII"
},


/*Q*/
/*R*/

{
    id: 3446,
    title: "resorte embrague",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3446.png",
    description: "resorte del embrague 143RII"
},

{
    id: 3447,
    title: "retenedor grande",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3447.png",
    description: "retenedor para 143RII .x.x.x"
},

{
    id: 3449,
    title: "retenedor pequeño",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3449.png",
    description: "retenedor para 143RII .x.x.x"
},
/*S*/
/*T*/
{
    id: 3063,
    title: "tapa de arranque",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3063.png",
    description: "arranque completo para referencia 143RII."
},

{
    id: 3062,
    title: "tuerca de seguridad",
    img: "/img/img-gsl/2tiempos/guadañas/143husqv/3062.png",
    description: "tuerca de seguridad para guadaña 143RII."
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

RII143.map((i) => {
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












