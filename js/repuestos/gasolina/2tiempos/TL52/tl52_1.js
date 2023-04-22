const TL52 = [
/*inicio*/
/*A*/
    {
        id: 2636,
        title: "aguja de carburador tl43",
        img: "/img/img-gsl/2tiempos/guadañas/tl52/0000.png",
        description: ""
    },

    {
        id: 179,
        title: "anillos tl43",
        img: "/img/img-gsl/2tiempos/guadañas/tl52/179.png",
        description: "juego de anillos para guadaña de 40mm."
    },

/*B*/
{
    id: 966,
    title: "base campana 9 estrias.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/966.png",
    description: "base campana completa para 9 estrias."
},

{
    title: "base campana 7 estrias.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/966.png",
    description: "base campana completa para 7 estrias."
},

{
    id: 1188,
    title: "bobina de encendido.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/1188.png",
    description: "bobina de encendido completa para guadaña tl43."
},

{
    title: "bombin completo tl43",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/.png",
    description: "bombin con base para guadaña."
},

{
    id: 2636,
    title: "bombin grande.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/966.png",
    description: "bombin grande para guadaña fs-450"
},

{
    id: 1918,
    title: "bombin pequeño.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/1918.png",
    description: "bombin pequeño para tl43."
},

{
    id: 1146,
    title: "brida carburador.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/1146.png",
    description: "brida base carburador tl43 (bc430)."
},

/*C*/
{
    title: "campana 7 estrias.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/0000.png",
    description: "campana de 7 estrias."
},

{
    id: 406,
    title: "campana 9 estrias.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/406.png",
    description: "campana para guadaña 9 estrias."
},

{
    id: 1801,
    title: "canastilla piston tl43.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/0000.png",
    description: "."
},

{
    id: 2833,
    title: "capuchon bujia",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/0000.png",
    description: "diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
},

{
    id: 3549,
    title: "carburador.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/3549.png",
    description: "carburador para guadaña."
},

{
    id: 1491,
    title: "cazuela de arranque",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/0000.png",
    description: "."
},

{
    id: 132,
    title: "cigueñal.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/132.png",
    description: "cigueñal para guadaña tl43."
},

{
    id: 3594,
    title: "cilindro.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/3594.png",
    description: "cilindro completo para guadaña de 40mm (piston, anillos, pasador, candado pasador, canastilla piston.)."
},

{
    id: 968,
    title: "comando aceleracion #1.",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/968.png",
    description: "comando aceleracion completo para guadaña"
},

{
    id: 2833,
    title: "comando aceleracion #2",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/0000.png",
    description: "."
},

/*D*/
/*E*/
{
    title: "eje 7 estrias",
    img: "/img/img-gsl/2tiempos/guadañas/tl52/0000.png",
    description: ""
},
/*final*/
]


const piece = document.querySelector(".card");

TL52.map((i) => {
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












