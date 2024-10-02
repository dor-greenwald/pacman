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
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair not yet
// 3 - power-pellet
// 4 - empty
// 5 - pacman

const len = layout.length;
let speed = 300;
let ghostSpeed = 500;
let ghostDelay = 5000;
let canEatGhosts = false;
let score = 0;
let pacmanpos = [20, 12];
let pacmanDirection = "right";
let previousDirection = ["up", "up", "up", "up"];
const NameThatLogged = localStorage.getItem("current user");
let playerType = "pacman"
const ghosts = [{
    digit: 6, color: "pink", pos: [13, 12], start: [13, 12], pathOut: ["up", "right", "up", "up"]
},
{ digit: 7, color: "red", pos: [13, 13], start: [13, 13], pathOut: ["up", "up", "up"] },
{ digit: 8, color: "yellow", pos: [13, 14], start: [13, 14], pathOut: ["up", "up", "up"] },
{ digit: 9, color: "green", pos: [13, 15], start: [13, 15], pathOut: ["up", "left", "up", "up"] }];


// document.body.addEventListener("keypress", (event) => movePacman(event, pacmanx, pacmany));
document.onkeydown = (event) => movePacman(event, pacmanpos[0], pacmanpos[1]);
document.getElementById("ms-pacman").addEventListener("click", () => { playerType = "mspacman" });
document.getElementById("pacman").addEventListener("click", () => { playerType = "pacman" });


function clear() {
    let game = document.getElementById("game");
    if (game) game.remove();
}

function buildLayout() {
    let container = document.getElementById("container");
    let game = document.createElement("div");
    game.id = "game";
    container.appendChild(game);


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
                    break;

                case 6:
                    buildGhost("pink", i, j);
                    break;

                case 7:
                    buildGhost("red", i, j);
                    break;

                case 8:
                    buildGhost("yellow", i, j);
                    break;


                case 9:
                    buildGhost("green", i, j);
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
    cherry.classList.add("cherries-img")
    cherry.src = "./../media/images/cherry.png"
    document.getElementById("game").appendChild(cherry);
}


function buildPacman() {
    let pacman = document.createElement("img");
    if (pacmanDirection === "left") pacman.style.transform = 'rotate(180deg)';
    else if (pacmanDirection === "up") pacman.style.transform = 'rotate(-90deg)';
    if (pacmanDirection === "down") pacman.style.transform = 'rotate(90deg)';


    pacman.src = `./../media/gif/${playerType}.gif`;
    pacman.classList.add(`${playerType}`);


    pacman.id = "pacman-player";
    document.getElementById("game").appendChild(pacman);
}

function buildGhost(color) {
    if (canEatGhosts) {
        color = "blue";
    }
    let ghost = document.createElement("img");
    ghost.src = `./../media/gif/ghost-${color}.gif`
    document.getElementById("game").appendChild(ghost);
}


function movePacman(event, x, y) {
    switch (event.keyCode) {
        case 37:
            //left
            pacmanDirection = "left";
            pacmanpos = move(5, x, y, 0, -1);
            break;
        case 38:
            //up
            pacmanDirection = "up";
            pacmanpos = move(5, x, y, -1, 0);

            break;
        case 39:
            //right
            pacmanDirection = "right";
            pacmanpos = move(5, x, y, 0, 1);

            break;
        case 40:
            //down
            pacmanDirection = "down";
            pacmanpos = move(5, x, y, 1, 0);

            break;

    }
}

function move(objDigit, x, y, addx, addy) {
    clear();
    let objx;
    let objy;

    layout[x][y] = 4; //empty
    objx = x + addx;
    objy = y + addy;

    //check if colided
    switch (layout[objx][objy]) {
        case 0:
            //point
            if (objDigit === 5) {
                addToScore(5);
            }
            isWon()
            break;

        case 1:
            //wall
            objx = x;
            objy = y;
            break;

        case 6:
        case 7:
        case 8:
        case 9:
            //ghosts
            if (objDigit >= 6) {
                objx = x;
                objy = y;
            }
            else {
                if (objDigit === 5) {
                    if (canEatGhosts) {
                        eatGhost(objx, objy);
                        addToScore(500);
                    }
                    else gameover();

                }
            }
            break;

        case 3:
            //cherry
            if (objDigit === 5) {
                addToScore(100);
                canEatGhosts = true;
                setTimeout(() => canEatGhosts = false, 10000) //can eat gosts for 10 seconds
            }
            isWon()
            break;

        case 5:
            //pacman
            if (objDigit >= 6) { //if it is a ghost
                gameover();
            }

    }

    layout[objx][objy] = objDigit;
    buildLayout();
    return [objx, objy];
}

