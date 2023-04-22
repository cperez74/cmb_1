const GX210 = [
/*inicio*/
/*R*/
{
    id: 422,
    title: "resorte trinquete",
    img: "/img/img-gsl/4tiempos/gx210/652.png",
    description: "resorte trinquete para polea de 7hp"
},

{
    id: 3684,
    title: "retenedor",
    img: "/img/img-gsl/4tiempos/gx210/1306.jpg",
    description: "retenedor de aceite de motor 7hp ref: 25x41.25x6"
},

/*S*/
{
    id: 1838,
    title: "seguro valvula de admision",
    img: "/img/img-gsl/4tiempos/gx210/1838.png",
    description: "seguro metalico para valvula de admision"
},

{
    id: 1839,
    title: "seguro valvula de escape",
    img: "/img/img-gsl/4tiempos/gx210/1839.png",
    description: "seguro metalico para valvula de escape"
},

{
    id: 1264,
    title: "sensor nivel de aceite",
    img: "/img/img-gsl/4tiempos/gx210/1264.png",
    description: "alarma de aceite interna"
},

{
    id: 98,
    title: "suiche on/off",
    img: "/img/img-gsl/4tiempos/gx210/98.png",
    description: "suiche encendido para motor"
},

{
    id: 1.8,
    title: "suiche encendido",
    img: "/img/img-gsl/4tiempos/gx210/1.8.png",
    description: "suiche encendido para generador con llave"
},

/*T*/
{
    id: 3639,
    title: "tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx210/3639.png",
    description: "tanque de combustible para motor"
},

{
    id: 3376,
    title: "tapa arranque",
    img: "/img/img-gsl/4tiempos/gx210/3376.png",
    description: "tapa de arranque para motor 7hp"
},

{
    id: 3555,
    title: "tapa tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx210/3555.png",
    description: "tapa tanque combustible para motor"
},

{
    id: 603,
    title: "tapa valvula",
    img: "/img/img-gsl/4tiempos/gx210/603.jpg",
    description: "tapa valvula para motor 7hp"
},

{
    id: 117,
    title: "trinquete.",
    img: "/img/img-gsl/4tiempos/gx210/117.png",
    description: "trinquete o uña de arranque para motor"
},

/*U*/
/*V*/
{
    id: 1511,
    title: "varilla acelerador.",
    img: "/img/img-gsl/4tiempos/gx210/1511.png",
    description: "varrilla acelerador de 7hp"
},

/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

GX210.map((i) => {
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












