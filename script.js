const gridContainer = document.getElementById('grid-container');

function initializeGrid(horizontalCellCount, verticalCellCount){
    for(let vert = 0; vert < verticalCellCount; vert++)
    {
        for(let hor = 0; hor < horizontalCellCount; hor++)
        {
            let newCell = document.createElement('div');
            newCell.classList.add('grid-item');
            newCell.dataset.x = hor;
            newCell.dataset.y = vert;
            gridContainer.appendChild(newCell);
        }
    }
}

initializeGrid(16,16);