function addToScore(add) {
    let scoreTxt = document.getElementById("scoreTxt");
    score += add;
    updateScoreLocally(score)
    scoreTxt.innerHTML = "score: " + score;
}

function updateScoreLocally(score) {
    let loggedUser = localStorage.getItem(NameThatLogged);
    if (loggedUser) {

        loggedUser = JSON.parse(loggedUser);
        loggedUser.score = score;
        const updatedObject = JSON.stringify(loggedUser);
        localStorage.setItem(NameThatLogged, updatedObject);

    }
}


function eatGhost(x, y) {
    const ghostDigit = layout[x][y];
    let index = ghostDigit - 6;
    const start = ghosts[index].start;
    ghosts[index].pos = start;

    setTimeout(getOut(ghosts[index]), ghostDelay);

}

function gameover() {
    clear();
    const imageGameOver = document.getElementsByClassName('gameover')[0];
    imageGameOver.style.height = '100vh';
    imageGameOver.style.width = '100vw';

    for (let i = 0; i < ghosts.length; i++) {
        clearInterval(ghostIntevals[i]);
    }
}

const ghostIntevals = new Array(ghosts.length).fill(0);
for (let i = 0; i < ghosts.length; i++) {
    setTimeout(() => {
        getOut(ghosts[i]);
        ghostIntevals[i] = setInterval(() => moveGhosts(i, ghosts[i]), ghostSpeed);
    }, ghostDelay * i)
}

function displayName() {
    let Name = document.getElementById("userName");
    Name.innerHTML = "Hello " + NameThatLogged;
}

displayName();
buildLayout();


function getValccurrence(array, value1, value2) {

    var count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === value1 || array[i][j] === value2)
                count++;
        }
    }

    return count - 1;
}

function isWon() {

    if (getValccurrence(layout, 0, 3) === 0) {
        gameover();
    }
}

function randomDirection(x, y, i) {
    const available = [];
    if (layout[x][y + 1] !== 1 && layout[x][y + 1] < 6 && previousDirection[i] !== "left") available.push("right");
    if (layout[x][y - 1] !== 1 && layout[x][y - 1] < 6 && previousDirection[i] !== "right") available.push("left");
    if (layout[x - 1][y] !== 1 && layout[x - 1][y] < 6 && previousDirection[i] !== "down") available.push("up");
    if (layout[x + 1][y] !== 1 && layout[x + 1][y] < 6 && previousDirection[i] !== "up" && layout[x + 1][y] !== 2) available.push("down");
    const index = Math.floor(Math.random() * available.length);
    return available[index];
}

function getOut(ghost) {
    for (let i = 0; i < ghost.pathOut.length; i++) {
        setTimeout(() => { moveOut(ghost, ghost.pathOut[i]) }, ghostSpeed)
    }
}


function moveOut(ghost, direction) {
    let addx = 0;
    let addy = 0;
    switch (direction) {
        case "left":
            addx = 0;
            addy = -1;
            break;
        case "up":
            addx = -1;
            addy = 0;
            break;
        case "right":
            addx = 0;
            addy = 1;
            break;
        case "down":
            addx = 1;
            addy = 0;
            break;
    }

    ghost.pos = move(ghost.digit, ghost.pos[0], ghost.pos[1], addx, addy);

}



function moveGhosts(i, ghost) {
    let addx = 0;
    let addy = 0;
    switch (previousDirection[i]) {
        case "left":
            addx = 0;
            addy = -1;
            break;
        case "up":
            addx = -1;
            addy = 0;
            break;
        case "right":
            addx = 0;
            addy = 1;
            break;
        case "down":
            addx = 1;
            addy = 0;
            break;
    }

    if (layout[ghost.pos[0] + addx][ghost.pos[1] + addy] === 1 || layout[ghost.pos[0] + addx][ghost.pos[1] + addy] >= 6) {
        previousDirection[i] = randomDirection(ghost.pos[0], ghost.pos[1], i);
    } else if (layout[ghost.pos[0] + addx][ghost.pos[1] + addy] === 2) {
        previousDirection[i] = "up";

    }

    ghost.pos = move(ghost.digit, ghost.pos[0], ghost.pos[1], addx, addy);
}


function isIntersection(x, y) {
    let count = 0;
    if (layout[x][y + 1] !== 1) count++;
    if (layout[x][y - 1] !== 1) count++;
    if (layout[x + 1][y] !== 1) count++;
    if (layout[x - 1][y] !== 1) count++;

    return count > 2;
}

