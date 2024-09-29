const layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

const len = layout.length;
let pacmanx = 20;
let pacmany = 12;
// document.body.addEventListener("keypress", (event) => movePacman(event, pacmanx, pacmany));
document.onkeydown = (event) => movePacman(event, pacmanx, pacmany);

// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair not yet
// 3 - power-pellet
// 4 - empty
// 5 - pacman

function clear() {
    let game = document.getElementById("game");
    game.remove();
}

function buildLayout() {
    let game = document.createElement("div");
    game.id = "game";
    document.body.appendChild(game);


    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            switch (layout[i][j]) {
                case 0:
                    buildDot();
                    break;

                case 1:
                    buildWall();
                    break;

                case 2:
                    buildGhost();
                    break;

                case 3:
                    buildCherry();
                    break;

                case 5:
                    buildPacman(i, j);
                    console.log('i, j: ', i, j);
                    break;

                default:
                    buildEmpty(j, i);
            }
        }
    }

}


function buildWall(i) {
    const wall = document.createElement("div");
    document.getElementById("game").appendChild(wall);
    wall.classList.add("wall");

}

function buildEmpty(x, y) {
    const empty = document.createElement("div");
    document.getElementById("game").appendChild(empty);
    empty.classList.add("empty");

}


function buildDot(i) {
    let dot = document.createElement("img");
    dot.classList.add("yellow-circle")
    dot.src = "./../media/images/yellow-circle.png"
    document.getElementById("game").appendChild(dot);

}

function buildCherry(i) {
    let cherry = document.createElement("img");
    cherry.src = "./../media/images/cherry.png"
    document.getElementById("game").appendChild(cherry);
}

function buildPacman(x, y) {
    let pacman = document.createElement("img");
    pacman.src = "./../media/images/pacman-player.png";
    document.getElementById("game").appendChild(pacman);
    // empty.classList.add("empty");

}

function buildGhost(i) {
    let cherry = document.createElement("img");
    cherry.src = "./../media/images/ghost-blue.png"
    document.getElementById("game").appendChild(cherry);
}


function movePacman(event, x, y) {
    switch (event.keyCode) {
        case 37:
            //left
            moveLeft(x, y);
            break;
        case 38:
            //up
            moveUp(x, y);
            break;
        case 39:
            //right
            moveRight(x, y);
            break;
        case 40:
            //down
            moveDown(x, y);
            break;

    }
}

function moveLeft(x, y) {
    clear();
    layout[x][y] = 4;
    pacmanx = x;
    pacmany = y - 1;

    layout[x][y - 1] = 5;
    buildLayout();

}

function moveUp(x, y) {
    clear();
    layout[x][y] = 4;
    pacmanx = x - 1;
    pacmany = y;

    layout[x - 1][y] = 5;
    buildLayout();

}

function moveRight(x, y) {
    clear();
    layout[x][y] = 4;
    pacmanx = x;
    pacmany = y + 1;

    layout[x][y + 1] = 5;
    buildLayout();

}
function moveDown(x, y) {
    clear();
    layout[x][y] = 4;
    pacmanx = x + 1;
    pacmany = y;

    layout[x + 1][y] = 5;
    buildLayout();

}





buildLayout();


