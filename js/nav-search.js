const searchExpandButton = document.getElementById("search-expand");
const searchContainer = document.getElementById("search-bar");
const navLinks = document.getElementById("nav-links");
const closeSearchButton = document.getElementById("close-search");

// Show search bar and hide navigation links when search icon is clicked
searchExpandButton.addEventListener("click", () => {
    document.body.classList.add("search-active");
    searchContainer.style.display = 'flex'; // Show search bar
    navLinks.style.display = 'none'; // Hide navigation links
});

// Close search bar and restore nav links when close button is clicked
closeSearchButton.addEventListener("click", () => {
    document.body.classList.remove("search-active");
    searchContainer.style.display = 'none'; // Hide search bar
    navLinks.style.display = 'flex'; // Show navigation links
});
