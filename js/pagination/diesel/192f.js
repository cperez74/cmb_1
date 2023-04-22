const pagination = [
    {
        id: 1,
        link: "/Diesel/repuestos/1192F/192F_1.html"
    },

    {
        id: 2,
        link: "/Diesel/repuestos/192F/192F_2.html"
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











