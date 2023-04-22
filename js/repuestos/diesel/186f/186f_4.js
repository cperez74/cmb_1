const diesel = [
/*inicio*/
/*P*/

{
    id: 3625,
    title: "perno balancin 186f",
    img: "/img/img-dsl/186f/3625.png",
    description: "perno balancin para motor diesel 10hp (gasoil) 10hp (f400 - 186f - 186fa - t100)"
},

{
    id: 2145,
    title: "pin pasador 186f - 186fa",
    img: "/img/img-dsl/186f/2145.png",
    description: "seguros del pasador para motor diesel."
},

{
    id: 3435,
    title: "piston 186f std",
    img: "/img/img-dsl/186f/3626.png",
    description: "piston std diesel 10hp (gasoil) 10hp (f400 - 186f - 186fa - t100) 86mm punto de explosion conico."
},

{
    id: 2838,
    title: "piston 186f 0.25",
    img: "/img/img-dsl/186f/3626.png",
    description: "piston sobre medida a 0.25 o 0.10 diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) falada larga punto de explosion conico."
},

{
    title: "piston 186f 0.50",
    img: "/img/img-dsl/186f/3626.png",
    description: "piston sobre medida a 0.50 o 0.20 diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) falda larga punto de explosion conico."
},

{
    id: 3626,
    title: "piston 186fa std",
    img: "/img/img-dsl/186f/3626.png",
    description: "piston std para motor diesel diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) falda corta punto de explosion plano."
},

{
    id: 3428,
    title: "piston 186fa 0.25",
    img: "/img/img-dsl/186f/3626.png",
    description: "piston sobre medida a 0.25 o 0.10 diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) falda corta punto de explosion plano.."
},

{
    id: 3626,
    title: "piston 186fa 0.50",
    img: "/img/img-dsl/186f/3626.png",
    description: "piston sobre medida a 0.50 o 0.20 diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) falda corta punto de explosion plano.."
},

{
    id: 2960,
    title: "polea de arranque",
    img: "/img/img-dsl/186f/2960.png",
    description: "polea de arranque para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
},

{
    id: 2107,
    title: "plato friccion diesel",
    img: "/img/img-dsl/186f/2107.jpg",
    description: "plato soporte para trinquetes diesel 186f - 186fa."
},

/*Q*/
/*R*/
{
    id: 1252,
    title: "regulador de voltaje",
    img: "/img/img-dsl/186f/1252.png",
    description: "tarjeta reguladora de voltaje para encendido del motor con arranque electrico."
},

{
    id: 1350,
    title: "resorte de arranque 186f",
    img: "/img/img-dsl/186f/1350.png",
    description: "resorte para polea de arranque motor diesel (gasoil) 10hp (f400 - t100)"
},

{
    id: 827,
    title: "resorte control aceleracion",
    img: "/img/img-dsl/186f/827.png",
    description: "resorte para la palanca de aceleracion."
},

{
    id: 3479,
    title: "resorte de descompresor.",
    img: "/img/img-dsl/186f/3479.jpg",
    description: "resorte tapa de compresion diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
},

{
    id: 1306,
    title: "retenedor del cilindro",
    img: "/img/img-dsl/186f/1306.jpg",
    description: "retenedor de aceite para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) ref: 35x52x8."
},

{
    id: 2369,
    title: "retenedor eje regulador.",
    img: "/img/img-dsl/186f/1306.jpg",
    description: "retenedor del eje de regulacion para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) ref: 0x0x0."
},

/*S*/
/*T*/
{
    id: 2346,
    title: "tobera 186f",
    img: "/img/img-dsl/186f/2346.png",
    description: "tobera o punta de inyector corta para 10hp (f400 - 186f - 186fa - t100)"
},

{
    id: 3053,
    title: "tobera 186fa",
    img: "/img/img-dsl/186f/3053.png",
    description: "tobera o punta de inyector larga para 10hp (f400 - 186f - 186fa - t100)"
},

{
    id: 2576,
    title: "tubo de inyeccion 186fa",
    img: "/img/img-dsl/186f/2576.png",
    description: ""
},

{
    id: 2579,
    title: "tubo de inyeccion 186f",
    img: "/img/img-dsl/186f/2579.png",
    description: ""
},

/*U*/
/*V*/

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












