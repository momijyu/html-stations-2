const fruits = document.getElementById("fruits");

function displayList() {
    const fruitss = fruits.querySelectorAll("p");
    const ul = document.createElement("ul");
    for (const p of fruitss) {
        const li = document.createElement("li");
        li.textContent = p.textContent;
        ul.appendChild(li);
        fruits.removeChild(p);
    }

    fruits.appendChild(ul);
}