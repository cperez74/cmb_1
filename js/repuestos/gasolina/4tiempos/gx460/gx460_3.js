const gx460_1= [
/*inicio*/
/*A*/
/*B*/
/*C*/
/*D*/
/*E*/
/*F*/
/*G*/
/*20 */
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
/*20 */

{
    id: 3700,
    title: "tapa de enfriamiento",
    img: "/img/img-gsl/4tiempos/gx460/3700.png",
    description: "tapa de enfriamiento para motor de 13 - 16hp"
},


{
    id: 1478,
    title: "tapa valvula gx420",
    img: "/img/img-gsl/4tiempos/gx460/1478.png",
    description: "tapa valvula para motor 9 - 13 - 16hp"
},

{
    id: 423,
    title: "trinquete",
    img: "/img/img-gsl/4tiempos/gx460/423.png",
    description: "Uña o trinquete de arranque para motor 9 - 13 - 16hp"
},

/*U*/
/*V*/
{
    id: 1351,
    title: "varilla impulsadora",
    img: "/img/img-gsl/4tiempos/gx460/1351.png",
    description: "varilla impulsadora balancines."
},

/*W*/
/*X*/
/*Y*/
/*Z*/

/*final*/
]


const piece = document.querySelector(".card");

gx460_1.map((i) => {
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












