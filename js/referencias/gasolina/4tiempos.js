const tiempos4 = [

    {
        description: "GX120 - 4.5HP",
        link: "/Gasolina/repuestos/4tiempos/GX120/GX120_1.html"
    },

    {
        description: "GX160 (168F) 6.5HP",
        link: "/Gasolina/repuestos/4tiempos/GX160/GX160_1.html"
    },

    {
        description: "GX210 (170F) 7HP",
        link: "/Gasolina/repuestos/4tiempos/GX210/GX210_1.html"
    },

    {
        description: "GX240 (173F) 8HP",
        link: "/Gasolina/repuestos/4tiempos/GX240/GX240_1.html"
    },

    {
        description: "GX270 (177F) 9HP",
        link: "/Gasolina/repuestos/4tiempos/GX270/GX270_1.html"
    },

    {
        description: "GX390 (188F) 13HP",
        link: "/Gasolina/repuestos/4tiempos/GX390/GX390_1.html"
    },

    {
        description: "GX420 (190F) 15HP",
        link: "/Gasolina/repuestos/4tiempos/GX420/GX420_1.html"
    },

    {
        description: "GX460 (192F) 16HP",
        link: "/Gasolina/repuestos/4tiempos/GX460/GX460_1.html"
    },
]


const rank = document.querySelector(".rank");

tiempos4.map((i) => {
    rank.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" rel="nofollow">${i.description}</a>
    </button>
    `;
});











