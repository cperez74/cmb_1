const W950 = [
    /*inicio*/
/*P*/
{
    id: 1138,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/950/1138.png",
    description: "polea de arranque para generador 950w"
},

{
    id: 1511,
    title: "protector de descarga",
    img: "/img/img-gsl/2tiempos/950/1138.png",
    description: ""
},

{
    id: 2636,
    title: "protector de descarga",
    img: "/img/img-gsl/2tiempos/950/1138.png",
    description: ""
},

{
    id: 2172,
    title: "puño de arranque",
    img: "/img/img-gsl/2tiempos/950/2172.png",
    description: "puño de arranque para tapa de arranque"
},

/*Q*/
/*R*/
{
    id: 608,
    title: "retenedor 950",
    img: "/img/img-gsl/2tiempos/950/608.png",
    description: "retenedor para generador 950w"
},

/*S*/
/*T*/
{
    id: 2025,
    title: "tanque de combustible",
    img: "/img/img-gsl/2tiempos/950/2025.png",
    description: "tanque de combustible para generdor 950w"
},

{
    id: 261,
    title: "tapa tanque",
    img: "/img/img-gsl/2tiempos/950/261.png",
    description: "tapa tanque de combustible 950w"
},

{
    id: 1840,
    title: "toma corriente",
    img: "/img/img-gsl/2tiempos/950/1840.png",
    description: "toma corriente 110v"
},

{
    id: 36,
    title: "trinquete",
    img: "/img/img-gsl/2tiempos/950/36.png",
    description: "trinquete o uña de arranque para generador 950w"
},

/*U*/
/*V*/
{
    id: 717,
    title: "volanta",
    img: "/img/img-gsl/2tiempos/950/717.png",
    description: "volanta de generador 950w"
},

{
    id: 3045,
    title: "voltimetro",
    img: "/img/img-gsl/2tiempos/950/3045.png",
    description: "voltimetro de 0-150voltios"
},

/*W*/
/*X*/
/*Y*/
/*Z*/

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












