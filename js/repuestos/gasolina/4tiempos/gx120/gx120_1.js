const GX120 = [
/*inicio*/

/*A*/
    {
        id: 2890,
        title: "anillos gx120 std",
        img: "/img/img-gsl/4tiempos/gx120/2890.png",
        description: "anillos std motor de 4hp 60mm"
    },

    {
        id: 3591,
        title: "anillos gx120 std",
        img: "/img/img-gsl/4tiempos/gx120/2890.png",
        description: "anillos std alta compresion motor de 4hp 60mm"
    },

    {
        id: 2891,
        title: "anillos gx120 0.25",
        img: "/img/img-gsl/4tiempos/gx120/2890.png",
        description: "anillos 0.25 motor 4hp 60mm + 0.25"
    },

    {
        id: 1360,
        title: "anillos gx120 0.50",
        img: "/img/img-gsl/4tiempos/gx120/2890.png",
        description: "anillos 0.50 motor 4hp 60mm + 0.50"
    },

/*B*/
    {
        id: 2710,
        title: "biela gx120",
        img: "/img/img-gsl/4tiempos/gx120/2710.png",
        description: "biela motor 4hp"
    },

/*C*/
{
    id: 1238,
    title: "capuchon bujia",
    img: "/img/img-gsl/4tiempos/gx120/.png",
    description: "capuchon de bujia para motor a gasolina."
},

/*D*/
/*E*/
    {
        id: 2089,
        title: "empaque motor gx120",
        img: "/img/img-gsl/4tiempos/gx120/2089.png",
        description: "empaque motor 4hp"
    },

/*F*/
/*G*/
/*H*/
/*I*/
/*J*/
{
    id: 3098 - 3099,
    title: "juego de valvula",
    img: "/img/img-gsl/4tiempos/gx120/3098-3099.png",
    description: "valvula de admision y escape gx120"
},

/*K*/
    {
        id: 3044,
        title: "kit piston gx120 std",
        img: "/img/img-gsl/4tiempos/gx120/3044.png",
        description: "este kit incluye piston, juego de anillos, pasador y clip de pasador"
    },

    {
        id: 642,
        title: "kit piston gx120 0.25",
        img: "/img/img-gsl/4tiempos/gx120/3044.png",
        description: "este kit incluye piston, juego de anillos, pasador y clip de pasador"
    },

/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
    {
        id: 1451,
        title: "piston gx120 std",
        img: "/img/img-gsl/4tiempos/gx120/1451.png",
        description: "piston std para motor 4hp 60mm incluye piston, pasador y clip pasador"
    },

    {
        id: 1597,
        title: "piston gx120 0.25",
        img: "/img/img-gsl/4tiempos/gx120/1451.png",
        description: "piston 0.25 para motor 4hp 60mm 0.25 o 0.10 incluye, pasador y clip pasador"
    },

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

GX120.map((i) => {
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












