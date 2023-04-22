const diesel = [
/*A*/
{
    id: 3511,
    title: "amortiguador tanque diesel",
    img: "/img/img-dsl/192f/3511.png",
    description: "amortiguador tanque diesel"
},

{
    id: 2934,
    title: "anillos 192f std",
    img: "/img/img-dsl/192f/2934.png",
    description: "anillos para motor diesel std (gasoil) 14hp (192f) grosor 2mm diametro 92mm"
},

{
    id: 3672,
    title: "arbol de levas 192f",
    img: "/img/img-dsl/192f/3672.png",
    description: "arbol de levas diesel para motor de 14hp (192f)"
},

/*B*/
{
    id: 3671,
    title: "balancin 192f",
    img: "/img/img-dsl/192f/3671.png",
    description: "balancin completo para 14hp"
},

{
    id: 2921,
    title: "biela 192f",
    img: "/img/img-dsl/192f/2921.png",
    description: "biela para motor diesel (gasoil) 14hp (192f) muñon de mm"
},

{
    id: 3398,
    title: "biela 192f",
    img: "/img/img-dsl/192f/2921.png",
    description: "biela para motor diesel (gasoil) 14hp (192f) muñon de mm"
},

{
    id: 3630,
    title: "bomba de inyeccion 192f",
    img: "/img/img-dsl/192f/3630.png",
    description: "bomba de combustible para motor diesel 14hp (gasoil) (192f)"
},

{
    id: 3629,
    title: "bomba de inyeccion 192f",
    img: "/img/img-dsl/192f/3629.png",
    description: "bomba de combustible con selenoide para motor diesel 14hp (gasoil) (192f)"
},

{
    id: 3244,
    title: "botador 192f",
    img: "/img/img-dsl/192f/3294.png",
    description: "botador o impulsador de valvula 14hp (192f) gasoil"
},

{
    id: 1957,
    title: "buje bancada 192f",
    img: "/img/img-dsl/192f/1957.png",
    description: "buje de la tapa carter para el motor diesel 14hp std."
},

/*C*/
{
    id: 1960,
    title: "casquete 192f std",
    img:"/img/img-dsl/192f/1514.jpg",
    description: "casquetes (conchas) diesel (gasoil) 14hp (192f) 44.5mm ref:KD192F."
},

{
    id: 3567,
    title: "casquetes 192f std",
    img: "/img/img-dsl/192f/1514.jpg",
    description: "casquetes (conchas) diesel (gasoil) 14hp (192f) para cigueñal de 44.3mm ref:WS192"
},

{
    id: 3014,
    title: "cono de retencio 192f",
    img: "/img/img-dsl/192f/3014.png",
    description: "juego de conos de retencion para biela 14hp"
},

/*D*/
/*E*/
{
    id: 1467,
    title: "empaque motor 192f",
    img: "/img/img-dsl/192f/1467.png",
    description: "empaquetadura completa para motor diesel (gasoil) 14hp (192f)"
},

{
    id: 3050,
    title: "empaque camara 192f",
    img: "/img/img-dsl/192f/3050.png",
    description: "empaque camara de compresion diesel (gasoil) 14hp (192f)."
},

{
    id: 3565,
    title: "empaque culata 192f",
    img: "/img/img-dsl/192f/3565.png",
    description: "empaque culata o tapa de compresion diesel (gasoil) 14hp (192f)."
},

{
    id: 3513,
    title: "empaque exosto 192f",
    img: "/img/img-dsl/192f/3513.png",
    description: "empaque para el exosto (mofle)."
},

{
    id: 3027,
    title: "empaque tapa valvula 192f",
    img: "/img/img-dsl/192f/3027.png",
    description: "empaque tapa valvula plano (gasoil) 14hp (192f)."
},

/*F*/


{
    id: 3563,
    title: "filtro de aire 192f",
    img: "/img/img-dsl/192f/3563.png",
    description: "elemento filtro de aire para motor diesel 14hp (gasoil) (192f)"
},

{
    id: 419,
    title: "filtro de combustible diesel",
    img: "/img/img-dsl/192f/419.png",
    description: "elemento filtro de combustible para motor diesel (gasoil) 10hp (f400 - 186f - 186fa - t100)."
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












