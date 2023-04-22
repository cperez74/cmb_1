const XP395 = [
/*inicio*/
    {
        id: 2636,
        title: "anillos gx160 - 200 std",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1491,
        title: "anillos gx160 - 200 0.25",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2115,
        title: "anillos gx160 - 200 0.50",
        img: "../../../img/img-dsl/2115.png",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "arbol de leva gx160",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1801,
        title: "balancin gx 160 - 200",
        img: "../../img/img-dsl/3564.jpg",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2833,
        title: "biela gx160",
        img: "../../../img/img-dsl/",
        description: "diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1511,
        title: "bobina gx160",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 2636,
        title: "bloque motor gx160",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1491,
        title: "bloque motor gx200",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2115,
        title: "carburador gx160",
        img: "../../../img/img-dsl/2115.png",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "carburador gx200",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1801,
        title: "cigueñal roscado gx160",
        img: "../../img/img-dsl/3564.jpg",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2833,
        title: "cigueñal conico gx200",
        img: "../../../img/img-dsl/",
        description: "diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1511,
        title: "comando aceleracion gx 160",
        img: "../../../img/img-dsl/",
        description: ""
    },

    {
        id: 1491,
        title: "culata gx 160 - 200",
        img: "../../../img/img-dsl/",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2115,
        title: "empaque carburador",
        img: "../../../img/img-dsl/2115.png",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "empaque base carburador",
        img: "../../../img/img-dsl/",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1801,
        title: "empaque espaciador carb.",
        img: "../../img/img-dsl/3564.jpg",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2833,
        title: "empaque culata gx160",
        img: "../../../img/img-dsl/",
        description: "diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

/*A*/
/*B*/
/*C*/
/*D*/
/*E*/
/*F*/
/*G*/
/*H*/
/*I*/
/*J*/
/*K*/
/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
/*Q*/
/*R*/
/*S*/
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

XP395.map((i) => {
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












