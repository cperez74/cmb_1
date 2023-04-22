const diesel = [
/*inicio*/
/*G*/
{
    id: 3049,
    title: "gorro economizador",
    img: "/img/img-dsl/192f/3049.png",
    description: "economizador - gomita de valvula - retenedor de valvula diesel (gasoil) 14hp (192f)"
},

/*H*/
/*I*/
{
    id: 3628,
    title: "inyector 192f largo",
    img: "/img/img-dsl/192f/3628.png",
    description: "inyector punta larga conexion superior"
},

/*J*/
{
    id: "2936_2935",
    title: "juego de valvulas 192f",
    img: "/img/img-dsl/192f/2936_2935.png",
    description: "valvula de admision y escape para 14hp diesel"
},

/*K*/
/*L*/
/*M*/
{
    id: "1_5",
    title: "moneda balancin 192f",
    img: "/img/img-dsl/192f/1_5.png",
    description: "moneda balancin o antidesgaste para motor diesel (gasoil) 14hp (192f)."
},

/*N*/
/*Ñ*/
/*O*/
/*P*/
{
    id: 3396,
    title: "pasador piston 192f",
    img: "/img/img-dsl/192f/3396.png",
    description: "pasador para motor diesel 14hp (gasoil) (192f)."
},



{
    id: 1959,
    title: "piston 192f std",
    img: "/img/img-dsl/192f/1959.png",
    description: "piston std motor motor diesel 14hp (192f) 92mm"
},

/*Q*/
/*R*/

{
    id: 1306,
    title: "retenedor del cilindro",
    img: "/img/img-dsl/192f/1306.jpg",
    description: "retenedor de aceite para motor diesel (gasoil) 14hp (192f) 35x52x8"
},

/*S*/
/*T*/
{
    id: 3013,
    title: "tapa valvula 192f.",
    img: "/img/img-dsl/192f/3013.png",
    description: "para motor diesel (gasoil) 14hp (192f)"
},


/*final*/
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












