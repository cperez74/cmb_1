const gx420_2 = [
    /*inicio*/
/*A*/
/*B*/
/*C*/
/*D*/
/*E*/
{
    id: 1181,
    title: "empaque motor gx420",
    img: "/img/img-gsl/4tiempos/gx420/1181.png",
    description: "kit empaque motor para 15hp"
},

{
    id: 924,
    title: "empaque tapa valvula",
    img: "/img/img-gsl/4tiempos/gx420/924.png",
    description: "empaque para la tapa de valvulas"
},

/*F*/
{
    id: 3584,
    title: "filtro combustible",
    img: "/img/img-gsl/4tiempos/gx420/3584.png",
    description: "filtro de combustible doble punta"
},

{
    id: 356,
    title: "filtro de aire",
    img: "/img/img-gsl/4tiempos/gx420/356.png",
    description: "filtro de aire para motor 1420"
},

/*G*/
{
    id: 1264,
    title: "guardian de aceite",
    img: "/img/img-gsl/4tiempos/gx420/1264.png",
    description: "alarma de aceite interna del motor"
},

{
    id: 2570,
    title: "gorro economizador",
    img: "/img/img-gsl/4tiempos/gx420/2570.png",
    description: "retenedor de valvulas"
},

/*H*/
/*I*/
/*J*/
{
    id: "3539 3540",
    title: "juego de valvula",
    img: "/img/img-gsl/4tiempos/gx420/3539_3540.png",
    description: "valvula de admision y escape"
},

/*K*/
{
    id: 1681,
    title: "kit piston gx420 std.",
    img: "/img/img-gsl/4tiempos/gx420/1681.png",
    description: "kit piston para motor a gasolina de 15hp 90mm std incluye (piston, anillos, pasador y clips piston)"
},

{
    id: 3541,
    title: "kit piston gx420 0.25",
    img: "/img/img-gsl/4tiempos/gx420/1681.png",
    description: "kit piston para motor a gasolina de 15hp 90mm + 0.25 incluye (piston, anillos, pasador y clips piston)"
},

{
    id: 2986,
    title: "kit piston gx420 0.50",
    img: "/img/img-gsl/4tiempos/gx420/1681.png",
    description: "kit piston para motor a gasolina de 15hp 90mm + 0.50 incluye (piston, anillos, pasador y clips piston)"
},

/*L*/
{
    id: 1442,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx420/1442.png",
    description: "llave de combustible hembra"
},

{
    id: 493,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx420/493.png",
    description: "llave de combustible macho"
},

/*M*/
{
    id: 2172,
    title: "mango de arranque",
    img: "/img/img-gsl/4tiempos/gx420/2172.png",
    description: "mango o puño de arranque."
},

/*N*/
/*Ñ*/
/*O*/
{
    id: 3521,
    title: "oring carburador",
    img: "/img/img-gsl/4tiempos/gx420/3521.png",
    description: "empaque sello carburador"
},

/*P*/
{
    id: 96,
    title: "platina guia",
    img: "/img/img-gsl/4tiempos/gx420/96.png",
    description: "platina guia para las varillas impulsadoras"
},

{
    id: 3138,
    title: "piñon regulador",
    img: "/img/img-gsl/4tiempos/gx420/3138.png",
    description: "piñon de lubricacion para motor a gasolina "
},

/*Q*/
/*R*/
{
    id: 498,
    title: "resorte aceleracion",
    img: "/img/img-gsl/4tiempos/gx420/490.png",
    description: "resorte varilla aceleracion 0.3mm grosor motor 15hp"
},

{
    id: 915,
    title: "resorte arranque",
    img: "/img/img-gsl/4tiempos/gx420/915.png",
    description: "resorrte tapa de arranque motor 15hp"
},

{
    id: 490,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx420/490.png",
    description: "resorte gabernador 1mm grosor para generador"
},

{
    id: 2452,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx420/2452.png",
    description: "resorte gobernador para generador"
},

/*20 */
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

gx420_2.map((i) => {
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












