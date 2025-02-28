const searchExpandButton = document.getElementById("search-expand");
const searchContainer = document.getElementById("search-bar");
const navLinks = document.getElementById("nav-links");
const closeSearchButton = document.getElementById("close-search");

// Show search bar and hide navigation links when search icon is clicked
searchExpandButton.addEventListener("click", () => {
    setTimeout(() => {
        searchContainer.style.display = 'flex'; // Show search bar
        navLinks.style.display = 'none'; // Hide navigation links
        searchContainer.classList.remove("search-slide-out");
        navLinks.classList.remove("search-slide-out");
    }, 400);

    navLinks.classList.remove("search-slide-in");
    navLinks.classList.add("search-slide-out");
});

// Close search bar and restore nav links when close button is clicked
closeSearchButton.addEventListener("click", () => {
    //document.body.classList.remove("search-active");
    setTimeout(() => {
        navLinks.style.display = 'flex'; // Show navigation links
        navLinks.classList.add("search-slide-in");
        searchContainer.style.display = 'none'; // Hide search bar
    }, 200)


    searchContainer.classList.add("search-slide-out");
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Toggle menu visibility
    });
});

document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change button background color when toggling
    this.classList.toggle("dark-mode");
});




