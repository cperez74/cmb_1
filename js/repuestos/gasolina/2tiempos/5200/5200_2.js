const CS52 = [
    /*inicio*/

/*G*/
/*
{
    id: 3190,
    title: "garganta desfogue",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3190.png",
    description: "conector de desfogue cilindro exosto"
},
*/

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 838,
    title: "kit carburador",
    img: "/img/img-gsl/2tiempos/motosierras/5200/838.png",
    description: "kit carburador para motosierra 5200 - Cs52 (K-20 war, ms250)."
},

{
    id: 3694,
    title: "kit combustible.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3694.png",
    description: "kit de manguera para motosierra 5200 - Cs52."
},

{
    id: 1187,
    title: "kit empaques.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1187.png",
    description: "empaque motor para motosierra 5200 - Cs52."
},

{
    id: 503,
    title: "kit piston 43mm.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1578.png",
    description: "kit de piston para motosierra 5200 - Cs52 de 43mm (piston, anillos, pasador, clip pasador, canastilla piston)."
},

{
    id: 1768,
    title: "kit piston 45mm.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1578.png",
    description: "kit de piston para motosierra 5200 - Cs52 de 45mm (piston, anillos, pasador, clip pasador, canastilla piston)."
},

{
    id: 587,
    title: "kit retenedor.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/587.png",
    description: "kit retenedor para motosierra 5200 - Cs52 (retenedor 15x35x5, retenedor 15x28x5)."
},

{
    id: 3577,
    title: "kit trinquete.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3577.png",
    description: "kit trinquete 5200 - Cs52 (incluye 2 trinquetes, resortes y clips de trinquetes)"
},

/*L*/
/*
{
    id: 445,
    title: "llave bujia.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/445.png",
    description: "llave bujia 13x19."
},
*/

/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 3360,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3608.png",
    description: "polea de arranque 5200 - Cs52."
},

/*Q*/
/*R*/
{
    id: 1755,
    title: "resorte amortiguador.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1755.png",
    description: "resorte amortiguador 5200 - Cs52."
},

{
    id: 3693,
    title: "resorte arranque #1.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3693.png",
    description: "resorte de arranque para motosierra 5200 - Cs52 base metalica."
},

{
    id: 1580,
    title: "resorte de arranque #2.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1580.png",
    description: "resorte de arranque para motosierra 5200 - Cs52 base plastica."
},

{
    id: 3692,
    title: "resorte de arranque #3.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3692.png",
    description: "resorte de arranque para motosierra 5200 - Cs52 grueso."
},

/*
{
    id: 964,
    title: "resorte embrague.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/964.png",
    description: "resorte embrague para motosierra 5200 - Cs52."
},
*/

{
    id: 3691,
    title: "retenedor grande.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3691.png",
    description: "retenedor grande para motosierra 5200 - Cs52 ref: 15x35x5."
},

{
    id: 3690,
    title: "retenedor pequeño.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3690.png",
    description: "retenedor pequeño para motosierra 5200 - Cs52 ref: 15x28x5."
},

/*S*/
{
    id: 1534,
    title: "suiche de encendido.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1534.png",
    description: "suiche encendido para motosierra 5200 - Cs52."
},

/*T*/
{
    id: 3452,
    title: "tapa de aceite.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3452.png",
    description: "tapa deposito de aceite para motosierra 5200 - Cs52."
},

{
    id: 3696,
    title: "tapa de arranque.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3696.png",
    description: "tapa de arranque para motosierra 5200 - Cs52 #2."
},

{
    id: 3453,
    title: "tapa de gasolina.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3453.png",
    description: "tapa deposito de gasolina para motosierra 5200 - Cs52."
},

{
    id: 287,
    title: "tornillo tensor",
    img: "/img/img-gsl/2tiempos/motosierras/5200/287.png",
    description: "kit tornillo tensor para motosierra 5200 - Cs52."
},

{
    id: 3577,
    title: "trinquete",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3577.png",
    description: "trinquete de arranque para motosierra 5200 - Cs52."
},


/*U*/
/*V*/
/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

CS52.map((i) => {
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












