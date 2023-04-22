const diesel = [
/*A*/
{
    id: 3511,
    title: "amortiguador tanque diesel",
    img: "/img/img-dsl/188f/3511.png",
    description: "amortiguador tanque diesel"
},

{
    id: 3592,
    title: "anillos 188f std",
    img: "/img/img-dsl/188f/3592.png",
    description: "anillos para motor diesel std (gasoil) 12hp (188f) grosor 2mm diametro 88mm)"
},

/*B*/
{
    id: 3621,
    title: "biela 188f 40mm",
    img: "/img/img-dsl/188f/3621.png",
    description: "biela para motor diesel (gasoil) 12hp (f440 - 188f) muñon de 40mm"
},

{
    id: 3638,
    title: "biela 188fa 42mm",
    img: "/img/img-dsl/188f/3621.png",
    description: "biela para motor diesel (gasoil) 10hp (f440 - 188f) muñon de 42mm"
},

/*C*/
/*D*/
/*E*/
{
    id: 1062,
    title: "empaque culata 188f",
    img: "/img/img-dsl/188f/1062.png",
    description: "empaque culata o tapa de compresion motor diesel (gasoil) 12hp (f440 - 188f)."
},

/*F*/
/*G*/
/*H*/
/*I*/
/*J*/
/*K*/
{
    id: 3257,
    title: "kit piston 188f",
    img: "/img/img-dsl/188f/3257.png",
    description: "incluye piston, anillos (aros), pasador piston y pin pasador para motor diesel (gasoil) 12hp (f440 - 188f)."
},

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












