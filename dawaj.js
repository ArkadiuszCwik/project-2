// 1. Pobieranie niezbędnych elementów z DOM
const btn = document.querySelector("button");

// 2. Utwoorzenie funkcji która będzie tworzyć element, 
// nadawać mu klasę i dodawać go do DOM
function createDiv() {
const divItem = document.createElement("div");
divItem.classList.add("box");
// divItem.className = "box";
// divItem.setAttribute("class", "box");
document.body.appendChild(divItem);
}

// 3. Ustawienia nasłuchiwania na przycisk
btn.addEventListener("click", createDiv);