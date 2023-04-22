const TL43 = [
/*inicio*/
/*A*/
{
    id: 104,
    title: "aguja de carburador tl43",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/104.png",
    description: ""
},

{
    id: 179,
    title: "anillos tl43",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/179.png",
    description: "juego de anillos para guadaña de 40mm."
},

/*B*/
{
    id: 966,
    title: "base campana 9 estrias.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/966.png",
    description: "base campana completa para 9 estrias."
},

{
    title: "base campana 7 estrias.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/966.png",
    description: "base campana completa para 7 estrias."
},

{
    id: 1188,
    title: "bobina de encendido.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1188.png",
    description: "bobina de encendido completa para guadaña tl43."
},

{
    title: "bombin completo tl43",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/3003.png",
    description: "bombin con base para guadaña."
},

{
    id: 1917,
    title: "bombin grande.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1918.png",
    description: "bombin grande para guadaña fs-450"
},

{
    id: 1918,
    title: "bombin pequeño.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1918.png",
    description: "bombin pequeño para tl43."
},

{
    id: 1146,
    title: "brida carburador.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1146.png",
    description: "brida base carburador tl43 (bc430)."
},

/*C*/
{
    title: "campana 7 estrias.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/406.png",
    description: "campana de 7 estrias."
},

{
    id: 406,
    title: "campana 9 estrias.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/406.png",
    description: "campana para guadaña 9 estrias."
},

{
    id: 1262,
    title: "canastilla piston tl43.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1262.png",
    description: "canastilla piston"
},

{
    id: 37,
    title: "capuchon bujia",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/37.png",
    description: "capuchon bujia para guadaña"
},

{
    id: 3549,
    title: "carburador.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/3549.png",
    description: "carburador para guadaña."
},

{
    id: 1864,
    title: "cazuela de arranque",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1864.png",
    description: "cazuela de arranque"
},

{
    id: 132,
    title: "cigueñal.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/132.png",
    description: "cigueñal para guadaña tl43."
},

{
    id: 2461,
    title: "cilindro.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/3594.png",
    description: "cilindro completo para guadaña de 40mm (piston, anillos, pasador, candado pasador, canastilla piston.)."
},

{
    id: 968,
    title: "comando aceleracion #1.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/968.png",
    description: "comando aceleracion completo para guadaña"
},

{
    id: 2166,
    title: "comando aceleracion #2",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/2166.png",
    description: "comando aceleracion completo para guadaña"
},

/*D*/
/*E*/
{
    title: "eje 7 estrias",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/179.png",
    description: "eje de transmision de 7 estrias para guadaña"
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












