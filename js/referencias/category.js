const category = [
    {
        title: "MOTORES",
        img: "/img/img_category/ctg_1.png",
        description: "repuestos motores a gasolina 5 a 15hp",
        link:"/Gasolina/motor-a-gasolina.html",

        description_1: "repuestos motores diesel 4.5 - 14hp",
        link_1:"/Diesel/motor-diesel.html",
/*
        description_2: "motores electricos monofasicos.",
        description_3: "motores electricos trifasicos",
        link_2:"/electrico/motor-electrico.html",
*/
    },

]


const rank = document.querySelector(".section");

category.map((i) => {
    rank.innerHTML += `
    <div class="topic_1">
        <article_1>
            <div class="picture_1">
                <img src="${i.img}" alt="">
            </div>

            <div class="title_1">
                <p class="tag_1">${i.title}</p>
                <a href="${i.link}" rel="noopener noreferrer">${i.description}</a>
                <a href="${i.link_1}" rel="noopener noreferrer">${i.description_1}</a>
            </div>
        </article>
    </div>
    `;
});











