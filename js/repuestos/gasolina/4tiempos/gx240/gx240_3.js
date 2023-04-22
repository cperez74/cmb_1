const GX240 = [
/*inicio*/
/*T*/
{
    id: 1491,
    title: "tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx240/3639.png",
    description: "tanque combustible"
},

{
    id: 3376,
    title: "tapa arranque",
    img: "/img/img-gsl/4tiempos/gx240/3376.png",
    description: "tapa de arranque motor 8hp"
},

{
    id: 3700,
    title: "tapa de enfriamiento",
    img: "/img/img-gsl/4tiempos/gx240/3700.png",
    description: "tapa de enfriamiento o soporte tapa de arranque"
},

{
    id: 1478,
    title: "tapa valvula",
    img: "/img/img-gsl/4tiempos/gx240/1478.png",
    description: "tapa valvula para motor 8hp"
},

{
    id: 423,
    title: "trinquete.",
    img: "/img/img-gsl/4tiempos/gx240/423.png",
    description: "trinquete o uña de arranque para tapa de arranque"
},

/*U*/
/*V*/
{
    id: 1511,
    title: "varilla aceleracion.",
    img: "/img/img-gsl/4tiempos/gx240/1511.png",
    description: "varilla de aceleracion de 8hp."
},

{
    id: 1351,
    title: "varilla impulsadora.",
    img: "/img/img-gsl/4tiempos/gx240/1351.png",
    description: "varilla impulsadora"
},

{
    id: 3045,
    title: "voltimetro",
    img: "/img/img-gsl/4tiempos/gx240/3045.png",
    description: "voltimetro 0-300"
},
/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card")

GX240.map((i) => {
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












