const XP390 = [
/*inicio*/
/*A*/
{
    id: 2636,
    title: "anillos 390xp",
    img: "/img/img-gsl/2tiempos/motosierra/390xp/1540.png",
    description: ""
},

/*B*/
/*C*/
{
    id: 2636,
    title: "canastilla campana",
    img: "../../../img/img-dsl/",
    description: ""
},

{
    id: 2636,
    title: "canastilla piston",
    img: "../../../img/img-dsl/",
    description: ""
},

/*D*/
/*E*/
{
    id: 2636,
    title: "empaque motor",
    img: "../../../img/img-dsl/",
    description: ""
},

/*F*/
{
    id: 2636,
    title: "filtro de aire",
    img: "../../../img/img-dsl/",
    description: ""
},

{
    id: 2636,
    title: "filtro de combustible",
    img: "../../../img/img-dsl/",
    description: ""
},

/*G*/
/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 2636,
    title: "kit carburador 395xp",
    img: "../../../img/img-dsl/",
    description: ""
},

{
    id: 2636,
    title: "kit piston 395xp",
    img: "../../../img/img-dsl/",
    description: ""
},


/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 2636,
    title: "polea de arranque",
    img: "../../../img/img-dsl/",
    description: ""
},

/*Q*/
/*R*/
{
    id: 2636,
    title: "resorte arranque",
    img: "../../../img/img-dsl/",
    description: ""
},

{
    id: 2636,
    title: "resorte embrague",
    img: "../../../img/img-dsl/",
    description: ""
},

{
    id: 1491,
    title: "retenedor 390xp",
    img: "../../../img/img-dsl/",
    description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
},
/*S*/
{
    id: 2636,
    title: "sin fin",
    img: "../../../img/img-dsl/",
    description: ""
},

/*T*/
/*U*/
/*V*/
/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

XP390.map((i) => {
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












