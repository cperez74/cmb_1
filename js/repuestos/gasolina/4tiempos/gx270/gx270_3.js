const gx270_2 = [
/*inicio*/
/*S*/
{
    id: 3493,
    title: "seguro valvula de admision",
    img: "/img/img-gsl/4tiempos/gx270/3493.png",
    description: "seguro metalico valvula de admision"
},

{
    id: 3494,
    title: "seguro valvula de escape",
    img: "/img/img-gsl/4tiempos/gx270/3494.png",
    description: "seguro metalico valvula de escape"
},

{
    id: 1283,
    title: "sensor nivel de aceite",
    img: "/img/img-gsl/4tiempos/gx270/1283.jpg",
    description: "alarma de aceite iexterna"
},

{
    id: 98,
    title: "suiche on/off",
    img: "/img/img-gsl/4tiempos/gx270/98.png",
    description: "suiche on/off para motor"
},

/*T*/
{
    id: 3639,
    title: "tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx270/3639.png",
    description: "tanque de combustible gasolina"
},

{
    id: 3645,
    title: "tapa arranque",
    img: "/img/img-gsl/4tiempos/gx270/3376.png",
    description: "tapa de arranque para motor 9hp"
},

{
    id: 3555,
    title: "tapa tanque combustible",
    img: "/img/img-gsl/4tiempos/gx270/3555.png",
    description: "tapa para tanque de combustible gasolina"
},

{
    id: 1478,
    title: "tapa valvula gx270",
    img: "/img/img-gsl/4tiempos/gx270/1478.png",
    description: "tapa valvula de 9hp"
},

{
    id: 423,
    title: "trinquete.",
    img: "/img/img-gsl/4tiempos/gx270/423.png",
    description: "trinquete o uña de arranque"
},

/*U*/
/*V*/
{
    id: 1511,
    title: "varilla aceleracion",
    img: "/img/img-gsl/4tiempos/gx270/1511.png",
    description: "varilla resorte aceleracion"
},

{
    id: 1351,
    title: "varilla impulsadora.",
    img: "/img/img-gsl/4tiempos/gx270/1351.png",
    description: "varilla impulsadora"
},

{
    id: 3045,
    title: "voltimetro",
    img: "/img/img-gsl/4tiempos/gx270/3045.png",
    description: "voltimetro 0-300"
},
/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

gx270_2.map((i) => {
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












