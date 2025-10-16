document.addEventListener("DOMContentLoaded", () => {
    const submenuToggle = document.querySelector(".submenu-toggle");
    const submenuContainer = document.querySelector(".submenu-container");

    submenuToggle.addEventListener("click", (e) => {
 
        e.preventDefault(); 
        submenuContainer.classList.toggle("active"); 
    });
});