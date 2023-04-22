const pagination = [
    {
        id: 1,
        link: "/Diesel/repuestos/186F/186F_1.html"
    },

    {
        id: 2,
        link: "/Diesel/repuestos/186F/186F_2.html"
    },

    {
        id: 3,
        link: "/Diesel/repuestos/186F/186F_3.html"
    },

    {
        id: 4,
        link: "/Diesel/repuestos/186F/186F_4.html"
    },

    {
        id: 5,
        link: "/Diesel/repuestos/186F/186F_5.html"
    },
]


const page = document.querySelector(".page");

pagination.map((i) => {
    page.innerHTML += `
    <button class="page_id">
    <a href="${i.link}" rel="nofollow">${i.id}</a>
    </button>
    `;
});











