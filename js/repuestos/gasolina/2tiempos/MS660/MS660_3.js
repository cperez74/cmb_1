const MS660 = [
/*inicio*/
/*P*/
{
    id: 1.82,
    title: "prisma cadena",
    img: "/img/img-gsl/2tiempos/motosierras/660/1.82.png",
    description: "prisma cadena ms660"
},


/*Q*/
/*R*/
{
    id: 1102,
    title: "resorte embrague",
    img: "/img/img-gsl/2tiempos/motosierras/660/435.png",
    description: "resorte embrague ms660"
},

{
    id: 3685,
    title: "retenedor grande",
    img: "/img/img-gsl/2tiempos/motosierras/660/3685.png",
    description: "retenedor grande ms660 0x0x0"
},

{
    id: 3686,
    title: "retenedor pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/660/3686.png",
    description: "retenedor pequeño ms660 0x0x0"
},

/*S*/
{
    id: 2268,
    title: "sin fin",
    img: "/img/img-gsl/2tiempos/motosierras/660/2268.png",
    description: "piñon sin fin ms660"
},

/*T*/
{
    id: 3488,
    title: "tapa de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/660/3488.png",
    description: "tapa de aceite ms660"
},

{
    id: 1919,
    title: "tapa de gasolina",
    img: "/img/img-gsl/2tiempos/motosierras/660/1919.png",
    description: "tapa de gasolina ms660"
},

{
    id: 556,
    title: "trinquete",
    img: "/img/img-gsl/2tiempos/motosierras/660/556.png",
    description: "trinquete o uña de arranque para ms660"
},

{
    id: 292,
    title: "tuerca espada",
    img: "/img/img-gsl/2tiempos/motosierras/660/292.png",
    description: "tuerca de espada ms660"
},

/*U*/
/*V*/
{
    id: 3603,
    title: "valvula descompresion",
    img: "/img/img-gsl/2tiempos/motosierras/660/3603.png",
    description: "valvula de descompresion ms660"
},

/*W*/
/*X*/
/*Y*/
/*Z*/

    /*final*/
]


const piece = document.querySelector(".card");

MS660.map((i) => {
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












