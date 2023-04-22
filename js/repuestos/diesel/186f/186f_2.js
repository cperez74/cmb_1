const diesel = [
/*inicio*/
/*C*/
    {
        id: 1514,
        title: "casquetes 186f 40mm 0.50",
        img: "/img/img-dsl/186f/2830.jpg",
        description: "casquetes (conchas) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) para cigueñal de 40mm el muñon sobre medida"
    },

    {
        id: 2831,
        title: "casquetes 186fa 42mm std",
        img: "/img/img-dsl/186f/2830.jpg",
        description: "casquetes referencia (F-H) (conchas) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) para cigueñal de 42mm en el muñon."
    },

    {
        id: 2832,
        title: "casquetes 186fa 0.25 ",
        img: "/img/img-dsl/186f/2830.jpg",
        description: "referencia (F-H) de 42mm (conchas) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)  para cigueñal de 40mm el muñon sobre medida"
    },

    {
        id: 2833,
        title: "casquetes 186fa 0.50 ",
        img: "/img/img-dsl/186f/2830.jpg",
        description: "referencia (F-H) de 42mm (conchas) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) para cigueñal de 40mm el muñon sobre medida"
    },

    {
        id: 3047,
        title: "culata 186fa",
        img: "/img/img-dsl/186f/3047.png",
        description: "culata 10hp tres tornillo 186fa"
    },

    {
        id: "3047_1",
        title: "culata 186f",
        img: "/img/img-dsl/186f/3047_1.png",
        description: "culata 10hp dos tornillo 186fa"
    },

    {
        id: 1346,
        title: "cono de retencion",
        img: "/img/img-dsl/186f/1346.png",
        description: "cono de retencion motor 10hp (186f - 186fa - t100 -f400) "
    },

    {
        id: 1510,
        title: "cuña 5x14 diesel",
        img: "/img/img-dsl/186f/1510.png",
        description: "cuña para motor diesel."
    },

/*D*/
/*E*/
    {
        id: 233,
        title: "eje de descompresion",
        img: "/img/img-dsl/186f/233.png",
        description: "eje de descompresion de la tapa valvula motor diesel."
    },

    {
        id: 1523,
        title: "empaque motor 186f - 186fa",
        img: "/img/img-dsl/186f/1523.png",
        description: "empaquetadura completa para motor diesel (gasoil) 10hp (f400 - t100)"
    },

    {
        id: 2146,
        title: "empaque bomba 186f - 186fa.",
        img: "/img/img-dsl/186f/2146.png",
        description: "empaque para la bomba de inyeccion."
    },

    {
        id: 1490,
        title: "empaque camara 186f - 186fa.",
        img: "/img/img-dsl/186f/1490.png",
        description: "empaque camara de compresion diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 2578,
        title: "empaque culata 186f - 186fa.",
        img: "/img/img-dsl/186f/2578.jpg",
        description: "empaque culata o tapa de compresion diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 300,
        title: "empaque exosto 186f - 186fa",
        img: "/img/img-dsl/186f/300.png",
        description: "empaque para el exosto (mofle)."
    },

    {
        id: 2369,
        title: "empaque tapa valvula 186f",
        img: "/img/img-dsl/186f/2369.png",
        description: "empaque tapa valvula plano (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 732,
        title: "empaque tapa valvula 186fa",
        img: "/img/img-dsl/186f/732.png",
        description: "empaque tapa valvula 3 tornillos (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

/*F*/
    {
        id: 810,
        title: "filtro de aceite diesel",
        img: "/img/img-dsl/186f/810.png",
        description: "filtro de aceite para motor diesel."
    },

    {
        id: 3563,
        title: "filtro de aire 186f - 186fa",
        img: "/img/img-dsl/186f/3563.png",
        description: "elemento filtro de aire para motor diesel 10hp (gasoil) 10hp (f400 - 186f - 186fa - t100)"
    },

    {
        id: 1260,
        title: "filtro de aire 186f - 186fa",
        img: "/img/img-dsl/186f/1260.png",
        description: "filtro de aire bañado en aceite para motor diesel 10hp (gasoil) 10hp (f400 - 186f - 186fa - t100)"
    },

    {
        id: 1515,
        title: "filtro de aire completo 186f - 186fa",
        img: "/img/img-dsl/186f/1515.png",
        description: "filtro de aire completo para motor diesel 10hp (gasoil) 10hp (f400 - 186f - 186fa - t100)"
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












