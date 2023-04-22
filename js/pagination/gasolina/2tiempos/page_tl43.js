const pagination = [
    {
        id: 1,
        link: "/Gasolina/repuestos/2tiempos/TL43/TL43_1.html"
    },

    {
        id: 2,
        link: "/Gasolina/repuestos/2tiempos/TL43/TL43_2.html"
    },

    {
        id: 3,
        link: "/Gasolina/repuestos/2tiempos/TL43/TL43_3.html"
    },

    {
        id: 4,
        link: "/Gasolina/repuestos/2tiempos/TL43/TL43_4.html"
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











