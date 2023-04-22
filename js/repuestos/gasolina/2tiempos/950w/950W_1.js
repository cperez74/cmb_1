const W950 = [
/*inicio*/
/*A*/
{
    id: 186,
    title: "aguja carburador 950",
    img: "/img/img-gsl/2tiempos/950/186.png",
    description: "aguja de carburador planta 950w"
},

{
    id: 565,
    title: "amortiguador 950",
    img: "/img/img-gsl/2tiempos/950/565.png",
    description: "amortiguador base 950w"
},

{
    id: 1,
    title: "anillos 950",
    img: "/img/img-gsl/2tiempos/950/1.png",
    description: "juego de anillos para generador 950w xmm"
},

/*B*/
{
    id: 269,
    title: "bobina cdi 950",
    img: "/img/img-gsl/2tiempos/950/269.png",
    description: "bobina cdi 950"
},

{
    id: 267,
    title: "bobina inicio 950",
    img: "/img/img-gsl/2tiempos/950/267.png",
    description: "bobina de inicio o de bujia para generador 950"
},

{
    id: 121,
    title: "bobina pulzadora",
    img: "/img/img-gsl/2tiempos/950/121.png",
    description: "bobina magneto 950w"
},

/*C*/
{
    id: 265,
    title: "canastilla piston",
    img: "/img/img-gsl/2tiempos/950/265.png",
    description: "balinera pasador 950"
},

{
    id: 122,
    title: "capacitor",
    img: "/img/img-gsl/2tiempos/950/122.png",
    description: "capacitor 950w 13.5uf"
},

{
    id: 3536,
    title: "carburador",
    img: "/img/img-gsl/2tiempos/950/3536.png",
    description: "carburador para generador 950w"
},

{
    id: 607,
    title: "cigueñal 950",
    img: "/img/img-gsl/2tiempos/950/607.png",
    description: "cigueñal para generador 950w"
},

{
    id: 501,
    title: "cilindro 950",
    img: "/img/img-gsl/2tiempos/950/501.png",
    description: "cilindro solo para generador 950w"
},

/*D*/
/*E*/
{
    id: 2110,
    title: "empaque carburador",
    img: "/img/img-gsl/2tiempos/950/2110.png",
    description: "empaque carburador generador 950w"
},

{
    id: 266,
    title: "empaque cilindro",
    img: "/img/img-gsl/2tiempos/950/266.png",
    description: "empaque cilindro generador 950w"
},

{
    id: 720,
    title: "empaque culata",
    img: "/img/img-gsl/2tiempos/950/720.png",
    description: "empaque culata generadpr 950w"
},

{
    id: 1179,
    title: "empaque motor",
    img: "/img/img-gsl/2tiempos/950/1179.png",
    description: "juego de empaque motor generador 950w"
},

{
    id: 1915,
    title: "empaque tapa valvula",
    img: "/img/img-gsl/2tiempos/950/1915.png",
    description: "empaque tapa valvula para generador 950"
},

/*F*/
/*G*/
/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 224,
    title: "kit piston 950",
    img: "/img/img-gsl/2tiempos/950/224.png",
    description: "juego de piston 950 anillos, piston, pasador, seguros pasador y canastilla piston"
},


/*L*/
{
    id: 464,
    title: "llave de combustible",
    img: "/img/img-gsl/2tiempos/950/464.png",
    description: "llave de combustible macho 950w"
},


/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 264,
    title: "pasador piston",
    img: "/img/img-gsl/2tiempos/950/264.png",
    description: "pasador para piston generador 950w"
},

{
    id: 123,
    title: "piston 950",
    img: "/img/img-gsl/2tiempos/950/123.png",
    description: "piston para generador 950w"
},

/*final*/
]


const piece = document.querySelector(".card");

W950.map((i) => {
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












