const container = document.querySelector("#container");

for (let row=0; row<16; row++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");

    for (let col=0; col<16; col++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newRow.appendChild(newSquare);
    }
    container.appendChild(newRow);
}
