const diesel = [
/*inicio*/
    {
        id: 1801,
        title: "piston gx200 0.25.",
        img: "../../img/img-dsl/3564.jpg",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2636,
        title: "piston gx200 0.50",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1511,
        title: "platina guia gx 160",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1491,
        title: "polea de arranque gx160",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1491,
        title: "resorte de arranque gx160",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1491,
        title: "resorte de aceleracion gx160",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1491,
        title: "resorte de gobernador gx160",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2115,
        title: "resorte trinquete gx160",
        img: "../../../img/img-dsl/2115.png",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "retenedor cigueñal gx160",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1801,
        title: "seguro valvula de admision",
        img: "../../img/img-dsl/3564.jpg",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2833,
        title: "seguro valvula de escape",
        img: "../../../img/img-dsl/",
        description: "diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1511,
        title: "sensor nivel de aceite",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 2636,
        title: "suiche on/off",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1491,
        title: "tanque de combustible",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2115,
        title: "tapa valvula gx160",
        img: "../../../img/img-dsl/2115.png",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "trinquete.",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1801,
        title: "valvula de admision.",
        img: "../../img/img-dsl/3564.jpg",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2833,
        title: "valvula de escape.",
        img: "../../../img/img-dsl/",
        description: "diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1511,
        title: "varilla impulsadora.",
        img: "../../../img/img-dsl/",
        description: ""
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












