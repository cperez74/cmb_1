const diesel = [
/*G*/
{
    id: 1507,
    title: "gorro economizador",
    img: "/img/img-dsl/178f/1507.png",
    description: "gorro economizador o retenedor 178f - 7hp - f300 - t70"
},

/*H*/
/*I*/
{
    id: 2403,
    title: "inyector 178f",
    img: "/img/img-dsl/178f/2403.jpg",
    description: "inyector 178f - 7hp - f300 - t70 conexion lateral"
},

/*J*/
{
    id: "3702_3703",
    title: "juego de valvula",
    img: "/img/img-dsl/178f/3702_3703.png",
    description: "inyector 178f - 7hp - f300 - t70 conexion lateral"
},

/*K*/
/*L*/
/*M*/
{
    id: 2837,
    title: "mofle",
    img: "/img/img-dsl/178f/2837.png",
    description: "mofle o exosto 178f - 7hp - f300 - t70"
},

{
    id: 1345,
    title: "moneda balancin",
    img: "/img/img-dsl/178f/1345.png",
    description: "moneda balancin o antidesgaste 178f - 7hp - f300 - t70"
},

/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 3356,
    title: "pasador 178f",
    img: "/img/img-dsl/178f/3356.jpg",
    description: "pasador o bulon 178f - 7hp - f300 - t70"
},

{
    id: 2577,
    title: "perno balancin",
    img: "/img/img-dsl/178f/2577.png",
    description: "perno balancin 178f - 7hp - f300 - t70"
},


{
    id: 3497,
    title: "pin pasador",
    img: "/img/img-dsl/178f/3497.png",
    description: "seguro de pasador 178f - 7hp - f300 - t70"
},

{
    id: 1799,
    title: "piston 178f std",
    img: "/img/img-dsl/178f/1799.png",
    description: "elemento filtro de aire 178f - 7hp - f300 - t70"
},

{
    title: "polea de arranque",
    img: "/img/img-dsl/178f/1_4.png",
    description: "polea de arranque 178f - 7hp - f300 - t70"
},

/*Q*/
/*R*/
{
    id: 1762,
    title: "resorte de arranque",
    img: "/img/img-dsl/178f/1762.png",
    description: "resorte o cinta de arranque 178f - 7hp - f300 - t70"
},

{
    id: 1953,
    title: "resorte valvula",
    img: "/img/img-dsl/178f/1953.png",
    description: "resorte valvula 178f - 7hp - f300 - t70"
},

{
    id: 3249,
    title: "retenedor 178f",
    img: "/img/img-dsl/178f/3249.jpg",
    description: "retenedor 178f de aceite 30x45x8"
},

/*S*/
{
    id: 1_5,
    title: "soporte filtro",
    img: "/img/img-dsl/178f/1_5.png",
    description: "soporte filtro de aire bañado en aceite 178f - 7hp - f300 - t70"
},

/*T*/
{
    id: 1504,
    title: "tapa valvula",
    img: "/img/img-dsl/178f/1504.jpg",
    description: "tapa valvula 178f - 7hp - f300 - t70"
},

{
    id: 3552,
    title: "tobera 170f - 178f",
    img: "/img/img-dsl/178f/3552.png",
    description: "tobera inyector 170f - 178f"
},

/*U*/
/*V*/
{
    id: 2045,
    title: "varilla impulsadora",
    img: "/img/img-dsl/178f/2045.png",
    description: "varilla impulsadora 178f - 7hp - f300 - t70"
},
/*W*/
/*X*/
/*Y*/
/*Z*/
]


const piece = document.querySelector(".card");

diesel.map((i) => {
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












