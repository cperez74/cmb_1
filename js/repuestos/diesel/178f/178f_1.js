const diesel = [
    /*A*/
{
    id: 3511,
    title: "amortiguador tanque diesel",
    img: "/img/img-dsl/178f/3511.png",
    description: "amortiguador tanque diesel"
},

{
    id: 1680,
    title: "anillos 178f std",
    img: "/img/img-dsl/178f/1680.png",
    description: "juego de anillos para motor diesel std (gasoil) 7hp (f300 - 178f - t70) grosor 2mm diametro 78mm)"
},

{
    id: 3558,
    title: "anillos 178f 0.25",
    img: "/img/img-dsl/178f/1680.png",
    description: "juego de anillos para motor diesel 0.25 (gasoil) 170f - 4.5hp - t50 -f210 grosor 2mm diametro 78mm + 0.25"
},

{
    id: 1748,
    title: "anillos 178f 0.50",
    img: "/img/img-dsl/178f/1680.png",
    description: "juego de anillos para motor diesel 0.50 (gasoil) 170f - 4.5hp - t50 -f210 grosor 2mm diametro 78mm + 0.50"
},

/*B*/
{
    id: 2908,
    title: "biela 178f 36mm",
    img: "/img/img-dsl/178f/2908.png",
    description: "biela para motor diesel (gasoil) 7hp (f300 - 178f - t70) muñon de 36mm"
},

{
    id: 2905,
    title: "biela 178fa 38mm",
    img: "/img/img-dsl/178f/2905.png",
    description: "biela para motor diesel (gasoil) 4.5hp (f210 - 170f - t50) muñon de 42mm"
},

{
    id: 3704,
    title: "bomba de inyeccion 178f",
    img: "/img/img-dsl/178f/3704.jpg",
    description: "bomba de inyeccion (combustible) 7hp - f300 - 178f - t70"
},

{
    id: 3560,
    title: "buje bancada 178f std",
    img: "/img/img-dsl/178f/3560.png",
    description: "buje de la tapa carter para el motor diesel std 7hp - f300 - 178f - t70"
},

{
    id: 2064,
    title: "buje bancada 178f 0.25",
    img: "/img/img-dsl/178f/3560.png",
    description: "buje de la tapa carter para el motor diesel + 0.25 7hp - f300 - 178f - t70"
},

/*C*/
{
    id: 3561,
    title: "casquete 178f std",
    img:"/img/img-dsl/178f/3561.jpg",
    description: "juego de casquetes 178f 36mm std"
},

{
    id: 2841,
    title: "casquetes 178f 0.25",
    img: "/img/img-dsl/178f/3561.jpg",
    description: "juego de casquetes 178f 36mm 0.25"
},

{
    id: 2842,
    title: "casquetes 178f 0.50",
    img: "/img/img-dsl/178f/3561.jpg",
    description: "juego de casquetes 178f 36mm 0.50"
},

{
    id: 2834,
    title: "casquetes 178f-h std",
    img: "/img/img-dsl/178f/3561.jpg",
    description: "juego de casquetes 178f 38mm std"
},

{
    id: 2570,
    title: "carcasa filtro aire",
    img: "/img/img-dsl/178f/2570.png",
    description: "filtro de aire completo para motor 7hp - 178f - f300 - t70"
},

/*D*/
/*E*/
{
    id: 3245,
    title: "empaque culata 178f",
    img: "/img/img-dsl/178f/3245.png",
    description: "empaque base culata o tapa de compresion 178f - 7hp - t70 - f300"
},

{
    id: 1613,
    title: "empaque motor 178f",
    img: "/img/img-dsl/178f/1613.png",
    description: "empaque motor completo 178f - f300 - 7hp - t70"
},

{
    id: 725,
    title: "empaque tapa valvula",
    img: "/img/img-dsl/178f/725.png",
    description: "empaque tapa valvula de 7hp - f300 - t70 - 178f"
},

/*F*/
{
    id: 997,
    title: "filtro de combustible",
    img: "/img/img-dsl/178f/997.png",
    description: "filtro de combustible para generador diesel."
},

{
    id: 458,
    title: "filtro de aire",
    img: "/img/img-dsl/178f/458.png",
    description: "elemento filtro de aire 178f 7hp."
},

{
    id: 2744,
    title: "filtro de aire",
    img: "/img/img-dsl/178f/2744.png",
    description: "filtro de aire bañado en aceite 178f 7hp."
},
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












