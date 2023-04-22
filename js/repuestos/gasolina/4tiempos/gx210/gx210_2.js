const GX210 = [
    /*inicio*/
/*E*/
{
    id: 3000,
    title: "empaque motor 7hp",
    img: "/img/img-gsl/4tiempos/gx210/3000.png",
    description: "empaque motor completo para motor 7hp"
},

{
    id: 1251,
    title: "empaque tapa valvula",
    img: "/img/img-gsl/4tiempos/gx210/1251.png",
    description: "empaque tapa valvula para motor de 7hp."
},

/*F*/
{
    id: 1482,
    title: "filtro de aire ",
    img: "/img/img-gsl/4tiempos/gx210/1482.png",
    description: "filtro de aire elemento espuma carton."
},

/*G*/
{
    id: 3438,
    title: "gorro economizador",
    img: "/img/img-gsl/4tiempos/gx210/3438.png",
    description: "retenedor de valvula para motor 7hp "
},

/*H*/
/*I*/
/*J*/
{
    id: 2140_1640,
    title: "juego de valvula",
    img: "/img/img-gsl/4tiempos/gx210/2140_1640.png",
    description: "valvula de admision y escape"
},

/*K*/
{
    id: 1237,
    title: "kit balancin",
    img: "/img/img-gsl/4tiempos/gx210/1237.png",
    description: "balancin para motor de 7hp completo."
},

/*L*/
{
    id: 1442,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx210/1442.png",
    description: "llave de combustible hembra para generadores"
},

{
    id: 493,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx210/493.png",
    description: "llave de combustible macho para motor 7hp."
},

/*M*/
{
    id: 2172,
    title: "mango de arranque",
    img: "/img/img-gsl/4tiempos/gx210/2172.png",
    description: "mango de arranque para motor a gasolina o diesel."
},

{
    id: 1283,
    title: "modulo sensor",
    img: "/img/img-gsl/4tiempos/gx210/1283.jpg",
    description: "alarma de aceite externa para motor a gasolina."
},

{
    id: 414,
    title: "mofle",
    img: "/img/img-gsl/4tiempos/gx210/414.png",
    description: "mofle o exosto para motor de 7hp."
},

{
    id: 2752,
    title: "moneda balancin",
    img: "/img/img-gsl/4tiempos/gx210/2752.png",
    description: "moneda balancin o antidesgaste de 7hp."
},

/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 1236,
    title: "pasador piston",
    img: "/img/img-gsl/4tiempos/gx210/1236.png",
    description: "pasador o bulon para motor de 7hp"
},

{
    id: 2833,
    title: "pin pasador",
    img: "/img/img-gsl/4tiempos/gx210/891.png",
    description: "seguro, candado o pin pasador para motor de 7hp"
},

{
    id: 2365,
    title: "piston 7hp std.",
    img: "/img/img-gsl/4tiempos/gx210/2365.png",
    description: "piston falda larga para motor 7hp de 68mm"
},

{
    id: 94,
    title: "platina guia",
    img: "/img/img-gsl/4tiempos/gx210/94.png",
    description: "platina guia para motor de 7hp"
},

{
    id: 836,
    title: "polea de arranque",
    img: "/img/img-gsl/4tiempos/gx210/836.png",
    description: "polea de arranque para motor de 7hp"
},

/*Q*/
/*R*/
{
    id: 3649,
    title: "resorte de aceleracion",
    img: "/img/img-gsl/4tiempos/gx210/1470.png",
    description: "resorte aceleracion 0.2mm para motor de 7hp"
},

{
    id: 2442,
    title: "resorte de arranque",
    img: "/img/img-gsl/4tiempos/gx210/2442.png",
    description: "resorte o cinta de arranque para motor de 7hp"
},

{
    id: 1470,
    title: "resorte de gobernador",
    img: "/img/img-gsl/4tiempos/gx210/1470.png",
    description: "resorte gobernador 0.8mm para motor 7hp"
},

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












