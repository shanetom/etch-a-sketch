const container = document.querySelector('#container');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let block = document.createElement('div');
            block.setAttribute('class', 'grid-item');
            container.appendChild(block);

            block.addEventListener("mouseover", () => {
                block.setAttribute("style", "background: black");
            });
        }
    }
}

createGrid();
