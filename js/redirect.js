const nameToST = { // Mapping names to their corresponding ST numbers
    "Kevin": "ST4",
    "Avaneesh": "ST2",
    "Pangajan": "ST3",
    "Imayuru": "ST1"
};

function redirect(name) {
    event.preventDefault(); // Stop scrolling
    let stNumber = nameToST[name]; // Get the ST number for the selected name

    // Remove existing popup if any
    let existingPopup = document.getElementById("redirect-popup");
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create the popup container
    let popup = document.createElement("div");
    popup.id = "redirect-popup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%) scale(0.9)";
    popup.style.padding = "20px";
    popup.style.width = "300px";
    popup.style.backgroundColor = "#1E1E2F";
    popup.style.color = "#FFFFFF"; 
    popup.style.border = "2px solid #4A90E2"; 
    popup.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";
    popup.style.borderRadius = "10px";
    popup.style.fontFamily = "Arial, sans-serif";
    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.3s ease, transform 0.3s ease";

    // Title
    let title = document.createElement("p");
    title.textContent = `Select a page for ${name}`;
    title.style.fontSize = "18px";
    title.style.marginBottom = "15px";
    title.style.fontWeight = "bold";
    title.style.color = "#4A90E2";
    popup.appendChild(title);

    // Button styles
    function createButton(text, bgColor, action) {
        let btn = document.createElement("button");
        btn.textContent = text;
        btn.style.backgroundColor = bgColor;
        btn.style.color = "#FFFFFF";
        btn.style.border = "none";
        btn.style.padding = "10px 15px";
        btn.style.margin = "8px";
        btn.style.cursor = "pointer";
        btn.style.borderRadius = "6px";
        btn.style.fontSize = "14px";
        btn.style.fontWeight = "bold";
        btn.style.transition = "0.2s";
        btn.onmouseover = () => (btn.style.opacity = "0.8");
        btn.onmouseout = () => (btn.style.opacity = "1");
        btn.onclick = action;
        return btn;
    }

    let validationBtn = createButton("Validation", "#4A90E2", function() {
        window.location.href = `./validation_${stNumber}.html`;
    });

    let editorBtn = createButton("Page Editor", "#4A90E2", function() {
        window.location.href = `./pageEditor_${stNumber}.html`;
    });

    let contentBtn = createButton("Content", "#4A90E2", function() {
        window.location.href = `./content_${stNumber}.html`;
    });

    let closeBtn = createButton("Cancel", "#E74C3C", function() {
        document.body.removeChild(popup);
    });

    // Append buttons
    popup.appendChild(validationBtn);
    popup.appendChild(editorBtn);
    popup.appendChild(contentBtn);
    popup.appendChild(closeBtn);

    // Add popup to the body
    document.body.appendChild(popup);

    // Fade-in animation
    setTimeout(() => {
        popup.style.opacity = "1";
        popup.style.transform = "translate(-50%, -50%) scale(1)";
    }, 50);
}
