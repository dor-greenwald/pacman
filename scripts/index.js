

function updateGuest() {

    localStorage.setItem("current user","Guest");

}

document.getElementById("playBtn").addEventListener("click", updateGuest);
