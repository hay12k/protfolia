// ------background visibale When scroll down-----------
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

// -------project popup----------
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("project-bottom")){
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
});
function toggleProjectPopup(){
    document.querySelector(".project-popup").classList.toggle("open");
}
document.querySelector(".project-popup-close").addEventListener("click", toggleProjectPopup)

function projectItemDetails(Projectitem){
    document.querySelector(".pp-thumbnail img").src - Projectitem.querySelector(".project-img").src;
    document.querySelector(".project-popup-subtitle span").innerHTML = Projectitem.querySelector(".project-title").innerHTML;
    document.querySelector(".project-popup-body").innerHTML = Projectitem.querySelector(".project-item-details").innerHTML;
}