// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

const takeOffButton = document.getElementById("takeoff");
const landingButton = document.getElementById("landing");
const abortButton = document.getElementById("missionAbort");
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const rocket = document.getElementById("rocket");

rocket.style.bottom = "0px";
rocket.style.position = "absolute";

takeOffButton.addEventListener("click", function() {
    let response = confirm("Confirm that the shuttle is ready for takeoff");

    if (response) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }
});

landingButton.addEventListener("click", function () { 
    let response = confirm("The shuttle is landing. Landing gear engaged.");
    if (response) {
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
});

abortButton.addEventListener("click", function () { 
    let response = confirm("Confirm that you want to abort the mission.");
    if (response) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
});

upButton.addEventListener("click", function () {
    let num = document.getElementById("spaceShuttleHeight").innerHTML;
    let newNum = Number(num) + 10000;
    document.getElementById("spaceShuttleHeight").innerHTML = newNum;

    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
});

downButton.addEventListener("click", function () {
    let num = document.getElementById("spaceShuttleHeight").innerHTML;
    let newNum = Number(num) + -10000;
    document.getElementById("spaceShuttleHeight").innerHTML = newNum;

    rocket.style.bottom = parseInt(rocket.style.bottom) + -10 + "px";
});

});