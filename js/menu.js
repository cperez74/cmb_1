const menu = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown_menu');


menu.addEventListener('click', ()=>{
    menu.classList.toggle("active");
    dropdownMenu.classList.toggle("click");
    
})


