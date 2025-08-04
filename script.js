const container = document.querySelector("#container");

function createNewGrid(length) {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => row.remove());
    
    for (let row=0; row<length; row++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");

        for (let col=0; col<length; col++) {
            let newSquare = document.createElement("div");
            newSquare.classList.add("square");
            newSquare.addEventListener("mouseover", (e) => {
                e.target.style['background-color'] = 'yellow'; 
            })
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);
    }
}

createNewGrid(16);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    length = +prompt("New size of grid: ");
    while (length > 100) {
        length = +prompt("Too big! Pick a size smaller not bigger than 100: ");
    }
    createNewGrid(length);
})



