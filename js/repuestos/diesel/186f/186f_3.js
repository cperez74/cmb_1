const diesel = [
/*inicio*/
/*F*/
{
    id: 419,
    title: "filtro de combustible diesel",
    img: "/img/img-dsl/186f/419.png",
    description: "elemento filtro de combustible para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
},

{
    id: 2636,
    title: "filtro de combustible diesel",
    img: "/img/img-dsl/186f/2636.png",
    description: "filtro de combustible para generador diesel cabinado"
},

{
    id: 3584,
    title: "filtro de combustible diesel",
    img: "/img/img-dsl/186f/3584.png",
    description: "filtro de combustible para generador diesel cabinado # 2"
},

/*G*/
    {
        id: 1491,
        title: "gorro economizador",
        img: "/img/img-dsl/186f/1491.png",
        description: "(economizador - gomita de valvula - retenedor de valvula) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

/*H*/
/*I*/
    {
        id: 2115,
        title: "inyector 186f corto",
        img: "/img/img-dsl/186f/2115.jpg",
        description: "inyector punta corta conexion lateral para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 3624,
        title: "inyector 186fa largo",
        img: "/img/img-dsl/186f/3624.png",
        description: "inyector punta larga conexion lateral diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1801,
        title: "inyector 186fa largo",
        img: "/img/img-dsl/186f/1801.png",
        description: "inyector punta larga conexion superior diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

/*J*/
{
    id: "1800_726",
    title: "juego de valvula",
    img: "/img/img-dsl/186f/1800_726.png",
    description: "valvula admision y escape cuello corto para 10hp (f400 - 186f - 186fa - t100)"
},

/*K*/
    {
        title: "kit piston 186f std",
        img: "/img/img-dsl/186f/822.png",
        description: "kit piston falda larga, punto de explosion conico 86mm incluye (piston, anillos, pasador y clips)"
    },

    {
        title: "kit piston 186f 0.25",
        img: "/img/img-dsl/186f/822.png",
        description: "kit piston falda larga, punto de explosion conico 86mm + 0.25 incluye (piston, anillos, pasador y clips)"
    },

    {
        title: "kit piston 186f 0.50",
        img: "/img/img-dsl/186f/822.png",
        description: "kit piston falda larga, punto de explosion conico 86mm + 0.50 incluye (piston, anillos, pasador y clips)"
    },

    {
        title: "kit piston 186fa std",
        img: "/img/img-dsl/186f/822.png",
        description: "kit piston falda larga, punto de explosion plano 86mm incluye (piston, anillos, pasador y clips)"
    },

    {
        title: "kit piston 186fa 0.25",
        img: "/img/img-dsl/186f/822.png",
        description: "kit piston falda larga, punto de explosion plano 86mm + 0.25 incluye (piston, anillos, pasador y clips)"
    },

    {
        title: "kit piston 186fa 0.50",
        img: "/img/img-dsl/186f/822.png",
        description: "kit piston falda larga, punto de explosion plano 86mm + 0.50 incluye (piston, anillos, pasador y clips)"
    },

/*L*/
{
    id: 2073,
    title: "llave de combustible",
    img: "/img/img-dsl/186f/2073.jpg",
    description: "llave de combustible diesel derecha"
},

{
    id: 2072,
    title: "llave de combustible",
    img: "/img/img-dsl/186f/2072.jpg",
    description: "llave de combustible diesel izquierda"
},

/*M*/
    {
        id: 3046,
        title: "mofle 186f - 186fa.",
        img: "/img/img-dsl/186f/3046.png",
        description: "exosto o mofle diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1346,
        title: "moneda balancin 186f - 186fa",
        img: "/img/img-dsl/186f/1346.png",
        description: "antidesgaste para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
    },

    {
        id: 1842,
        title: "motor de arranque 186f - 186fa",
        img: "/img/img-dsl/186f/1842.jpg",
        description: "motor de arranque 186f - 186fa para motor diesel (gasoil) 10hp (f400 - 186f - t100)."
    },

/*N*/
/*Ñ*/
/*O*/
/*P*/
    {
        id: 3563,
        title: "pasador piston 186f",
        img: "/img/img-dsl/186f/3528.jpg",
        description: "pasador para motor diesel 10hp (gasoil) 10hp (f400 - 186f - 186fa - t100)."
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












