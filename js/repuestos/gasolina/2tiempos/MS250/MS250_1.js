const MS250 = [
/*inicio*/
/*A*/
{
    id: 3348,
    title: "amortiguador ms250",
    img: "/img/img-gsl/2tiempos/motosierras/250/3348.png",
    description: "amortiguador para motosierra ms250"
},

/*B*/
/*C*/
{
    id: 3457,
    title: "carburador ms250",
    img: "/img/img-gsl/2tiempos/motosierras/250/3457.png",
    description: "amortiguador para motosierra ms250"
},

/*D*/
/*E*/
/*F*/
/*G*/
{
    id: 3126,
    title: "garganta desfogue",
    img: "/img/img-gsl/2tiempos/motosierras/250/3126.png",
    description: "garganta desfogue ms250"
},

/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 3573,
    title: "kit carburador",
    img: "/img/img-gsl/2tiempos/motosierras/250/3573.png",
    description: "kit carburador ms250"
},

{
    id: 2926,
    title: "kit tensor",
    img: "/img/img-gsl/2tiempos/motosierras/250/2926_1.png",
    description: "kit tornillo tensor ms250"
},

/*L*/
/*M*/
/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 3455,
    title: "polea de arranque",
    img: "/img/img-gsl/2tiempos/motosierras/250/3455.png",
    description: "polea de arranque ms250"
},

/*Q*/
/*R*/
/*S*/
/*T*/
{
    id: 197,
    title: "trinquete",
    img: "/img/img-gsl/2tiempos/motosierras/250/197.png",
    description: "trinquete o uña de arranque ms250"
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

MS250.map((i) => {
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












