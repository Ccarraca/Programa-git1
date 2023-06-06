const btnmenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#Menu")
btnMenu.addeventlistener("click",function(){
    menu.classList.toggle("mostrar");
})

const submenubtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<submenuBtn.length;i++) {
    subMenuBtn[i].addeventlistener("click"),function(){
        if(window.innerWidth< 1024) {
            const subMenu = this.nextElementSibling;
            const height = submenu.scrollHeight;

            

            if ( subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                submenu.classList.add("desplegar");
                subMenu.style.height = height + "px"

                }
            }
        
    });
}