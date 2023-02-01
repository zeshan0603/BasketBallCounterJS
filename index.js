let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

let homeCount = 0;
let guestCount = 0;

function resetGame(){
    homeCount=0;
    guestCount=0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
    
}

function upHomeByOne(){
    homeCount ++;
    homeScore.textContent = homeCount;
}
function upHomeByTwo(){
    homeCount +=2;
    homeScore.textContent = homeCount;
}
function upHomeByThree(){
    homeCount +=3;
    homeScore.textContent = homeCount;
}
function upGuestByOne(){
    guestCount ++;
    guestScore.textContent = guestCount;
}
function upGuestByTwo(){
    guestCount += 2;
    guestScore.textContent = guestCount;
}
function upGuestByThree(){
    guestCount += 3;
    guestScore.textContent = guestCount;
}