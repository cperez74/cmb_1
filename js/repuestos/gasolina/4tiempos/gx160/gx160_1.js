const GX160 = [
/*inicio*/
/*A*/
{
    id: 1376,
    title: "aguja de carburador",
    img: "/img/img-gsl/4tiempos/gx160/1376.png",
    description: "aaguja carburador gx 160 - 200"
},

{
    id: 494,
    title: "amortiguador base",
    img: "/img/img-gsl/4tiempos/gx160/494.png",
    description: "amortiguador tipo Z"
},

{
    id: 2338,
    title: "anillos gx160 - 200 std",
    img: "/img/img-gsl/4tiempos/gx160/2338.png",
    description: "anillos std para motor de 5.5 o 6.5hp 68mm diametro y 2mm de grosor."
},

{
    id: 1491,
    title: "anillos gx160 - 200 0.25",
    img: "/img/img-gsl/4tiempos/gx160/2338.png",
    description: "anillos sobre medida para motor de 5.5 o 6.5hp 68mm + 0.25 o 0.10 diametro y 2mm de grosor."
},

{
    id: 2115,
    title: "anillos gx160 - 200 0.50",
    img: "/img/img-gsl/4tiempos/gx160/2338.png",
    description: "anillos sobre medida para motor de 5.5 o 6.5hp 68mm + 0.50 o 0.20 diametro y 2mm de grosor."
},

{
    id: 450,
    title: "arbol de leva gx160",
    img: "/img/img-gsl/4tiempos/gx160/450.jpg",
    description: "arbol de levas para motor de 5.5 - 6.5hp."
},

/*B*/
{
    id: 1237,
    title: "balancin gx 160 - 200",
    img: "/img/img-gsl/4tiempos/gx160/1237.png",
    description: "balancin completo para motor 5.5 - 6.5hp."
},

{
    id: 260,
    title: "biela gx160",
    img: "/img/img-gsl/4tiempos/gx160/260.png",
    description: "biela std para motor 5.5 - 6.5hp."
},

{
    id: 260,
    title: "biela gx160 0.25",
    img: "/img/img-gsl/4tiempos/gx160/260.png",
    description: "biela 0.25 o 0.10 para motor 5.5 - 6.5hp."
},

{
    id: 1131,
    title: "bobina gx160",
    img: "/img/img-gsl/4tiempos/gx160/1131.png",
    description: "bobina de encendido para motor 5.5 - 6.5hp."
},

{
    id: 500,
    title: "bloque motor gx160",
    img: "/img/img-gsl/4tiempos/gx160/500.png",
    description: "bloque o cilindro para motor 5.5 - 6.5hp 7 ranuras"
},

{
    id: 3311,
    title: "bloque motor gx200",
    img: "/img/img-gsl/4tiempos/gx160/500.png",
    description: "bloque o cilindro para motor 5.5 - 6.5hp 6 ranuras"
},

/*C*/
{
    id: 394,
    title: "carburador gx160",
    img: "/img/img-gsl/4tiempos/gx160/394.jpg",
    description: "carburador para motor 5.5 - 6.5hp con llave de combustible."
},

{
    id: 1135,
    title: "capuchon bujia",
    img: "/img/img-gsl/4tiempos/gx160/1135.png",
    description: "capuchon para bujia motor a gasolina."
},

{
    id: 1238,
    title: "carburador gx200",
    img: "/img/img-gsl/4tiempos/gx160/1238.jpg",
    description: "carburador para motor 5.5 - 6.5hp sin llave de combustible."
},

{
    id: 1242,
    title: "cigueñal roscado gx160",
    img: "/img/img-gsl/4tiempos/gx160/1242.png",
    description: "cigueñal para motor de eje libre utilizable en motobombas, picapastos."
},

{
    id: 2615,
    title: "cigueñal conico gx200",
    img: "/img/img-gsl/4tiempos/gx160/2615.png",
    description: "cigueñal para planta electrica 2500w."
},

{
    id: 3389,
    title: "comando aceleracion gx 160",
    img: "/img/img-gsl/4tiempos/gx160/3389.png",
    description: "comando o palanca de aceleracion 5.5 - 6.5hp"
},

{
    id: 194,
    title: "culata gx 160 - 200",
    img: "/img/img-gsl/4tiempos/gx160/194.png",
    description: "culata para motor a gasolina 5.5 - 6.5hp"
},

/*D*/
/*E*/
{
    id: 1430,
    title: "empaque carburador #1",
    img: "/img/img-gsl/4tiempos/gx160/1430.png",
    description: "empaque insulador carburador para 5.5 - 6.5hp"
},

/*20*/


/*final*/
]


const piece = document.querySelector(".card");

GX160.map((i) => {
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












