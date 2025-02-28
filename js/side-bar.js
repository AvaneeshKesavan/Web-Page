document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-btn");
    const sideNavbar = document.querySelector(".side-navbar");

    // Ensure the sidebar is closed by default on small screens
    if (window.innerWidth <= 768) {
        sideNavbar.classList.remove("open");
    }

    // Toggle Sidebar on button click
    toggleButton.addEventListener("click", function () {
        sideNavbar.classList.toggle("open");
    });

    // Ensure sidebar is always visible on wider screens
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            sideNavbar.classList.remove("open");
        }
    });
});
