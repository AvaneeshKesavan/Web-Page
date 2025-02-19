const searchExpandButton = document.getElementById("search-expand");
const searchContainer = document.getElementById("search");

searchExpandButton.addEventListener("click", () => {
    searchContainer.style.display = searchContainer.style.display === "none" ? "flex" : "none"
})