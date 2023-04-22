const diesel = [
/*A*/
{
    id: 2419,
    title: "aislador termico diesel",
    img: "/img/img-dsl/186f/2419.png",
    description: "aislador termico para inyector diesel"
},

{
    id: 3622,
    title: "amortiguador base diesel",
    img: "/img/img-dsl/186f/3622.png",
    description: "amortiguador base diesel para planta"
},

{
    id: 3511,
    title: "amortiguador tanque diesel",
    img: "/img/img-dsl/186f/3511.png",
    description: "amortiguador tanque diesel"
},

{
    id: 1746,
    title: "anillos 186f std",
    img: "/img/img-dsl/186f/1746.png",
    description: "anillos para motor diesel std (gasoil) 10hp (f400 - 186f - 186fa - t100) grosor 2mm diametro 86mm)"
},

{
    id: 1060,
    title: "anillos 186f + 0.25",
    img: "/img/img-dsl/186f/1060.png",
    description: "anillos para motor diesel 0.25 o 0.10 (gasoil) 10hp (f400 - 186f - 186fa - t100) grosor 2mm diametro 86 + 0.25mm)"
},

{
    id: 2443,
    title: "anillos 186f + 0.50",
    img: "/img/img-dsl/186f/2443.png",
    description: "anillos para motor diesel 0.50 o 0.20 (gasoil) 10hp (f400 - 186f - 186fa - t100) grosor 2mm diametro 86 + 0.50mm)"
},

{
    id: 3240,
    title: "arandela de inyector diesel",
    img: "/img/img-dsl/186f/3240.png",
    description: "arandela de inyector punta larga diesel."
},

{
    id: 3512,
    title: "arbol de levas 186f - 186fa ",
    img: "/img/img-dsl/186f/3512.png",
    description: "arbol de levas diesel para motor de 10hp (f400 - 186f - t100)."
},

/*B*/
{
    id: 3107,
    title: "biela 186f 40mm",
    img: "/img/img-dsl/186f/3107.png",
    description: "biela para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) muñon de 40mm"
},

{
    id: 3106,
    title: "biela 186fa 42mm",
    img: "/img/img-dsl/186f/3106.png",
    description: "biela para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) muñon de 42mm"
},

{
    id: 515,
    title: "bloque motor 186f",
    img: "/img/img-dsl/186f/515.jpg",
    description: "bloque motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)"
},

{
    id: 3564,
    title: "bomba de inyeccion 186f",
    img: "/img/img-dsl/186f/3564.jpg",
    description: "bomba de combustible para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)"
},

{
    id: 3566,
    title: "bomba de lubricacion 186f",
    img: "/img/img-dsl/186f/3566.png",
    description: "bomba de aceite para motor diesel 10hp (gasoil) 10hp (f400 - 186f - 186fa - t100)"
},

{
    id: 3467,
    title: "botador 186f",
    img: "/img/img-dsl/186f/3467.png",
    description: "bomba de combustible para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)"
},

{
    id: 570,
    title: "buje arbol de levas 186f",
    img: "/img/img-dsl/186f/570.png",
    description: "buje arbol de levas para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)"
},

{
    id: 3184,
    title: "buje bancada 186f",
    img: "/img/img-dsl/186f/2637.png",
    description: "buje de la tapa carter para el motor diesel std."
},

{
    id: 2637,
    title: "buje bancada 186f 0.25",
    img: "/img/img-dsl/186f/2637.png",
    description: "buje de la tapa carter para el motor diesel + 0.25."
},

{
    id: 2640,
    title: "buje bancada 186f 0.50",
    img: "/img/img-dsl/186f/2637.png",
    description: "buje de la tapa carter para el motor diesel + 0.50."
},

/*C*/
{
    id: 2830,
    title: "casquete 186f 40mm std",
    img:"/img/img-dsl/186f/2830.jpg",
    description: "casquetes (conchas) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) para cigueñal de 40mm el muñon "
},

{
    id: 3564,
    title: "casquetes 186f 40mm 0.25",
    img: "/img/img-dsl/186f/2830.jpg",
    description: "casquetes (conchas) diesel (gasoil) 10hp (f400 - 186f - 186fa - t100) para cigueñal de 40mm el muñon sobre medida"
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












