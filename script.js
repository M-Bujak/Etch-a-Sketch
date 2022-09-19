const gridContainer = document.getElementById('grid-container');

function initializeGrid(horizontalCellCount, verticalCellCount) {
    for (let vert = 0; vert < verticalCellCount; vert++) {
        for (let hor = 0; hor < horizontalCellCount; hor++) {
            let newCell = document.createElement('div');
            newCell.classList.add('grid-item');
            newCell.addEventListener('mouseenter', function(e) { drawOnMouseEnter(e);});
            newCell.dataset.x = hor;
            newCell.dataset.y = vert;
            gridContainer.appendChild(newCell);
        }
    }

    setNumberOfRowsAndColumns(horizontalCellCount, verticalCellCount);
}

function drawOnMouseEnter(e) {
    console.log(e);
    let chosenColor = '#D3D3D3';
    e.composedPath()[0].style = 'background-color: ' + chosenColor + ';';
}

function setNumberOfRowsAndColumns(horizontalCellCount, verticalCellCount) {
    let styleTag = 'grid-template-columns: ';
    for (let i = 0; i < horizontalCellCount; i++) {
        styleTag += ' 1fr';
    }

    gridContainer.style.cssText = styleTag + ';';
}

initializeGrid(16, 16);