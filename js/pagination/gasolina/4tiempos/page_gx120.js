const pagination = [
    {
        id: 1,
        link: "/Gasolina/repuestos/4tiempos/GX120/GX120_1.html"
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











