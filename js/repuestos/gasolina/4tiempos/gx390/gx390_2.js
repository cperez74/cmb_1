const GX390 = [
    /*inicio*/
/*E*/
{
    id: 3403,
    title: "empaque espaciador",
    img: "/img/img-gsl/4tiempos/gx390/3403.png",
    description: "empaque espaiador carburador de 13 - 15hp"
},

{
    id: 658,
    title: "empaque filtro de aire",
    img: "/img/img-gsl/4tiempos/gx390/658.png",
    description: "empaque filtro de aire para motor 13 - 15hp"
},

{
    id: 448,
    title: "empaque carter gx390",
    img: "/img/img-gsl/4tiempos/gx390/3524.png",
    description: "empaque tapa carter motor 13 - 15hp"
},

{
    id: 1742,
    title: "empaque culata gx 390",
    img: "/img/img-gsl/4tiempos/gx390/1742.png",
    description: "empaque culata o de cilindro para motor de 13hp 88mm"
},

{
    id: 2619,
    title: "empaque mofle gx390",
    img: "/img/img-gsl/4tiempos/gx390/2619.png",
    description: "empaque mofle para motor de 13 - 15hp"
},

{
    id: 3557,
    title: "empaque mofle gx390",
    img: "/img/img-gsl/4tiempos/gx390/3557.png",
    description: "empaque mofle de 3 tornillos para motor de 13 - 15hp"
},

{
    id: 1181,
    title: "empaque motor gx390",
    img: "/img/img-gsl/4tiempos/gx390/1181.png",
    description: "empaque motor para motor 13hp."
},

{
    id: 924,
    title: "empaque tapa valvula",
    img: "/img/img-gsl/4tiempos/gx390/924.png",
    description: "empaque tapa valvula 13 - 15hp"
},

/*F*/
{
    id: 356,
    title: "filtro de aire gx390",
    img: "/img/img-gsl/4tiempos/gx390/356.png",
    description: "filtro de aire motor 13 - 15hp"
},

/*G*/
{
    id: 1264,
    title: "guardian de aceite",
    img: "/img/img-gsl/4tiempos/gx390/1264.png",
    description: "alarma de aceite interna para motor 13 - 15hp"
},

{
    id: 2570,
    title: "gorro economizador gx390",
    img: "/img/img-gsl/4tiempos/gx390/2570.png",
    description: "retenedor de valvula para motor 13 - 15hp"
},

/*H*/
/*I*/
/*J*/
{
    id: "3539-3540",
    title: "juego de valvula",
    img: "/img/img-gsl/4tiempos/gx390/3539_3540.png",
    description: "valvula de admision y escape de 13 - 15hp"
},

/*K*/
{
    id: 1475,
    title: "kit balancin gx390",
    img: "/img/img-gsl/4tiempos/gx390/1475.png",
    description: "kit de balancin (balancin, tuerca, contratuerca, pivote) de 13 - 15"
},

{
    id: 2020,
    title: "kit piston gx390 std",
    img: "/img/img-gsl/4tiempos/gx390/2020.png",
    description: "kit de piston 13hp std (anillos, piston, pasador y clip pasador)"
},

{
    id: 2186,
    title: "kit piston gx390 0.25",
    img: "/img/img-gsl/4tiempos/gx390/2020.png",
    description: "kit de piston 13hp 0.25 o 0.10 (anillos, piston, pasador y clip pasador)"
},

{
    id: 2336,
    title: "kit piston gx390 0.50",
    img: "/img/img-gsl/4tiempos/gx390/2020.png",
    description: "kit de piston 13hp 0.50 o 0.20 (anillos, piston, pasador y clip pasador)"
},

/*L*/
/*M*/
{
    id: 2172,
    title: "mango de arranque",
    img: "/img/img-gsl/4tiempos/gx390/2172.png",
    description: "mango o puño de arranque."
},

{
    id: 1283,
    title: "modulo sensor",
    img: "/img/img-gsl/4tiempos/gx390/1283.jpg",
    description: "alarma externa de aceite"
},

{
    id: 461,
    title: "mofle gx390",
    img: "/img/img-gsl/4tiempos/gx390/461.webp",
    description: "mofle o exosto de 13 - 15hp"
},

{
    id: 360,
    title: "moneda balancin gx390",
    img: "/img/img-gsl/4tiempos/gx390/360.png",
    description: "moneda balancin o antidesgaste para motor 13 - 15hp"
},

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

GX390.map((i) => {
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












