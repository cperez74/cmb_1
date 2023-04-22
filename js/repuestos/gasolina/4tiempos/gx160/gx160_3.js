const GX160 = [
/*inicio*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 2957,
    title: "palanca de choque gx200.",
    img: "/img/img-gsl/4tiempos/gx160/2957.png",
    description: "palanca de choque 2500w."
},

{
    id: 1236,
    title: "pasador piston gx160 - 200.",
    img: "/img/img-gsl/4tiempos/gx160/1236.png",
    description: "pasador o bulon para motor de 5.5 - 6.5hp"
},

{
    id: 600,
    title: "pin pasador gx160 -200.",
    img: "/img/img-gsl/4tiempos/gx160/600.png",
    description: "seguro, candado o pin pasador para motor de 5.5 - 6.5hp"
},

{
    id: 1031,
    title: "piñon regulador.",
    img: "/img/img-gsl/4tiempos/gx160/1031.png",
    description: "piñon regulador de aceite (piñon de lubricacion)."
},

{
    id: 938,
    title: "piston gx160 std.",
    img: "/img/img-gsl/4tiempos/gx160/938.png",
    description: "piston falda larga para motor 5.5 - 6.5hp de 68mm"
},

{
    id: 206,
    title: "piston gx160 0.25.",
    img: "/img/img-gsl/4tiempos/gx160/938.png",
    description: "piston falda larga para motor 5.5 - 6.5hp de 68mm + 0.25 o 0.10."
},

{
    title: "piston gx160 0.50",
    img: "/img/img-gsl/4tiempos/gx160/938.png",
    description: "piston falda larga para motor 5.5 - 6.5hp de 68mm + 0.50 o 0.20."
},

{
    id: 3650,
    title: "piston gx200 std",
    img: "/img/img-gsl/4tiempos/gx160/3650.png",
    description: "piston falda corta para motor 5.5 - 6.5hp de 68mm"
},

{
    id: 3648,
    title: "piston gx200 0.25.",
    img: "/img/img-gsl/4tiempos/gx160/3650.png",
    description: "piston falda corta para motor 5.5 - 6.5hp de 68mm + 0.25 o 0.10."
},

{
    title: "piston gx200 0.50",
    img: "/img/img-gsl/4tiempos/gx160/3650.png",
    description: "piston falda corta para motor 5.5 - 6.5hp de 68mm + 0.50 o 0.20."
},

{
    id: 94,
    title: "platina guia gx 160",
    img: "/img/img-gsl/4tiempos/gx160/94.png",
    description: "platina guia para motor de 5.5 - 6.5hp"
},

{
    id: 836,
    title: "polea de arranque gx200",
    img: "/img/img-gsl/4tiempos/gx160/836.png",
    description: "polea de arranque para motor de 5.5 - 6.5hp"
},

/*Q*/
/*R*/
{
    id: 3649,
    title: "resorte de aceleracion.",
    img: "/img/img-gsl/4tiempos/gx160/1470.png",
    description: "resorte aceleracion 0.2mm grosor motor 5.5 - 6.5hp."
},

{
    id: 2442,
    title: "resorte de arranque",
    img: "/img/img-gsl/4tiempos/gx160/2442.png",
    description: "resorte de arranque para motor 5.5 - 6.5hp."
},

{
    id: 1185,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx160/1470.png",
    description: "resorte gobernador 0.8mm motor 5.5 - 6.5hp."
},

{
    id: 3684,
    title: "retenedor gx160",
    img: "/img/img-gsl/4tiempos/gx160/1306.jpg",
    description: "retenedor de aceite para motor 5.5 - 6.5 referencia 25x41.25x6"
},

/*S*/
{
    id: 1838,
    title: "seguro valvula de admision",
    img: "/img/img-gsl/4tiempos/gx160/1838.png",
    description: "seguro metalico para valvula de admision"
},

{
    id: 1839,
    title: "seguro valvula de escape",
    img: "/img/img-gsl/4tiempos/gx160/1839.png",
    description: "seguro metalico para valvula de escape"
},

{
    id: 1264,
    title: "sensor nivel de aceite",
    img: "/img/img-gsl/4tiempos/gx160/1264.png",
    description: "alarman de aceite interna"
},

{
    id: 98,
    title: "suiche on/off",
    img: "/img/img-gsl/4tiempos/gx160/98.png",
    description: "suiche de encendido para motor"
},
/*20*/
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












