const MS380 = [
/*inicio*/
/*R */
{
    id: 3448,
    title: "retenedor grande",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3448.png",
    description: ""
},

{
    id: 3373,
    title: "retenedor pequeño",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3373.png",
    description: ""
},

{
    id: 3266,
    title: "rueda dentada",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3266.png",
    description: "rueda dentada para campana"
},

/*S*/
/*
{
    id: 000,
    title: "sin fin",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/000.png",
    description: ""
},
*/

/*T*/
{
    id: 3489,
    title: "tapa de aceite",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/3489.png",
    description: "tapa deposito de aceite"
},

{
    id: 2187,
    title: "tapa de gasolina",
    img: "/img/img-gsl/2tiempos/motosierras/380-381/2187.png",
    description: "tapa tanque de combustible"
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












