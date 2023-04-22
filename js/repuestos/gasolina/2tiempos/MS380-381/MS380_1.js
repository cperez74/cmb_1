const MS380 = [
/*inicio*/
/*A*/
{
    id: 929,
    title: "amortiguador grande",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/929.png",
    description: "amortiguador grande ms380-381"
},

{
    id: 468,
    title: "amortiguador mediano",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/468.png",
    description: "amortiguador mediano ms380 - 381"
},

{
    id: 1970,
    title: "amortiguador pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/1970.png",
    description: "amortiagudor pequeño ms380-381"
},


{
    id: 466,
    title: "amortiguador platina",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/466.png",
    description: "amortiguador de platina ms380-381"
},


{
    id: 0000,
    title: "anillos ms380-381",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/868.png",
    description: "anillos ms380 - 381 54mm"
},

/*
{
    id: 000,
    title: "arandela con clip",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/000.png",
    description: "arandela con clip para motosierra ms 380-381"
},
*/

/*B*/
/*
{
    id: 000,
    title: "bobina de encendido",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/000.png",
    description: "bobina de encendido ms380-381"
},
*/

{
    id: 472,
    title: "bomba de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/472.png",
    description: "bomba de lubricacion ms380-381"
},

/*C*/
/*
{
    id: 000,
    title: "campana del embrague",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/000.png",
    description: "campana del embrague ms380-381"
},
*/

{
    id: 2964,
    title: "canastilla campana",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/2964.png",
    description: "canastilla campana ms380-381"
},

{
    id: 2219,
    title: "canastilla piston",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/2219.png",
    description: "canastilla piston ms380-381"
},

{
    id: 3570,
    title: "cuña cigueñal",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3570.png",
    description:"cuña cigueñal ms380-381"
},


/*D*/
/*E*/
{
    id: 3267,
    title: "empaque cilindro",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3267.png",
    description: "empaque cilindro ms380-381."
},

{
    id: 3268,
    title: "empaque motor",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3268.png",
    description: "kit empaque motor ms380-381"
},

/*F*/
{
    id: 000,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/181.png",
    description: "filtro de combustible punta delgada ms380-381"
},

/*G*/
{
    id: 000,
    title: "garganta de desfogue",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3132.png",
    description: " ms380-381"
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 1645,
    title: "kit carburador #1",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/1645.png",
    description: ""
},

{
    id: 3424,
    title: "kit carburador #2",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3424.png",
    description: ""
},

{
    id: 230,
    title: "kit piston",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/230.png",
    description: ""
},

{
    id: 3583,
    title: "kit tornillo tensor",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3583.png",
    description: ""
},

/*L*/
{
    id: 2038,
    title: "lamina guia",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/2038.png",
    description: ""
},

/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/

{
    id: 3144,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3144.png",
    description: ""
},

/*
{
    id: 000,
    title: "pin de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/000.png",
    description: ""
},
*/

/*Q*/
/*R*/
/*
{
    id: 000,
    title: "resorte de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/000.png",
    description: ""
},
*/

{
    id: 3408,
    title: "resorte embrague",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3408.png",
    description: "resorte embrague"
},


/*final*/
]


const piece = document.querySelector(".card");

MS380.map((i) => {
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












