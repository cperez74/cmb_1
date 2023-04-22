const pagination = [
    {
        id: 1,
        link: "/Gasolina/repuestos/4tiempos/GX240/GX240_1.html"
    },

    {
        id: 2,
        link: "/Gasolina/repuestos/4tiempos/GX240/GX240_2.html"
    },

    {
        id: 3,
        link: "/Gasolina/repuestos/4tiempos/GX240/GX240_3.html"
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











