const diesel = [
    /*A*/
{
    id: 3511,
    title: "amortiguador tanque diesel",
    img: "/img/img-dsl/170f/3511.png",
    description: "amortiguador tanque diesel"
},

{
    id: 2441,
    title: "anillos 170f std",
    img: "/img/img-dsl/170f/2441.png",
    description: "anillos para motor diesel std (gasoil) 4.5hp (f210 - 170f - t50) grosor 2mm diametro 70mm)"
},

/*B*/
{
    id: 2908,
    title: "biela 170f 30mm",
    img: "/img/img-dsl/170f/2908.png",
    description: "biela para motor diesel (gasoil) 4.5hp (f210 - 170f - t50) muñon de 30mm"
},

{
    id: 2905,
    title: "biela 170fa 32mm",
    img: "/img/img-dsl/170f/2905.png",
    description: "biela para motor diesel (gasoil) 4.5hp (f210 - 170f - t50) muñon de 32mm"
},

{
    id: 3704,
    title: "bomba de inyeccion 170f",
    img: "/img/img-dsl/170f/3704.jpg",
    description: "bomba de inyeccion (combustible) para 4.5 - 7hp "
},

{
    id: 1487,
    title: "buje bancada 170f",
    img: "/img/img-dsl/170f/1487.png",
    description: "buje de la tapa carter para el motor diesel std."
},

{
    id: 2639,
    title: "buje bancada 170f 0.25",
    img: "/img/img-dsl/170f/1487.png",
    description: "buje de la tapa carter para el motor diesel + 0.25."
},

/*C*/
{
    id: 274,
    title: "casquete 170f std",
    img:"/img/img-dsl/170f/274.jpg",
    description: "juego de casquetes 170f 30mm std"
},

{
    title: "casquetes 170f 0.25",
    img: "/img/img-dsl/170f/274.jpg",
    description: "juego de casquetes 170f 30mm 0.25"
},

{
    id: 3091,
    title: "casquetes 170f-h std",
    img: "/img/img-dsl/170f/274.jpg",
    description: "juego de casquetes 170f 32mm std"
},

{
    id: 2607,
    title: "carcasa filtro aire",
    img: "/img/img-dsl/170f/2607.png",
    description: ""
},

/*D*/
/*E*/
{
    id: 420,
    title: "empaque culata 170f",
    img: "/img/img-dsl/170f/420.png",
    description: "empaque base culata para motor 4.5hp diesel o gasoil 170f - t50 - f210  70mm"
},

{
    id: 354,
    title: "empaque motor 170f",
    img: "/img/img-dsl/170f/354.png",
    description: "juego de empaque para motor diesel 70mm"
},

{
    id: 725,
    title: "empaque tapa valvula",
    img: "/img/img-dsl/170f/725.png",
    description: "empaque tapa valvula para motor diesel 70mm"
},


/*F*/
{
    id: 458,
    title: "filtro de aire",
    img: "/img/img-dsl/170f/458.png",
    description: "elemento filtro de aire 170f - 4.5hp - t50 - f210"
},

{
    id: 2744,
    title: "filtro de aire",
    img: "/img/img-dsl/170f/2744.png",
    description: "elemento filtro de aire bañado en aceite 170f - 4.5hp - t50 - f210"
},

{
    id: 419,
    title: "filtro de combustible",
    img: "/img/img-dsl/170f/419.png",
    description: "elemento filtro de combustible 170f - 4.5hp - t50 - f210"
},

/*G*/
{
    id: 1486,
    title: "gorro economizador",
    img: "/img/img-dsl/170f/1486.png",
    description: "gorro economizador o reteendor de valvula 170f - 4.5hp - t50 - f210"
},

/*H*/
/*I*/
{
    id: 2403,
    title: "inyector 170f",
    img: "/img/img-dsl/170f/2403.jpg",
    description: "inyector de combustible para motor 170f - 4.5hp - t50 - f210"
},

/*J*/
/*K*/
/*L*/
/*M*/
{
    id: 1344,
    title: "moneda balancin",
    img: "/img/img-dsl/170f/1344.png",
    description: "moneda balancin o antidesgaste 170f - 4.5hp - t50 - f210 10mm diametro 4mm grosor"
},

/*N*/
/*Ñ*/
/*O*/
/*P*/
/*Q*/
/*R*/
]


const piece = document.querySelector(".card");

diesel.map((i) => {
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












