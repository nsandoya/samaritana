const offcanvasOpenBtn = document.querySelector(".burger-menu");
const offcanvasCloseBtn = document.querySelector(".btn-close");
const offcanvasItem = document.querySelector("ul");

const offcanvasMenu = document.querySelector(".offcanvas-menu");

offcanvasOpenBtn.addEventListener('click', (event)=>{
    
    if(offcanvasMenu.classList.contains('active')){
        offcanvasMenu.classList.remove('active')
    }else{
        offcanvasMenu.classList.add('active')
    }
})

offcanvasCloseBtn.addEventListener('click', (event)=>{
    offcanvasMenu.classList.remove('active')
})
offcanvasItem.addEventListener('click', (event)=>{
    offcanvasMenu.classList.remove('active')
})
