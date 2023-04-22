const MS361 = [
/*inicio*/
/*A*/
{
    id: 3353,
    title: "anillos",
    img: "/img/img-gsl/2tiempos/motosierras/361/868.png",
    description: "anillos para motosierra ms361 47mm"
},

/*B*/
/*C*/
/*
{
    id: 0000,
    title: "canastilla campana",
    img: "/img/img-gsl/2tiempos/motosierras/361/0000.png",
    description: "canastilla campana ms361"
},

{
    id: 0000,
    title: "canastilla piston",
    img: "/img/img-gsl/2tiempos/motosierras/361/0000.png",
    description: "canastilla piston ms361"
},
*/

/*D*/
/*E*/
/*F*/
{
    id: 181,
    title: "filtro de combustible",
    img: "/img/img-gsl/2tiempos/motosierras/361/181.png",
    description: "filtro de combustible punta delgada ms361"
},

/*G*/
{
    id: 3126,
    title: "garganta de desfogue",
    img: "/img/img-gsl/2tiempos/motosierras/361/3126.png",
    description: "garganta de desfogue ms361"
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 2976,
    title: "kit carburador",
    img: "/img/img-gsl/2tiempos/motosierras/361/2976.png",
    description: "kit diafragma para carburador ms361"
},

/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
/*Q*/
/*R*/
{
    id: 3448,
    title: "retenedor grande",
    img: "/img/img-gsl/2tiempos/motosierras/361/3448.png",
    description: "retenedor grande ms361 0x0x0"
},

{
    id: 3373,
    title: "retenedor pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/361/3373.png",
    description: "retenedor pequeño ms361 0x0x0"
},

/*S*/
{
    id: 3508,
    title: "sin fin",
    img: "/img/img-gsl/2tiempos/motosierras/361/3508.png",
    description: "piñon sin fin ms361"
},

/*T*/
{
    id: 3461,
    title: "tapa de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/361/3461.png",
    description: "tapa de aceite para motosierra ms361"
},

{
    id: 2187,
    title: "tapa de gasolina",
    img: "/img/img-gsl/2tiempos/motosierras/361/2187.png",
    description: "tapa de gasolina para motosierra ms361"
},

/*U*/
/*V*/
/*W*/
/*X*/
/*Y*/
/*Z*/


/*final*/
]


const piece = document.querySelector(".card");

MS361.map((i) => {
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












