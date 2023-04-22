const gx460_1= [
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
{
    id: "3539 3540",
    title: "juego de valvula",
    img: "/img/img-gsl/4tiempos/gx460/3539_3540.png",
    description: "valvula de admision y escape"
},

/*K*/
{
    id: 2536,
    title: "kit piston gx460 std.",
    img: "/img/img-gsl/4tiempos/gx460/1681.png",
    description: "este kit incluuye piston std 92mm, anillos std 92mm, pasador y clips"
},

{
    id: 3542,
    title: "kit piston gx420 0.25",
    img: "/img/img-gsl/4tiempos/gx460/1681.png",
    description: "este kit incluye piston sobremedida 92mm + 0.25, anillos sobremedida 92mm + 0.25, pasador y clips "
},

/*L*/
{
    id: 1442,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx460/1442.png",
    description: "llave de combustible hembra"
},

{
    id: 493,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx460/493.png",
    description: "llave de combustible macho"
},

/*M*/
{
    id: 2172,
    title: "mango de arranque",
    img: "/img/img-gsl/4tiempos/gx460/2172.png",
    description: "mango o empuñadura de arranque"
},
/*N*/
/*Ñ*/
/*O*/    
{
    id: 3521,
    title: "oring carburador",
    img: "/img/img-gsl/4tiempos/gx460/3521.png",
    description: "oring taza de carburador"
},

/*P*/
{
    id: 96,
    title: "platina guia",
    img: "/img/img-gsl/4tiempos/gx460/96.png",
    description: "platina guia para varillas impulsadoras"
},

{
    id: 3138,
    title: "piñon regulador",
    img: "/img/img-gsl/4tiempos/gx460/3138.png",
    description: "piñon de lubricacion para motor a gasolina "
},

/*Q*/
/*R*/
{
    id: 498,
    title: "resorte aceleracion",
    img: "/img/img-gsl/4tiempos/gx460/490.png",
    description: "resorte varilla aceleracion 0.3mm grosor motor 16hp"
},

{
    id: 915,
    title: "resorte arranque",
    img: "/img/img-gsl/4tiempos/gx460/915.png",
    description: "resorrte tapa de arranque motor 16hp"
},

{
    id: 490,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx460/490.png",
    description: "resorte gabernador 1mm grosor para generador"
},

{
    id: 2452,
    title: "resorte gobernador",
    img: "/img/img-gsl/4tiempos/gx460/2452.png",
    description: "resorte gobernador 1.4mm grosor para motor"
},

{
    id: 1306,
    title: "retenedor aceite",
    img: "/img/img-gsl/4tiempos/gx460/1306.jpg",
    description: "retenedor aceite ref 35x52x8"
},

/*S*/
{
    id: 3493,
    title: "seguro valvula de admision",
    img: "/img/img-gsl/4tiempos/gx460/3493.png",
    description: "seguro valvula de admision 13 - 16hp"
},

{
    id: 3494,
    title: "seguro valvula de escape",
    img: "/img/img-gsl/4tiempos/gx460/3494.png",
    description: "seguro valvula de escape 13 - 16hp"
},

{
    id: 1264,
    title: "sensor nivel de aceite",
    img: "/img/img-gsl/4tiempos/gx460/1264.png",
    description: "sensor nivel de aceite externo"
},

/*T*/
{
    id: 3639,
    title: "tanque de combustible",
    img: "/img/img-gsl/4tiempos/gx460/3639.png",
    description: "tanque de combustible de 9 - 13 - 16hp"
},

{
    id: 3376,
    title: "tapa de arranque",
    img: "/img/img-gsl/4tiempos/gx460/3376.png",
    description: "tapa de arranque manual para motor de 9 - 13 - 15 - 16hp"
},

{
    id: 3555,
    title: "tapa tanque combustible",
    img: "/img/img-gsl/4tiempos/gx460/3555.png",
    description: "tapa tanque de combustible para motor a gasolina."
},

/*20 */
/*U*/
/*V*/
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












