const params = new URLSearchParams(window.location.search);
const planName = params.get("plan") || "Basic";
const planPrice = params.get("price") || "Free";

document.getElementById("plan-name").textContent = planName;
document.getElementById("plan-price").textContent = planPrice;
document.getElementById("checkout-heading").textContent = `Checkout - ${planName} Plan`;

function validateAndSubmit() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const card = document.getElementById("card").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!name || !email || !card || !expiry || !cvv) {
        alert("Please fill in all required fields.");
        return;
    }

    // Simulate payment processing
    alert("Payment Successful! Redirecting...");
    window.location.href = "table.html";
}