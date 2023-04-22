const CS52 = [
/*inicio*/
/*A*/
{
    id: 1635,
    title: "amortiguador grande.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1635.png",
    description: "amortiguador grande para motosierra 5200 - Cs52"
},

{
    id: 1636,
    title: "amortiguador pequeño.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1636.png",
    description: "amortiguador pequeño para motosierra 5200 - Cs52."
},

{
    id: 178,
    title: "anillos 43mm.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1536.png",
    description: "anillos 43mm para motosierra 5200 - Cs52."
},

{
    id: 1536,
    title: "anillos 45mm.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1536.png",
    description: "anillos 45mm para motosierra 5200 - Cs52."
},

/*B*/
{
    id: 1801,
    title: "bobina de encendido.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/288.png",
    description: "bobina de encendido para motosierra 5200 - Cs52."
},

{
    id: 358,
    title: "bomba de aceite #1.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/358.png",
    description: "bomba de aceite #1 para motosierra 5200 - Cs52."
},

{
    id: 408,
    title: "bomba de aceite #2",
    img: "/img/img-gsl/2tiempos/motosierras/5200/408.png",
    description: "bomba de aceite #2 para motosierra 5200 - Cs52."
},

{
    id: 2605,
    title: "brida carburador",
    img: "/img/img-gsl/2tiempos/motosierras/5200/2605.png",
    description: "brida base carburador para motosierra 5200 - Cs52."
},

/*C*/
/*
{
    id: 1757,
    title: "campana.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1757.png",
    description: "campana para motosierra 5200 - Cs52."
},

{
    id: 487,
    title: "canastilla campana.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/487.png",
    description: "canastilla campana para motosierra 5200 - Cs52."
},

*/
{
    id: 1191,
    title: "canastilla piston.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1191.png",
    description: "canastilla piston para motosierra 5200 - Cs52."
},

/*
{
    id: 37,
    title: "capuchon bujia.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/37.png",
    description: "capuchon para bujia motosierra y guadaña."
},
*/

{
    id: 254,
    title: "carburador.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3375.png",
    description: "carburador 5200 - Cs52."
},

{
    id: 3312,
    title: "cigueñal.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3312.png",
    description: "cigueñal para motosierra 5200 - Cs52."
},

{
    id: 1538,
    title: "cilindro 43mm.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3656.png",
    description: "kit cilindro 43mm (cilindro, piston, anillos, pasador, clip pasador)."
},

{
    id: 3656,
    title: "cilindro 45mm",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3656.png",
    description: "kit cilindro 45mm (cilindro, anillos, pasador, clip pasador)."
},

{
    id: 1192,
    title: "cubierta de cadena",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1192.png",
    description: "cubierta de cadena para motosierra 5200 - Cs52."
},

/*D*/
/*E*/
{
    id: 255,
    title: "embrague.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/255.png",
    description: "embrague para motosierra 5200 - Cs52."
},

{
    id: 3607,
    title: "esparrago",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3607.png",
    description: "esparrago para motosierra 5200 - Cs52."
},

/*F*/
{
    id: 191,
    title: "filtro de aire.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/191.png",
    description: "filtro de aire 5200 - Cs52."
},

{
    id: 3001,
    title: "filtro de combustible.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3001.png",
    description: "filtro de combustible 5200 - Cs52."
},

{
    id: 3579,
    title: "filtro de combustible.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/3579.png",
    description: "filtro de combustible en ceramica 5200 - Cs52."
},

/*K*/
{
    id: 1.1,
    title: "kit amortiguadores.",
    img: "/img/img-gsl/2tiempos/motosierras/5200/1.1.png",
    description: "kit amortiguador para motosierra 5200 - Cs52."
},

/*final*/
]


const piece = document.querySelector(".card");

CS52.map((i) => {
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












