const para = document.querySelector("h1");

para.addEventListener("click", updateColor);

function updateColor() {
    const color = prompt("Enter new Color");

    para.style.color = color;
}

function SizeUp() {
    para.style.fontSize = 40 + "px";
}

function SizeDefault() {
    para.style.fontSize = 30 + "px";
}

function SizeDown() {
    para.style.fontSize = 20 + "px";
}



