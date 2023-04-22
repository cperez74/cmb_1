const diesel = [
    /*inicio*/
    {
        id: 2636,
        title: "empaque carter gx160",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1511,
        title: "empaque mofle gx160",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1491,
        title: "empaque motor gx 160",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1491,
        title: "empaque tapa valvula",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2115,
        title: "filtro de aire gx 160",
        img: "../../../img/img-dsl/2115.png",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "filtro de aire gx200",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "gorro economizador gx160",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1801,
        title: "kit balancin gx160",
        img: "../../img/img-dsl/3564.jpg",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2833,
        title: "kit piston gx160",
        img: "../../../img/img-dsl/",
        description: "diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1511,
        title: "mango de arranque",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 2636,
        title: "modulo sensor gx160 - 200",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1491,
        title: "mofle gx160",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2115,
        title: "moneda balancin gx160",
        img: "../../../img/img-dsl/2115.png",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "palanca de choke gx200.",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1801,
        title: "pasador piston gx160 - 200.",
        img: "../../img/img-dsl/3564.jpg",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2833,
        title: "pin pasador gx160 -200.",
        img: "../../../img/img-dsl/",
        description: "diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1511,
        title: "piston gx160 std.",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1491,
        title: "piston gx160 0.25.",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2115,
        title: "piston gx160 0.50",
        img: "../../../img/img-dsl/2115.png",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "piston gx200 std",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
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

            <button class="pay" ${i.link}>pagar</button>
        </article>
    </div>`;
});












