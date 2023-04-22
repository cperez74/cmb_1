const GX390 = [
    /*inicio*/
/*A*/
{
    id: 393,
    title: "aguja carburador gx390",
    img: "/img/img-gsl/4tiempos/gx390/393.png",
    description: "aguja de gancho para motor de 13 - 15hp"
},

{
    id: 3606,
    title: "aguja carburador gx390",
    img: "/img/img-gsl/4tiempos/gx390/3606.png",
    description: "aguja de resorte para motor de 13 - 15hp"
},

{
    id: 817,
    title: "anillos gx390 std",
    img: "/img/img-gsl/4tiempos/gx390/817.png",
    description: "anillos std para motor 13hp 88mm diametro, 2mm grosor."
},

{
    id: 3698,
    title: "anillos gx390 std",
    img: "/img/img-gsl/4tiempos/gx390/817.png",
    description: "anillos std alta compresion para motor 13hp 88mm diametro, 2mm grosor."
},

{
    id: 2176,
    title: "anillos gx390 0.25",
    img: "/img/img-gsl/4tiempos/gx390/817.png",
    description: "anillos 0.25 o 0.10 para motor 13hp 88mm diametro + 0.25 o 0.10, 2mm grosor"
},

{
    id: 2337,
    title: "anillos gx390 0.50",
    img: "/img/img-gsl/4tiempos/gx390/817.png",
    description: "anillos 0.25 o 0.10 para motor 13hp 88mm diametro + 0.50 o 0.20, 2mm grosor"
},

{
    id: 604,
    title: "arbol de leva gx390",
    img: "/img/img-gsl/4tiempos/gx390/604.png",
    description: "arbol de levas para motor 13 - 15hp"
},

/*B*/
{
    id: 1475,
    title: "balancin gx390",
    img: "/img/img-gsl/4tiempos/gx390/1475.png",
    description: "balancin completo para motor 13hp."
},

{
    id: 3640,
    title: "biela gx390",
    img: "/img/img-gsl/4tiempos/gx390/3640.png",
    description: "biela motor de 13hp"
},

{
    id: 58,
    title: "bobina gx390",
    img: "/img/img-gsl/4tiempos/gx390/58.png",
    description: "bobina de inicio 13hp"
},

{
    id: 1607,
    title: "bloque motor gx390",
    img: "/img/img-gsl/4tiempos/gx390/1607.png",
    description: "bloque o cilindro para motor 13hp std de 88mm"
},

{
    id: 3466,
    title: "brida carburador gx390",
    img: "/img/img-gsl/4tiempos/gx390/3466.png",
    description: "brida para carburador de 9hp - 15hp"
},

/*C*/
{
    id: 2836,
    title: "carburador gx390",
    img: "/img/img-gsl/4tiempos/gx390/2836.png",
    description: "carburador para motor de 13hp viene con llave."
},

{
    id: 3530,
    title: "carburador 6500w",
    img: "/img/img-gsl/4tiempos/gx390/3530.png",
    description: "carburador para generador 5.500w hasta 10.000w con selenoide"
},

{
    id: 1135,
    title: "capuchon bujia",
    img: "/img/img-gsl/4tiempos/gx390/1135.png",
    description: "capuchon bujia para motor a gasolina."
},

{
    id: 3402,
    title: "culata gx390",
    img: "/img/img-gsl/4tiempos/gx390/3402.png",
    description: "culata motor de 13 - 15hp"
},

{
    id: 647,
    title: "contratuerca gx390",
    img: "/img/img-gsl/4tiempos/gx390/647.png",
    description: "contratuerca balancin para motor de 13 - 15hp"
},

{
    id: 1.2,
    title: "comando aceleracion gx390",
    img: "/img/img-gsl/4tiempos/gx390/1.2.png",
    description: "comando o palanca aceleracion para motor de 13 - 15hp"
},

{
    id: 1472,
    title: "cuña volanta gx390.",
    img: "/img/img-gsl/4tiempos/gx390/1472.png",
    description: "cuña volanta de motor de 13hp"
},

/*D*/
/*E*/
{
    id: 657,
    title: "empaque base carburador.",
    img: "/img/img-gsl/4tiempos/gx390/657.png",
    description: "empaque carburador de 13 - 15hp"
},

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












