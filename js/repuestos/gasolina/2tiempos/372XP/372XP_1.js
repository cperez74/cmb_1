const XP372 = [
/*inicio*/
/*A*/
{
    id: 2178,
    title: "anillos 372xp",
    img: "/img/img-gsl/2tiempos/motosierra/288xp/2178.png",
    description: "anillo para 372xp original"
},

{
    id: 2728,
    title: "anillos 372xp",
    img: "/img/img-gsl/2tiempos/motosierra/288xp/2178.png",
    description: "anillo para 372xp"
},

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
{
    id: 2717,
    title: "kit piston 372",
    img: "/img/img-gsl/2tiempos/motosierra/288xp/2717.png",
    description: "kit piston 372xp incluye anillo, piston, pasador y clips pasador"
},

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
/*U*/
/*V*/
/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

XP372.map((i) => {
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












