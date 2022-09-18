const gridContainer = document.getElementById('grid-container');

function initializeGrid(horizontalCellCount, verticalCellCount) {
    for (let vert = 0; vert < verticalCellCount; vert++) {
        for (let hor = 0; hor < horizontalCellCount; hor++) {
            let newCell = document.createElement('div');
            newCell.classList.add('grid-item');
            newCell.dataset.x = hor;
            newCell.dataset.y = vert;
            gridContainer.appendChild(newCell);
        }
    }

    setNumberOfRowsAndColumns(horizontalCellCount, verticalCellCount);
}

function setNumberOfRowsAndColumns(horizontalCellCount, verticalCellCount) {
    let styleTag = 'grid-template-columns: ';
    for (let i = 0; i < horizontalCellCount; i++) {
        styleTag += ' auto';
    }

    styleTag += '; grid-template-rows: ';
    for (let i = 0; i < verticalCellCount; i++) {
        styleTag += ' auto';
    }
    gridContainer.style.cssText = styleTag + ';';
}

initializeGrid(16, 16);