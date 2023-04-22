const diesel = [
/*inicio*/
/*T*/
{
    id: 3464,
    title: "tubo de inyeccion 186f",
    img: "/img/img-dsl/186f/3464.png",
    description: ""
},

{
        id: 1504,
        title: "tapa valvula 186f",
        img: "/img/img-dsl/186f/1504.png",
        description: "tapa valvula 2 tornillos para 10hp (f400 - 186f - 186fa - t100)"
},

{
        id: 1518,
        title: "tapa valvula 186fa",
        img: "/img/img-dsl/186f/1518.png",
        description: "tapa valvula 3 tornillos para 10hp (f400 - 186f - 186fa - t100)"
},

/*U*/
/*V*/
    {
        id: 2045,
        title: "varilla impulsadora",
        img: "/img/img-dsl/186f/2045.png",
        description: "varilla impulsadora"
    },

/*final*/
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












