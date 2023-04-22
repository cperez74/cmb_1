const TL43 = [
/*inicio*/
/*T*/
{
    id: 134,
    title: "transmision 28x7.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/325.png",
    description: "transmision para guadaña de 28mm y 7 estrias."
},

{
    id: 325,
    title: "transmision 28x9.",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/325.png",
    description: "transmision para guadaña de 28mm y 9 estrias."
},

{
    id: 1002,
    title: "tuerca transmision",
    img: "/img/img-gsl/2tiempos/guadañas/tl43/1002.png",
    description: "tuerca para transmision de guadaña rosca izquierda."
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

TL43.map((i) => {
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












