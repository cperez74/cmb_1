const GX390 = [
/*inicio*/
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
{
    id: 3700,
    title: "tapa de enfriamiento",
    img: "/img/img-gsl/4tiempos/gx390/3700.png",
    description: "tapa de enfriamiento para motor de 13 - 15hp"
},

{
    id: 1478,
    title: "tapa valvula gx390",
    img: "/img/img-gsl/4tiempos/gx390/1478.png",
    description: "tapa valvula para motor 9 - 13 - 15hp"
},

{
    id: 423,
    title: "trinquete",
    img: "/img/img-gsl/4tiempos/gx390/423.png",
    description: "Uña o trinquete de arranque para motor 9 - 13 - 15hp"
},

/*U*/
/*V*/
{
    id: 3624,
    title: "varilla aceleracion",
    img: "/img/img-gsl/4tiempos/gx390/1511.png",
    description: "varilla aceleracion de motor 13 - 15hp"
},

{
    id: 3624,
    title: "varilla impulsadora",
    img: "/img/img-gsl/4tiempos/gx390/1351.png",
    description: "varilla impulsadora de motor 13 - 15hp"
},

{
    id: 1352,
    title: "ventilador volanta",
    img: "/img/img-gsl/4tiempos/gx390/1352.png",
    description: "ventilador volanta para motor 13 - 15hp"
},

/*W*/
/*X*/
/*Y*/
/*Z*/
/*final*/
]


const piece = document.querySelector(".card");

GX390.map((i) => {
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












