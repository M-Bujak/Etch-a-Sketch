const gridContainer = document.getElementById('grid-container');

function initializeGrid(horizontalCellCount, verticalCellCount) {
    for (let vert = 0; vert < verticalCellCount; vert++) {
        for (let hor = 0; hor < horizontalCellCount; hor++) {
            let newCell = document.createElement('div');
            newCell.classList.add('grid-item');
            newCell.addEventListener('click', function (e) { drawOnMouseClick(e); });
            newCell.addEventListener('mouseenter', function (e) { highlightSelection(e); });
            newCell.addEventListener('mouseleave', function (e) { unhighlightSelection(e); });
            newCell.dataset.x = hor;
            newCell.dataset.y = vert;
            gridContainer.appendChild(newCell);
        }
    }

    setNumberOfRowsAndColumns(horizontalCellCount, verticalCellCount);
}

function drawOnMouseClick(e) {
    console.log(e);
    let chosenColor = '#D3D3D3';
    e.composedPath()[0].style = 'background-color: ' + chosenColor + ';';
}

function highlightSelection(e) {
    e.composedPath()[0].classList.add('grid-item-highlight');
}

function unhighlightSelection(e) {
    e.composedPath()[0].classList.remove('grid-item-highlight');
}

function setNumberOfRowsAndColumns(horizontalCellCount, verticalCellCount) {
    let styleTag = 'grid-template-columns: ';
    for (let i = 0; i < horizontalCellCount; i++) {
        styleTag += ' 1fr';
    }

    gridContainer.style.cssText = styleTag + ';';
}

document.getElementById('form').addEventListener("submit", function (e) { setGridSize(e); });

function setGridSize(e) {
    e.preventDefault();
    const gridSizeFormInput = document.getElementById('form-grid-size').value;
    if (gridSizeFormInput > 0 && gridSizeFormInput <= 100) {
        gridContainer.innerHTML='';
        initializeGrid(gridSizeFormInput, gridSizeFormInput);
    }

    console.log("a");
}

initializeGrid(16, 16);