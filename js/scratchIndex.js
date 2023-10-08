let ninjaGame = document.getElementById("fruitNinjaGame");
let pingPongGame = document.getElementById("PingPongGame");

let showNinjaButton = document.getElementById('openFruitNinja');
showNinjaButton.addEventListener('click', function() {showGame(ninjaGame)});

let showPingpongButton = document.getElementById('openPingPong');
showPingpongButton.addEventListener('click', function() {showGame(pingPongGame)});
let iFrameBlock = false;

function showGame(params) {
    params.style.display = "block";

    if(iFrameBlock == false){
        console.log("test1")
        params.style.transition = "all 0.8s";
        params.style.display = "block";
        iFrameBlock = true;
        // params.style.visibility = "visibile";
    }
    else{
        console.log("test2")
        params.style.display = "none";
        iFrameBlock =false
    }
}



// let scratchGame = document.getElementById("fruitNinjaGame");
// let showButton = document.getElementById('openFruitNinja');
// showButton.addEventListener('click', function() {showGame(scratchGame)});
// let iFrameBlock = false;

// function showGame(params) {
//     params.style.display = "block";

//     if(iFrameBlock == false){
//         console.log("test1")
//         params.style.transition = "all 0.8s";
//         params.style.display = "block";
//         iFrameBlock = true;
//         // params.style.visibility = "visibile";
//     }
//     else{
//         console.log("test2")
//         params.style.display = "none";
//         iFrameBlock =false
//     }
// }