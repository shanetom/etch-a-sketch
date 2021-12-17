const container = document.querySelector('#container');

let dimensions = 16;

function createGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
            let block = document.createElement('div');
            block.setAttribute('class', 'grid-item');
            container.appendChild(block);

            block.addEventListener("mouseover", () => {
                block.setAttribute("style", "background: black");
            });
        }
    }
}

createGrid(dimensions);

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    clearGrid();

    do {
        dimensions = prompt("Please Enter New Dimensions (cannot be greater than 100):");
    } while (dimensions > 100);

    createGrid(dimensions);
});
