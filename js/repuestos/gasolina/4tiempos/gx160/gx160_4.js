const GX160 = [
/*inicio*/
/*S */
{
    id: 98,
    title: "suiche de arranque",
    img: "/img/img-gsl/4tiempos/gx160/1.8.png",
    description: "suiche para arranque electrico generador 2500 - 3500w"
},

/*T*/
{
    id: 3639,
    title: "tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx160/3639.png",
    description: "tanque deposito de combustible para gx 160"
},

{
    id: 3555,
    title: "tapa tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx160/3555.png",
    description: "tapa para el tanque de combustible motor"
},

{
    id: 3443,
    title: "tapa valvula gx160",
    img: "/img/img-gsl/4tiempos/gx160/603.jpg",
    description: "tapa valvula motor 5.5 - 7hp"
},

{
    id: 117,
    title: "trinquete.",
    img: "/img/img-gsl/4tiempos/gx160/117.png",
    description: "trinquete o uña de arranque para motor a gasolina de 5.5 - 7hp"
},

/*V*/
{
    id: 1511,
    title: "varilla acelerador.",
    img: "/img/img-gsl/4tiempos/gx160/1511.png",
    description: "varilla de aceleracion"
},

{
    id: 3045,
    title: "voltimetro",
    img: "/img/img-gsl/4tiempos/gx160/3045.png",
    description: "voltimetro de 0 -300"
},


/*final*/

/*W*/
/*X*/
/*Y*/
/*Z*/

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












