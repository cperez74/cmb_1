const TL43 = [
/*inicio*/
/*K*/
{
    id: 76,
    title: "kit trinquete.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/76.png",
    description: "este kit trinquete de guadaña incluye dos unidades con clip y resorte."
},

/*L*/
{
    id: 445,
    title: "llave bujia",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/445.png",
    description: "llave bujia 13x19."
},

/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 2746,
    title: "pasador piston",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/.png",
    description: ""
},

{
    id: 2746,
    title: "pin pasador",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/2747.png",
    description: "candado pasador para guadaña."
},

{
    id: 222,
    title: "plato inferior.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/222.png",
    description: "plato inferior para transmision de guadaña 6 estrias."
},

{
    id: 962,
    title: "plato superior.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/962.png",
    description: "plato superior para transmision de guadaña."
},

{
    id: 930,
    title: "polea de arranque #1.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/930.png",
    description: "polea de arranque para trinquete plastico de guadaña."
},

{
    id: 1899,
    title: "polea de arranque #2",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1899.png",
    description: "polea de arranque para trinquete metalico de guadaña."
},

{
    id: 722,
    title: "policut",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/722.png",
    description: "policut para guadaña tl-43."
},

{
    id: 3221,
    title: "protector de cuchilla",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/3221.png",
    description: "protector para guadaña tl43 hueco pequeño."
},

/*Q*/
/*R*/
{
    id: 133,
    title: "resorte de arranque",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/133.png",
    description: "resorte de polea de arranque para guadaña."
},

{
    id: 176,
    title: "resorte embrague #1",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/176.png",
    description: "resorte embrague para guadaña tl43 - tl52 modelo #1"
},

{
    id: 1964,
    title: "resorte embrague #2",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1964.png",
    description: "resorte embrague para guadaña tl43 - tl52 modelo #2"
},

{
    id: 1965,
    title: "resorte embrague #3",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1965.png",
    description: "resorte embrague para guadaña tl43 - tl52 modelo #3"
},

{
    id: 1896,
    title: "retenedor grande",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1896.png",
    description: "retenedor grande para guadaña xxx."
},

{
    id: 1549,
    title: "retenedor pequeño",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1549.png",
    description: "retenedor pequeño para guadaña xxx."
},

/*S*/
/*T*/
{
    id: 1147,
    title: "tanque combustible.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1147.png",
    description: "tanque de combustible para guadaña."
},

{
    id: 130,
    title: "tapa de arranque plastico.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/130.png",
    description: "tapa de arranque para guadaña trinquete plastico.."
},

{
    id: 129,
    title: "tapa de arranque metalico.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/129.png",
    description: "tapa de arranque para guadaña trinquete metalico."
},

{
    id: 3506,
    title: "tapa tanque de combustible.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/3506.png",
    description: "tapa tanque de combustible de guadaña."
},

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












