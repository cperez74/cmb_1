const HUSQV61 = [
/*inicio*/
/*A*/
{
    id: 2636,
    title: "amortiguador husqv61",
    img: "../../../img/img-dsl/",
    description: ""
},

{
    id: 2636,
    title: "anillos husqv61",
    img: "../../../img/img-dsl/",
    description: ""
},

/*B*/
{
    id: 2636,
    title: "brida carburador",
    img: "../../../img/img-dsl/",
    description: ""
},

/*C*/
{
    id: 2636,
    title: "canastilla campana",
    img: "../../../img/img-dsl/",
    description: ""
},

/*D*/
/*E*/
{
    id: 2636,
    title: "embrague husqv61",
    img: "../../../img/img-dsl/",
    description: ""
},

/*F*/
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
    title: "kit cilindro",
    img: "../../../img/img-dsl/",
    description: ""
},

{
    id: 2636,
    title: "kit piston",
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
    title: "retenedor ",
    img: "../../../img/img-dsl/",
    description: ""
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

HUSQV61.map((i) => {
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

            <button class="pay" ${i.link}>pagar</button>
        </article>
    </div>`;
});












