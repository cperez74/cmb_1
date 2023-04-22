const gx420_3 = [
/*inicio*/
{
    id: 3682,
    title: "retenedor aceite",
    img: "/img/img-gsl/4tiempos/gx420/1306.jpg",
    description: "retenedor aceite ref 35x52x8"
},

/*S*/
{
    id: 3493,
    title: "seguro valvula de admision",
    img: "/img/img-gsl/4tiempos/gx420/3493.png",
    description: "seguro valvula de admision 13 - 15hp"
},

{
    id: 3494,
    title: "seguro valvula de escape",
    img: "/img/img-gsl/4tiempos/gx420/3494.png",
    description: "seguro valvula de escape 13 - 15hp"
},

{
    id: 1264,
    title: "sensor nivel de aceite",
    img: "/img/img-gsl/4tiempos/gx420/1264.png",
    description: "sensor nivel de aceite interno"
},

/*T*/
{
    id: 3639,
    title: "tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx420/3639.png",
    description: "tanque de combustible de 9 - 13 - 15hp"
},

{
    id: 3555,
    title: "tapa tanque combustible",
    img: "/img/img-gsl/4tiempos/gx420/3555.png",
    description: "tapa tanque de combustible para motor a gasolina."
},

{
    id: 3700,
    title: "tapa de enfriamiento",
    img: "/img/img-gsl/4tiempos/gx420/3700.png",
    description: "tapa de enfriamiento para motor de 13 - 15hp"
},


{
    id: 1478,
    title: "tapa valvula gx420",
    img: "/img/img-gsl/4tiempos/gx420/1478.png",
    description: "tapa valvula para motor 9 - 13 - 15hp"
},

{
    id: 423,
    title: "trinquete",
    img: "/img/img-gsl/4tiempos/gx420/423.png",
    description: "Uña o trinquete de arranque para motor 9 - 13 - 15hp"
},

/*U*/
/*V*/
{
    id: 1351,
    title: "varilla impulsadora",
    img: "/img/img-gsl/4tiempos/gx420/1351.png",
    description: ""
},
/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

gx420_3.map((i) => {
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












