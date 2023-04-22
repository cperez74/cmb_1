const GX210 = [
/*inicio*/
/*A*/
{
    id: 494,
    title: "amortiguador base",
    img: "/img/img-gsl/4tiempos/gx210/494.png",
    description: "amortiguador tipo Z"
},

{
    id: 2954,
    title: "anillos 7hp",
    img: "/img/img-gsl/4tiempos/gx210/2954.png",
    description: "anillos std para motor de 7hp 70mm diametro y 2mm de grosor."
},

{
    id: 450,
    title: "arbol de leva 7hp",
    img: "/img/img-gsl/4tiempos/gx210/450.jpg",
    description: "arbol de levas para motor de 7hp."
},

/*B*/
{
    id: 1237,
    title: "balancin 7hp",
    img: "/img/img-gsl/4tiempos/gx210/1237.png",
    description: "balancin completo para 7hp"
},

{
    id: 260,
    title: "biela 7hp",
    img: "/img/img-gsl/4tiempos/gx210/260.png",
    description: "biela std para motor 7hp."
},

{
    id: 1131,
    title: "bobina 7hp",
    img: "/img/img-gsl/4tiempos/gx210/1131.png",
    description: "bobina de encendido para 7hp."
},

{
    id: 500,
    title: "bloque motor 7hp",
    img: "/img/img-gsl/4tiempos/gx210/500.png",
    description: "bloque o cilindro para motor 7hp"
},

/*C*/
{
    id: 394,
    title: "carburador 7hp",
    img: "/img/img-gsl/4tiempos/gx210/394.jpg",
    description: "carburador para motor 7hp con llave de combustible."
},

{
    id: 394,
    title: "carburador 7hp",
    img: "/img/img-gsl/4tiempos/gx210/1238.jpg",
    description: "carburador para generador 3500w"
},

{
    id: 1135,
    title: "capuchon bujia",
    img: "/img/img-gsl/4tiempos/gx210/1135.png",
    description: "capuchon para bujia."
},

{
    id: 1242,
    title: "cigueñal roscado 7hp",
    img: "/img/img-gsl/4tiempos/gx210/1242.png",
    description: "cigueñal para motor de eje libre utilizable en motobombas, picapastos."
},

{
    id: 2615,
    title: "cigueñal conico 7hp",
    img: "/img/img-gsl/4tiempos/gx210/2615.png",
    description: "cigueñal para planta electrica 3500w."
},

{
    id: 3389,
    title: "comando aceleracion ",
    img: "/img/img-gsl/4tiempos/gx210/3389.png",
    description: "comando o palanca de aceleracion 7hp"
},

{
    id: 194,
    title: "culata 7",
    img: "/img/img-gsl/4tiempos/gx210/194.png",
    description: "culata para motor a gasolina 7hp"
},

/*D*/
/*E*/
{
    id: 1430,
    title: "empaque carburador #1",
    img: "/img/img-gsl/4tiempos/gx210/1430.png",
    description: "empaque insulador carburador para 7hp"
},

{
    id: 3722,
    title: "empaque carburador #2",
    img: "/img/img-gsl/4tiempos/gx210/3722.png",
    description: "empaque base carburador para 7hp"
},

{
    id: 1431,
    title: "empaque carburador #3",
    img: "/img/img-gsl/4tiempos/gx210/1431.png",
    description: "empaque salida carburador para motor 7hp"
},

{
    id: 3377,
    title: "empaque culata 7hp",
    img: "/img/img-gsl/4tiempos/gx210/3377.png",
    description: "empaque culata o tapa de compresion para motor 7hp"
},

{
    id: 900,
    title: "empaque carter 7hp",
    img: "/img/img-gsl/4tiempos/gx210/900.png",
    description: "empaque tapa carter para motor 7hp"
},

{
    id: 451,
    title: "empaque mofle 7hp",
    img: "/img/img-gsl/4tiempos/gx210/451.png",
    description: "empaque mofle para motor de 7hp"
},

/*20 */
/*final*/
]


const piece = document.querySelector(".card");

GX210.map((i) => {
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












