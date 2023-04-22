const gx460_1= [
/*inicio*/
/*A*/
{
    id: 2927,
    title: "anillos gx460 std",
    img: "/img/img-gsl/4tiempos/gx460/2927.png",
    description: "anillos std para 16hp 92mm"
},

/*B*/
{
    id: 1475,
    title: "balancin gx460",
    img: "/img/img-gsl/4tiempos/gx460/1475.png",
    description: "balancin valvula de 16hp"
},

{
    id: 3640,
    title: "biela gx460",
    img: "/img/img-gsl/4tiempos/gx460/3640.png",
    description: "biela 16hp"
},

{
    id: 3391,
    title: "bloque gx460",
    img: "/img/img-gsl/4tiempos/gx460/3391.png",
    description: "bloque motor 92mm"
},

{
    id: 58,
    title: "bobina de inicio",
    img: "/img/img-gsl/4tiempos/gx460/58.png",
    description: "bobina de encendido o inicio."
},

{
    id: 1101,
    title: "brida carburador gx460",
    img: "/img/img-gsl/4tiempos/gx460/1101.png",
    description: "brida o base carburador"
},

/*C*/
{
    id: 1135,
    title: "capuchon bujia",
    img: "/img/img-gsl/4tiempos/gx460/1135.png",
    description: "capuchon para bujia"
},

{
    id: 3519,
    title: "carburador gx460",
    img: "/img/img-gsl/4tiempos/gx460/3519.png",
    description: "carburador para motor 16hp"
},

{
    id: 3530,
    title: "carburador 10000w",
    img: "/img/img-gsl/4tiempos/gx460/3530.png",
    description: "carburador para generador"
},

/*D*/
/*E*/
{
    id: 657,
    title: "empaque carburador #1",
    img: "/img/img-gsl/4tiempos/gx460/657.png",
    description: "empaque base carburador"
},

{
    id: 3403,
    title: "empaque carburador #2",
    img: "/img/img-gsl/4tiempos/gx460/3403.png",
    description: "empaque espaciador"
},

{
    id: 658,
    title: "empaque carburador #3",
    img: "/img/img-gsl/4tiempos/gx460/658.png",
    description: "empaque filtro de aire"
},

{
    id: 1742,
    title: "empaque culata gx460",
    img: "/img/img-gsl/4tiempos/gx460/1742.png",
    description: "empaque culata para bloque 92mm"
},

{
    id: 2619,
    title: "empaque mofle gx460",
    img: "/img/img-gsl/4tiempos/gx460/2619.png",
    description: "empaque mofle para motor de 16hp"
},

{
    id: 3557,
    title: "empaque mofle gx460",
    img: "/img/img-gsl/4tiempos/gx460/3557.png",
    description: "empaque exosto para motor 3 tornillos"
},

{
    
    title: "empaque motor gx460",
    img: "/img/img-gsl/4tiempos/gx460/1181.png",
    description: "empaquetadura completa para motor a gasolina 16hp"
},


{
    id: 924,
    title: "empaque tapa valvula",
    img: "/img/img-gsl/4tiempos/gx460/924.png",
    description: "empaque tapa valvula"
},

/*F*/
{
    id: 356,
    title: "filtro de aire",
    img: "/img/img-gsl/4tiempos/gx460/356.png",
    description: "filtro de aire espuma carton para motor"
},

/*G*/
{
    id: 3624,
    title: "guardian de aceite",
    img: "/img/img-gsl/4tiempos/gx460/1264.png",
    description: "alarma de aceite interna"
},

{
    id: 2570,
    title: "gorro economizador",
    img: "/img/img-gsl/4tiempos/gx460/2570.png",
    description: "retenedor (gomita) de valvula"
},

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












