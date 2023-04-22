const generador = [
    {
        description: "950 W (generador 2 tiempos)",
        link: "/Gasolina/repuestos/2tiempos/950w/950w_1.html"
    },
]


const piece1 = document.querySelector(".rank_1");

generador.map((i)=>{
    piece1.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" target="_blank" rel="nofollow">${i.description}</a>
    </button>
    `;
});


/*motosierras*/

const chansaw = [
    {
        description: "5200 (cs52)",
        link: "/Gasolina/repuestos/2tiempos/5200/5200_1.html"
    },

    {
        description: "MS 250",
        link: "/Gasolina/repuestos/2tiempos/MS250/MS250_1.html"
    },

    {
        description: "MS 310",
        link: "/Gasolina/repuestos/2tiempos/MS310/MS310_1.html"
    },

    {
        description: "MS 361",
        link: "/Gasolina/repuestos/2tiempos/MS361/MS361_1.html"
    },

    {
        description: "MS 380 - 381",
        link: "/Gasolina/repuestos/2tiempos/MS380-381/MS380-381_1.html"
    },

    {
        description: "MS 382",
        link: "/Gasolina/repuestos/2tiempos/MS382/MS382_1.html"
    },

    {
        description: "MS 660",
        link: "/Gasolina/repuestos/2tiempos/MS660/MS660_1.html"
    },

    {
        description: "288 XP",
        link: "/Gasolina/repuestos/2tiempos/288XP/288XP_1.html"
    },

]


const piece2 = document.querySelector(".rank_2");

chansaw.map((i)=>{
    piece2.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" target="_blank" rel="nofollow">${i.description}</a>
    </button>
    `;
});


/*guadañas*/

const scythe = [
    {
        description: "TL-43 (BC430)",
        link: "/Gasolina/repuestos/2tiempos/TL43/TL43_1.html"
    },

    {
        description: "TL-52 (BC520)",
        link: "/Gasolina/repuestos/2tiempos/TL52/TL52_1.html"
    },

    {
        description: "FS-280",
        link: "/Gasolina/repuestos/2tiempos/FS280/FS280_1.html"
    },

    {
        description: "HUSQ 143RII",
        link: "/Gasolina/repuestos/2tiempos/143RII/143RII_1.html"
    },
]


const piece3 = document.querySelector(".rank_3");

scythe.map((i)=>{
    piece3.innerHTML += `
    <button class="rank_info">
    <a href="${i.link}" rel="nofollow">${i.description}</a>
    </button>
    `;
});









