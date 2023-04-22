const gx270_2 = [
/*inicio*/
/*G*/
{
    id: 1264,
    title: "guardian de aceite",
    img: "/img/img-gsl/4tiempos/gx270/1264.png",
    description: "alarma de aceite interna para nivel de aceite"
},

{
    id: 2570,
    title: "gorro economizador",
    img: "/img/img-gsl/4tiempos/gx270/2570.png",
    description: "alarma de aceite interna para nivel de aceite"
},

/*H*/
/*I*/
/*J*/
{
    id: 3303_3304,
    title: "juego de valvula",
    img: "/img/img-gsl/4tiempos/gx270/3303_3304.png",
    description: "kit elemntos internos de 9hp"
},

/*K*/
{
    id: 917,
    title: "kit carburador",
    img: "/img/img-gsl/4tiempos/gx270/917.png",
    description: "kit elementos internos de 9hp"
},

{
    id: 819,
    title: "kit piston std",
    img: "/img/img-gsl/4tiempos/gx270/819.png",
    description: "kit piston 9hp std 77mm incluye (piston, anillos, pasador y clip pasador)"
},

{
    id: 2953,
    title: "kit piston 0.50",
    img: "/img/img-gsl/4tiempos/gx270/819.png",
    description: "kit piston 9hp 77mm + 0.50 incluye (piston, anillos, pasador y clip pasador)"
},

/*L*/
{
    id: 1442,
    title: "llave combustible",
    img: "/img/img-gsl/4tiempos/gx270/1442.png",
    description: "llave de combustible hembra"
},

{
    id: 493,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx270/493.png",
    description: "llave de combustible"
},

/*M*/
{
    id: 2172,
    title: "mango arranque",
    img: "/img/img-gsl/4tiempos/gx270/2172.png",
    description: "mango de arraqnue para motor a gasolina"
},

/*N*/
/*Ñ*/
/*O*/
{
    id: 3521,
    title: "oring carburador",
    img: "/img/img-gsl/4tiempos/gx270/3521.png",
    description: "empaque sello carburador"
},

/*P*/
{
    id: 1.2,
    title: "palanca de aceleracion",
    img: "/img/img-gsl/4tiempos/gx270/1.2.png",
    description: "palanca de aceleracion para motor 9hp"
},

{
    id: 1236,
    title: "pasador piston",
    img: "/img/img-gsl/4tiempos/gx270/1236.png",
    description: "pasador piston para motor 9hp"
},

{
    id: 1111,
    title: "piñon regulador",
    img: "/img/img-gsl/4tiempos/gx270/1111.png",
    description: "piñon regulador o lubricacion de 9hp"
},

{
    id: 85,
    title: "piston std",
    img: "/img/img-gsl/4tiempos/gx270/85.png",
    description: "piston std para motor de 9hp 77mm"
},


/*Q*/
/*R*/
{
    id: 915,
    title: "resorte arranque",
    img: "/img/img-gsl/4tiempos/gx270/915.png",
    description: "resorte o cinta de arranque para notor 9hp"
},

{
    id: 498,
    title: "resorte aceleracion",
    img: "/img/img-gsl/4tiempos/gx270/955.png",
    description: "resorte aceleracion motor y generador 0.3mm grosor"
},

{
    id: 2452,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx270/2452.png",
    description: "resorte gobernador 1.4mm para motor"
},

{
    id: 955,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx270/955.png",
    description: "resorte gobernador para generador 1mm grosor"
},

{
    id: 652,
    title: "resorte trinquete",
    img: "/img/img-gsl/4tiempos/gx270/652.png",
    description: "resorte plato trinquete"
},

{
    id: 3725,
    title: "retenedor cigueñal",
    img: "/img/img-gsl/4tiempos/gx270/1306.jpg",
    description: "retenedor referencia 30x46x8"
},
/*final*/
]


const piece = document.querySelector(".card");

gx270_2.map((i) => {
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












