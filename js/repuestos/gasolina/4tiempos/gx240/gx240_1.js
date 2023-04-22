const GX240 = [
/*inicio*/
/*A*/
{
    id: 2777,
    title: "aguja de carburador",
    img: "/img/img-gsl/4tiempos/gx240/3606.png",
    description: "aguja carburador de resorte"
},

{
    id: 2777,
    title: "anillos gx240 std",
    img: "/img/img-gsl/4tiempos/gx240/2777.png",
    description: "anillos std para motor a gasolina 8hp 73mm diametro 2mm grosor"
},

{
    id: 1491,
    title: "anillos gx240 0.25",
    img: "/img/img-gsl/4tiempos/gx240/2777.png",
    description: "anillos std para motor a gasolina 8hp 73mm + 0.25 diametro 2mm grosor"
},

{
    id: 2115,
    title: "anillos gx240 0.50",
    img: "/img/img-gsl/4tiempos/gx240/2777.png",
    description: "anillos std para motor a gasolina 8hp 73mm + 0.50 diametro 2mm grosor"
},

/*B*/
{
    id: 3649,
    title: "biela gx240",
    img: "/img/img-gsl/4tiempos/gx240/3649.png",
    description: "biela motor 8hp - 9hp"
},

{
    id: 2902,
    title: "bloque gx240",
    img: "/img/img-gsl/4tiempos/gx240/500.png",
    description: "bloque motor para 9hp std 77mm diametro cilinddro"
},

{
    id: 58,
    title: "bobina gx240",
    img: "/img/img-gsl/4tiempos/gx240/58.png",
    description: "bobina de encendido (chispa) 8hp"
},

{
    id: 3466,
    title: "brida gx240",
    img: "/img/img-gsl/4tiempos/gx240/3466.png",
    description: "brida o base carburador de  9hp"
},

/*C*/
{
    id: 1135,
    title: "capuchon bujia",
    img: "/img/img-gsl/4tiempos/gx240/2836.png",
    description: "capuchon bujia para motor 8hp."
},

{
    id: 2836,
    title: "carburador gx240",
    img: "/img/img-gsl/4tiempos/gx240/2836.png",
    description: "carburador para motor 8hp."
},

{
    id: 3394,
    title: "culata gx240",
    img: "/img/img-gsl/4tiempos/gx240/3394.png",
    description: "culata para motor de 8hp."
},

/*D*/
/*E*/
{
    id: 3778,
    title: "empaque carter gx240",
    img: "/img/img-gsl/4tiempos/gx240/3778.png",
    description: "empaque carter o tapa lateral 8hp."
},

{
    id: 1022,
    title: "empaque culata gx240",
    img: "/img/img-gsl/4tiempos/gx240/1022.png",
    description: "empaque culata para motor 8hp."
},

{
    id: 2619,
    title: "empaque exosto gx240",
    img: "/img/img-gsl/4tiempos/gx240/2619.png",
    description: "empaque exosto de 8hp."
},

{
    id: 1391,
    title: "empaque motor gx240",
    img: "/img/img-gsl/4tiempos/gx240/1391.png",
    description: "empaque motor de 8hp completo."
},


/*F*/
{
    id: 356,
    title: "filtro de aire gx240",
    img: "/img/img-gsl/4tiempos/gx240/356.png",
    description: "filtro de aire para motor de 8hp."
},

/*G*/
{
    id: 1264,
    title: "guardian de aceite",
    img: "/img/img-gsl/4tiempos/gx240/1264.png",
    description: "guardian de aceite interno."
},

{
    id: 2570,
    title: "gorro economizador",
    img: "/img/img-gsl/4tiempos/gx240/2570.png",
    description: "gorro economizador (gomita de valvula) - retenedor de valvula."
},

/*H*/
/*I*/
/*J*/
{
    id: "3303, 3304",
    title: "juego de valvula",
    img: "/img/img-gsl/4tiempos/gx240/3303_3304.png",
    description: "valvuña de admision y escape para motor de 8hp"
},

/*K*/
/*L*/
{
    id: 1442,
    title: "llave de combustible",
    img: "/img/img-gsl/4tiempos/gx240/1442.png",
    description: "llave de combustible hembra para generadores"
},


/*M */
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

GX240.map((i) => {
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












