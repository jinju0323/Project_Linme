document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname; 
    const menuLinks = document.querySelectorAll(".menu-link"); 
    menuLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname; 
        if (linkPath === currentPath) {
            link.parentElement.classList.add("active"); 
        }
    });
});
