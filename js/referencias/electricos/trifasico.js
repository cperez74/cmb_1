const type2 = [
    {
        description: "cerrado",
        link: "../../motor_diesel/repuestos/186F/186F_1.html"
    },

    {
        description: "semi abierto",
        link: "../../motor_diesel/repuestos/186F/186F_1.html"
    },

    {
        description: "abierto",
        link: "../../Diesel/repuestos/186F/186F_1.html"
    },


]


const rank2 = document.querySelector(".rank_2");

type2.map((i) => {
    rank2.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" target="_blank" rel="nofollow">${i.description}</a>
    </button>
    `;
});

/*trifasico*/

const type3 = [
    {
        description: "cerrado",
        link: "../../motor_diesel/repuestos/186F/186F_1.html"
    },

    {
        description: "semi abierto",
        link: "../../motor_diesel/repuestos/186F/186F_1.html"
    },

    {
        description: "abierto",
        link: "../../Diesel/repuestos/186F/186F_1.html"
    },

]


const rank3 = document.querySelector(".rank_3");

type3.map((i) => {
    rank3.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" target="_blank" rel="nofollow">${i.description}</a>
    </button>
    `;
});













