const listDiesel1 = [
    {
        description: "170F-(T50)-4.5HP",
        link: "/Diesel/repuestos/170F/170F_1.html"
    },

    {
        description: "178F-(T70)-7HP",
        link: "/Diesel/repuestos/178F/178F_1.html"
    },

    {
        description: "186F-18FA-(T100)-10HP",
        link: "/Diesel/repuestos/186F/186F_1.html"
    },

    {
        description: "188F-12HP",
        link: "/Diesel/repuestos/188F/188F_1.html"
    },

    {
        description: "192F-14HP",
        link: "/Diesel/repuestos/192F/192F_1.html"
    },
]


const rank = document.querySelector(".rank");

listDiesel1.map((i) => {
    rank.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" rel="nofollow">${i.description}</a>
    </button>
    `;
});











