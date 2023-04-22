const gx340_1 = [
/*inicio*/
    {
        id: 2636,
        title: "anillos gx340 std",
        img: "/img/img-gsl/4tiempos/gx160/494.png",
        description: ""
    },

    {
        id: 1491,
        title: "anillos gx340 0.25",
        img: "/img/img-gsl/4tiempos/gx160/494.png",
        description: ""
    },

    {
        id: 1801,
        title: "balancin gx340",
        img: "/img/img-gsl/4tiempos/gx160/494.png",
        description: ""
    },

    {
        id: 2115,
        title: "biela gx340",
        img: "/img/img-gsl/4tiempos/gx160/494.png",
        description: ""
    },

    {
        id: 3624,
        title: "bobina gx340",
        img: "/img/img-gsl/4tiempos/gx160/494.png",
        description: ""
    },
/*final*/
]


const piece = document.querySelector(".card");

gx340_1.map((i) => {
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

            <button class="pay" ${i.link}>pagar</button>
        </article>
    </div>`;
});












