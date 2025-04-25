let popup = document.getElementById("popup1")
let popupBody = document.getElementById("popup-body");

function openPopup(popupId) {
    // Close any currently open popups
    const openPopups = document.querySelectorAll('.popup.active');
    openPopups.forEach(popup => popup.classList.remove('active'));

    // Open the selected popup
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.add('active');
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.remove('active');
    }
}

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("active");
}