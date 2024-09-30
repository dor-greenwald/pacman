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
    [4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 6, 7, 8, 9, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4],
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
<<<<<<< HEAD
let ghostspeed = 100;
let startdelay = 1000;
let score = 0;
let pacmanpos = [20, 12];
const startpink = [13, 12];
const startred = [13, 13];
const startyellow = [13, 14];
const startgreen = [13, 15];
let ghosts = [{ digit: 6, color: "pink", x: startpink[0], y: startpink[1] },
{ digit: 7, color: "red", x: startred[0], y: startred[1] },
{ digit: 8, color: "yellow", x: startyellow[0], y: startyellow[1] },
{ digit: 9, color: "green", x: startgreen[0], y: startgreen[1] }];
=======
let pacmanx = 20;
let pacmany = 12;
>>>>>>> f788d97eb64ef2d76a4d8af945416bb60613d27f
// document.body.addEventListener("keypress", (event) => movePacman(event, pacmanx, pacmany));
document.onkeydown = (event) => moveElement(event, pacmanpos[0], pacmanpos[1]);

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
                    buildEmpty(i, j)
                    break;

                case 3:
                    buildCherry();
                    break;

                case 4:
                    buildEmpty(j, i);
                    break;

                case 5:
                    buildPacman(i, j);
                    console.log('i, j: ', i, j);
                    alert(i + "" + j);
                    alert(i + "" + j);
                    break;

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

function buildGhost(color, x, y) {
    let ghost = document.createElement("img");
    ghost.src = `./../media/images/ghost-${color}.png`
    document.getElementById("game").appendChild(ghost);
}

function moveGhosts() {
    const moveGhostInterval = [];
    for (let i = 0; i < ghosts.length; i++) {
        moveGhostInterval[i] = setInterval(() => move(ghosts[i].digit, ghosts[i].x, ghosts[i].y, 1, 0), ghostspeed)
    }

}

function moveElement(event, x, y) {

    switch (event.keyCode) {
        case 37:
            //left
            moveLeft(x, y);
            moveLeft(x, y);
            break;
        case 38:
            //up
            moveUp(x, y);
            moveUp(x, y);
            break;
        case 39:
            //right
            moveRight(x, y);
            moveRight(x, y);
            break;
        case 40:
            //down
            moveDown(x, y);
            moveDown(x, y);
            break;

    }
}

function moveLeft(x, y) {
function moveLeft(x, y) {
    clear();
    console.log(x, y)
    console.log('layout[x][y]: ', layout[x][y]);
    layout[x][y] = 4;
    pacmanx = x;
    pacmany = y - 1;

    layout[x][y - 1] = 5;
    buildLayout();

}

function moveRight(x, y) {
    clear();
    console.log(x, y)
    console.log('layout[x][y]: ', layout[x][y]);
    layout[x][y] = 4;
    pacmanx = x;
    pacmany = y + 1;

    layout[x][y + 1] = 5;
    console.log(x, y)
    console.log('layout[x][y]: ', layout[x][y]);
    layout[x][y] = 4;
    pacmanx = x;
    pacmany = y - 1;

    layout[x][y - 1] = 5;
    buildLayout();

}

function moveUp(x, y) {
    clear();
    console.log(x, y)
    console.log('layout[x][y]: ', layout[x][y]);
    layout[x][y] = 4;
    pacmanx = x - 1;
    pacmany = y;

    layout[x - 1][y] = 5;
    buildLayout();

}
function moveDown(x, y) {
    clear();
    console.log(x, y)
    console.log('layout[x][y]: ', layout[x][y]);
    layout[x][y] = 4;
    pacmanx = x+1;
    pacmany = y;

    layout[x+1][y ] = 5;
    buildLayout();

}



}



buildLayout();
setTimeout(moveGhosts, startdelay);


