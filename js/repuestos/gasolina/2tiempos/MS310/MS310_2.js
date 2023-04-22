const MS310 = [
/*inicio*/
/*T*/
{
    id: 2187,
    title: "tapa de gasolina",
    img: "/img/img-gsl/2tiempos/motosierras/310/2187.png",
    description: "tapa deposito de gasolina"
},

{
    id: 197,
    title: "trinquete",
    img: "/img/img-gsl/2tiempos/motosierras/310/197.png",
    description: "trinquete o uña de arranque para ms310 - 361 - 382"
},

{
    id: 292,
    title: "tuerca esparrago",
    img: "/img/img-gsl/2tiempos/motosierras/310/292.png",
    description: "tuerca esparrago para motosierra ms310"
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

MS310.map((i) => {
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












