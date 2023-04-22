const GX160 = [
/*inicio*/
/*E*/
{
    id: 3188,
    title: "empaque carburador #2",
    img: "/img/img-gsl/4tiempos/gx160/3722.png",
    description: "empaque base carburador para 5.5 - 6.5hp"
},

{
    id: 1431,
    title: "empaque carburador #3",
    img: "/img/img-gsl/4tiempos/gx160/1431.png",
    description: "empaque salida carburador para motor 5.5 - 6.5hp"
},

{
    id: 3377,
    title: "empaque culata gx160 - 200.",
    img: "/img/img-gsl/4tiempos/gx160/3377.png",
    description: "empaque culata o tapa de compresion para motor 5.5 - 6.5hp"
},


{
    id: 900,
    title: "empaque carter gx160 - 200.",
    img: "/img/img-gsl/4tiempos/gx160/900.png",
    description: "empaque tapa carter para motor 5.5 - 6.5hp"
},


{
    id: 451,
    title: "empaque mofle gx160 - 200.",
    img: "/img/img-gsl/4tiempos/gx160/451.png",
    description: "empaque mofle para motor de 5.5 - 6.5hp"
},

/*4*/
{
    id: 3000,
    title: "empaque motor gx 160 - 200.",
    img: "/img/img-gsl/4tiempos/gx160/3000.png",
    description: "empaque motor completo para motor 5.5 - 6.5hp"
},

{
    id: 1251,
    title: "empaque tapa valvula",
    img: "/img/img-gsl/4tiempos/gx160/1251.png",
    description: "empaque tapa valvula para motor de 5.5 - 6.5hp."
},

/*F*/
{
    id: 1482,
    title: "filtro de aire gx 160",
    img: "/img/img-gsl/4tiempos/gx160/1482.png",
    description: "filtro de aire elemento espuma carton."
},

/*
{
    id: 114,
    title: "filtro de aire gx 160",
    img: "/img/img-gsl/4tiempos/gx160/.png",
    description: "filtro de aire elemento espuma."
},
*/
/*G*/
{
    id: 3438,
    title: "gorro economizador gx160",
    img: "/img/img-gsl/4tiempos/gx160/3438.png",
    description: "retenedor de valvula para motor 5.5 - 6.5hp "
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 1237,
    title: "kit balancin gx160",
    img: "/img/img-gsl/4tiempos/gx160/1237.png",
    description: "balancin para motor de 5.5 - 6.5hp completo."
},

{
    id: 891,
    title: "kit piston gx160",
    img: "/img/img-gsl/4tiempos/gx160/891_1.png",
    description: "este kit piston incluye anillos, piston, pasador y los clip del pasador"
},

{
    id: 919,
    title: "kit piston gx200",
    img: "/img/img-gsl/4tiempos/gx160/891_1.png",
    description: "este kit piston incluye anillos, piston, pasador y los clip del pasador sobre medida 0.50 o 0.20."
},

{
    id: 2140 - 1640,
    title: "kit valvula 6.5hp",
    img: "/img/img-gsl/4tiempos/gx160/2140_1640.png",
    description: "valvula de admision y valvula de escape 5.5 - 6.5hp."
},

/*L*/
{
    id: 1442,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx160/1442.png",
    description: "llave de combustible hembra para generadores"
},

{
    id: 493,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx160/493.png",
    description: "llave de combustible macho para motor 5.5 - 6.5hp."
},

/*M*/
{
    id: 2172,
    title: "mango de arranque",
    img: "/img/img-gsl/4tiempos/gx160/2172.png",
    description: "mango de arranque para motor a gasolina o diesel."
},

{
    id: 1004,
    title: "medidor.",
    img: "/img/img-gsl/4tiempos/gx160/1004.png",
    description: "medidor para tanque combustible generador."
},

{
    id: 1283,
    title: "modulo sensor gx160 - 200",
    img: "/img/img-gsl/4tiempos/gx160/1283.jpg",
    description: "alarma de aceite externa para motor a gasolina."
},

{
    id: 414,
    title: "mofle gx160",
    img: "/img/img-gsl/4tiempos/gx160/414.png",
    description: "mofle o exosto para motor de 5.5 - 6.5hp."
},

{
    id: 2752,
    title: "moneda balancin gx160",
    img: "/img/img-gsl/4tiempos/gx160/2752.png",
    description: "moneda balancin o antidesgaste de 5.5 - 6.5hp."
},

/*N*/
/*Ñ*/
/*O*/
/*final*/
]


const piece = document.querySelector(".card");

GX160.map((i) => {
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












