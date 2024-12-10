let popup = document.getElementById("popup1")
let popupBody = document.getElementById("popup-body");


function openPopup(popupId){
    let popup = document.getElementById(popupId); 
    popup.classList.add("active")
}

function closePopup(popupId){
    let popup = document.getElementById(popupId); 
    popup.classList.remove("active")
}