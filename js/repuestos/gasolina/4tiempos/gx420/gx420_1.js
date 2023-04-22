const gx420_1= [
/*inicio*/
/*A*/
{
    id: 818,
    title: "anillos gx420 std",
    img: "/img/img-gsl/4tiempos/gx420/818.png",
    description: "anillos std para motor de 15hp 90mm"
},

/*B*/
{
    id: 1475,
    title: "balancin gx420",
    img: "/img/img-gsl/4tiempos/gx420/1475.png",
    description: "balancin completo para la culata o tapa de compresion de un motor 15hp"
},

{
    id: 3640,
    title: "biela gx420",
    img: "/img/img-gsl/4tiempos/gx420/3640.png",
    description: "biela para motor 13 y 15hp"
},

{
    id: 3391,
    title: "bloque motor",
    img: "/img/img-gsl/4tiempos/gx420/3391.png",
    description: "bloque motor 13hp - 15hp 90mm"
},

{
    id: 58,
    title: "bobina de inicio",
    img: "/img/img-gsl/4tiempos/gx420/58.png",
    description: "bobina de encendido para motor 9hp - 13hp - 15hp"
},

{
    id: 1101,
    title: "brida carburador gx420",
    img: "/img/img-gsl/4tiempos/gx420/1101.png",
    description: "brida o base carburador motor 13hp - 15hp"
},

/*C*/
{
    id: 3519,
    title: "carburador gx420",
    img: "/img/img-gsl/4tiempos/gx420/3519.png",
    description: "carburador para motor de 13hp viene con llave."
},

{
    id: 3530,
    title: "carburador 6500w",
    img: "/img/img-gsl/4tiempos/gx420/3530.png",
    description: "carburador para generador 5.500w hasta 10.000w con selenoide"
},

{
    id: 1135,
    title: "capuchon bujia",
    img: "/img/img-gsl/4tiempos/gx420/1135.png",
    description: "capuchon bujia para motor a gasolina."
},

{
    id: 3402,
    title: "culata gx420",
    img: "/img/img-gsl/4tiempos/gx420/3402.png",
    description: "culata motor de 13 - 15hp"
},

{
    id: 647,
    title: "contratuerca gx420",
    img: "/img/img-gsl/4tiempos/gx420/647.png",
    description: "contratuerca balancin para motor de 13 - 15hp"
},

{
    id: 1511,
    title: "comando aceleracion gx420",
    img: "/img/img-gsl/4tiempos/gx420/1511.png",
    description: "comando o palanca aceleracion para motor de 13 - 15hp"
},

{
    id: 1472,
    title: "cuña volanta gx420.",
    img: "/img/img-gsl/4tiempos/gx420/1472.png",
    description: "cuña volanta de motor de 13hp"
},

/*D*/
/*E*/
{
    id: 657,
    title: "empaque base carburador",
    img: "/img/img-gsl/4tiempos/gx420/657.png",
    description: "empaque base de carburador para motor 13hp - 15hp"
},

{
    id: 3403,
    title: "empaque espaciador",
    img: "/img/img-gsl/4tiempos/gx420/3403.png",
    description: "empaque espaiador carburador de 13 - 15hp"
},

{
    id: 658,
    title: "empaque filtro de aire",
    img: "/img/img-gsl/4tiempos/gx420/658.png",
    description: ""
},

{
    id: 3724,
    title: "empaque carter gx420",
    img: "/img/img-gsl/4tiempos/gx420/3724.png",
    description: "empaque tapa carter"
},

{
    id: 1480,
    title: "empaque culata gx420",
    img: "/img/img-gsl/4tiempos/gx420/1742.png",
    description: "empaque de culata o tapa de compresion 15hp 90mm"
},

{
    id: 2619,
    title: "empaque mofle gx420",
    img: "/img/img-gsl/4tiempos/gx420/2619.png",
    description: "empaque para exosto o mofle de 15hp"
},

{
    id: 3557,
    title: "empaque mofle gx420",
    img: "/img/img-gsl/4tiempos/gx420/3557.png",
    description: "empaque para exosto o mofle de 15hp tres tornillo"
},
/*20*/

/*F*/
/*G*/
/*H*/
/*I*/
/*J*/
/*K*/
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

gx420_1.map((i) => {
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












