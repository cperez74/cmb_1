const gx270_1 = [
/*inicio*/
/*A*/
{
    id: 3606,
    title: "aguja de carburador",
    img: "/img/img-gsl/4tiempos/gx270/3606.png",
    description: ""
},

{
    id: 816,
    title: "anillos gx270 std",
    img: "/img/img-gsl/4tiempos/gx270/816.png",
    description: "anillos std para motor de 9hp 77mm diametro y 2mm grosor"
},

{
    id: 3058,
    title: "anillos gx270 0.25",
    img: "/img/img-gsl/4tiempos/gx270/816.png",
    description: "anillos sobre medida para motor 9hp 77mm + 0.25 y 2mm grosor"
},

{
    id: 1745,
    title: "anillos gx270 0.50",
    img: "/img/img-gsl/4tiempos/gx270/816.png",
    description: "anillos sobre medida para motor 9hp 77mm + 0.50 y 2mm grosor"
},

/*B*/
{
    id: 3649,
    title: "biela gx270",
    img: "/img/img-gsl/4tiempos/gx270/3649.png",
    description: "biela para motor a gasolina 9hp"
},

{
    id: 2902,
    title: "bloque gx270",
    img: "/img/img-gsl/4tiempos/gx270/500.png",
    description: "bloque motor para 9hp std 77mm diametro cilinddro"
},

{
    id: 58,
    title: "bobina gx270",
    img: "/img/img-gsl/4tiempos/gx270/58.png",
    description: "bobina de encendido para motor de 9hp"
},

{
    id: 3466,
    title: "brida gx270",
    img: "/img/img-gsl/4tiempos/gx270/3466.png",
    description: "brida o base carburador de  9hp"
},

/*C*/
{
    id: 1135,
    title: "capuchon bujia",
    img: "/img/img-gsl/4tiempos/gx270/1135.png",
    description: "capuchon para bujia"
},

{
    id: 2636,
    title: "carburador gx270",
    img: "/img/img-gsl/4tiempos/gx270/2836.png",
    description: "carburador para motor 9hp "
},

{
    id: 2957,
    title: "choque carburador",
    img: "/img/img-gsl/4tiempos/gx270/2957.png",
    description: "choque para carburador de generador"
},

{
    id: 600,
    title: "clip pasador",
    img: "/img/img-gsl/4tiempos/gx270/600.png",
    description: "clip pasador o seguro pasador para motor 9hp"
},

{
    id: 3394,
    title: "culata gx270",
    img: "/img/img-gsl/4tiempos/gx270/3394.png",
    description: "culata para motor de 9hp"
},

/*D*/
/*E*/
{
    id: 3778,
    title: "empaque carter",
    img: "/img/img-gsl/4tiempos/gx270/3778.png",
    description: "empaque tapa carter 9hp 77mm"
},

{
    id: 1022,
    title: "empaque culata",
    img: "/img/img-gsl/4tiempos/gx270/1022.png",
    description: "empaque culata de motor 9hp 77mm"
},

{
    id: 1391,
    title: "empaque motor",
    img: "/img/img-gsl/4tiempos/gx270/1391.png",
    description: "empaque motor para motor de 9hp"
},

{
    id: 2619,
    title: "empaque mofle gx270",
    img: "/img/img-gsl/4tiempos/gx270/2619.png",
    description: "empaque exosto 9hp"
},

{
    id: 924,
    title: "empaque tapa valvula",
    img: "/img/img-gsl/4tiempos/gx270/924.png",
    description: "empaque tapa valvula para motor 9hp"
},

{
    id: 461,
    title: "exosto",
    img: "/img/img-gsl/4tiempos/gx270/461.webp",
    description: "exosto para motor 9hp"
},

/*F*/
{
    id: 356,
    title: "filtro de aire",
    img: "/img/img-gsl/4tiempos/gx270/356.png",
    description: "filtro de aire para motor 9hp"
},

/*20*/
/*final*/
]


const piece = document.querySelector(".card");

gx270_1.map((i) => {
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












