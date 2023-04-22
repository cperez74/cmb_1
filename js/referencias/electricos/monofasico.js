const type = [
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


const rank = document.querySelector(".rank");

type.map((i) => {
    rank.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" target="_blank" rel="nofollow">${i.description}</a>
    </button>
    `;
});

/*trifasico*/

const type1 = [
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


const rank1 = document.querySelector(".rank_1");

type1.map((i) => {
    rank1.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" target="_blank" rel="nofollow">${i.description}</a>
    </button>
    `;
});













