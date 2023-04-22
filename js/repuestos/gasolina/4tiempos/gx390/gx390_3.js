const GX390 = [
/*inicio*/
/*O*/
{
    id: 3521,
    title: "oring carburador",
    img: "/img/img-gsl/4tiempos/gx390/3521.png",
    description: "oring tapa carburador 13 - 15hp"
},

/*P*/
{
    id: 602,
    title: "pasador piston gx390",
    img: "/img/img-gsl/4tiempos/gx390/1236.png",
    description: "pasador piston de 13 - 15hp"
},

{
    id: 600,
    title: "pin pasador gx390.",
    img: "/img/img-gsl/4tiempos/gx390/600.png",
    description: "seguro pasador piston 13 - 15hp"
},

{
    id: 380,
    title: "pivote gx390",
    img: "/img/img-gsl/4tiempos/gx390/380.png",
    description: "pivote balancin de 13 - 15hp"
},

{
    id: 96,
    title: "platina guia gx390",
    img: "/img/img-gsl/4tiempos/gx390/96.png",
    description: "platina guia de balancin y varillas impulsadoras."
},

{
    id: 653,
    title: "plato trinquete gx390",
    img: "/img/img-gsl/4tiempos/gx390/653.png",
    description: "plato soporte trinquete para motor de 13 - 15hp"
},

{
    id: 2718,
    title: "polea de arranque gx390",
    img: "/img/img-gsl/4tiempos/gx390/2718.png",
    description: "polea de arranque para motor de 13 - 15hp"
},

/*Q*/
/*R*/
{
    id: 915,
    title: "resorte de arranque",
    img: "/img/img-gsl/4tiempos/gx390/915.png",
    description: "suncho, cinta o resorte de arranque para motor de 13hp"
},

{
    id: 498,
    title: "resorte de aceleracion gx390",
    img: "/img/img-gsl/4tiempos/gx390/955.png",
    description: "resorte aceleracion 0.3mm de grosor para motor de 13 - 15hp"
},

{
    id: 955,
    title: "resorte gobernador gx390",
    img: "/img/img-gsl/4tiempos/gx390/955.png",
    description: "resorte gobernador 1mm de grosor para motor 9 - 13 - 15hp generador electrico"
},

{
    id: 2452,
    title: "resorte gobernador gx390",
    img: "/img/img-gsl/4tiempos/gx390/2452.png",
    description: "resorte gobernador 1.4mm para motor 13 - 15hp"
},

{
    id: 650,
    title: "resorte plato gx390",
    img: "/img/img-gsl/4tiempos/gx390/650.png",
    description: "polea de arranque para motor de 13 - 15hp"
},

{
    id: 652,
    title: "resorte trinquete gx390",
    img: "/img/img-gsl/4tiempos/gx390/652.png",
    description: "resorte trinquete de motor 13 - 15hp"
},

{
    id: 3682,
    title: "retenedor cigueñal gx390",
    img: "/img/img-gsl/4tiempos/gx390/1306.jpg",
    description: "retenedor de aceite para cigueñal gx390"
},

/*S*/
{
    id: 3493,
    title: "seguro valvula de admision",
    img: "/img/img-gsl/4tiempos/gx390/3493.png",
    description: "seguro valvula de admision 13 - 15hp"
},

{
    id: 3494,
    title: "seguro valvula de escape",
    img: "/img/img-gsl/4tiempos/gx390/3494.png",
    description: "seguro valvula de escape 13 - 15hp"
},

{
    id: 1264,
    title: "sensor nivel de aceite",
    img: "/img/img-gsl/4tiempos/gx390/1264.png",
    description: "sensor nivel de aceite interno"
},

/*T*/
{
    id: 3639,
    title: "tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx390/3639.png",
    description: "tanque de combustible de 9 - 13 - 15hp"
},

{
    id: 3376,
    title: "tapa de arranque",
    img: "/img/img-gsl/4tiempos/gx390/3376.png",
    description: "tapa de arranque motor de 13 - 15hp"
},

{
    id: 3555,
    title: "tapa tanque combustible",
    img: "/img/img-gsl/4tiempos/gx390/3555.png",
    description: "tapa tanque de combustible para motor a gasolina."
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












