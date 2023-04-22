const diesel = [
/*P*/
{
    id: 3497,
    title: "pin pasador 170f",
    img: "/img/img-dsl/170f/3497.png",
    description: "pin pasador 170f"
},

{
    id: 1337,
    title: "piston 170f std",
    img: "/img/img-dsl/170f/1337.png",
    description: "piston std para motor 170f - 4.5hp - f210 - t50 (esta referencia no incluye anillos, pasador y clips) "
},
/*R*/
{
    id: 3249,
    title: "retenedor 170f",
    img: "/img/img-dsl/170f/3249.jpg",
    description: "retenedor de aceite 170f - 4.5hp - f210 - t50 ref: 30x45x8"
},

{
    id: 3434,
    title: "retenedor 170f",
    img: "/img/img-dsl/170f/3434.png",
    description: "retenedor toma de fuerza 170f - 4.5hp - f210 - t50 ref: 25x42x10"
},

/*S*/
/*T*/
{
    id: 1504,
    title: "tapa valvula 170f",
    img: "/img/img-dsl/170f/1504.jpg",
    description: "tapa valvula para 170f - 4.5hp - f210 - t50"
},

{
    id: 3552,
    title: "tobera 170f",
    img: "/img/img-dsl/170f/3552.png",
    description: "tobera (punta) inyector para 170f - 4.5hp - f210 - t50"
},

/*U*/
/*V*/
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












