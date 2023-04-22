const pagination = [
    {
        id: 1,
        link: "/Gasolina/repuestos/2tiempos/MS310/MS310_1.html"
    },

    {
        id: 2,
        link: "/Gasolina/repuestos/2tiempos/MS310/MS310_2.html"
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











