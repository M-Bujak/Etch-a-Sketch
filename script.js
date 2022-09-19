const gridContainer = document.getElementById('grid-container');
gridContainer.addEventListener('mousedown', function (e) { enableDrawOnHover(e); });
gridContainer.addEventListener('mouseup', function (e) { disableDrawOnHover(e); });
gridContainer.addEventListener('mouseleave', function (e) { disableDrawOnHover(e); });


let drawOnHover = false;

function enableDrawOnHover(e) {
    drawOnHover = true;
}

function disableDrawOnHover(e) {
    drawOnHover = false;
}

function initializeGrid(horizontalCellCount, verticalCellCount) {
    for (let vert = 0; vert < verticalCellCount; vert++) {
        for (let hor = 0; hor < horizontalCellCount; hor++) {
            let newCell = document.createElement('div');
            newCell.classList.add('grid-item');
            newCell.addEventListener('click', function (e) { drawOnMouseClick(e); });
            newCell.addEventListener('mouseenter', function (e) { highlightSelection(e); });
            newCell.addEventListener('mouseleave', function (e) { unhighlightSelection(e); });
            newCell.addEventListener('mouseover', function (e) { drawOnMouseOver(e); });
            newCell.dataset.x = hor;
            newCell.dataset.y = vert;
            gridContainer.appendChild(newCell);
        }
    }

    setNumberOfRowsAndColumns(horizontalCellCount, verticalCellCount);
}

let activeColor = '#D3D3D3';

function drawOnMouseClick(e) {
    e.composedPath()[0].style = 'background-color: ' + activeColor + ';';
}

function drawOnMouseOver(e) {
    if (drawOnHover === true) {
        e.composedPath()[0].style = 'background-color: ' + activeColor + ';';
    }
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
        gridContainer.innerHTML = '';
        initializeGrid(gridSizeFormInput, gridSizeFormInput);
    }

    console.log("a");
}

const colorSelection = document.getElementById('color-selection');

// Rainbow Pastels Color Scheme - by SchemeColor.com 
let currentColorPalette = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'];
let currentColorIndex = 1;

function initializeColorSelection(colorPalette) {
    for (let i = 0; i < colorPalette.length; i++) {
        let newColorSwatch = document.createElement('div');
        newColorSwatch.style = 'background-color: ' + colorPalette[i] + ';';
        newColorSwatch.classList.add('color-swatch');
        newColorSwatch.addEventListener('click', function (e) { changeActiveColor(e)});
        newColorSwatch.dataset.palette_index = i;

        colorSelection.appendChild(newColorSwatch);
    }
}

function changeActiveColor(e) {
    console.log(e);
    currentColorIndex = e.composedPath()[0].dataset.palette_index;
    activeColor = currentColorPalette[currentColorIndex];
}

initializeColorSelection(currentColorPalette);
initializeGrid(16, 16);