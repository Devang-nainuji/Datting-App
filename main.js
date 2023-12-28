
let isOpen = false;
function c1() {
    if (isOpen) {
        document.getElementById("ch1" ).style.display = "none";
    } else {
        document.getElementById("ch1").style.display = "block";
    }
    isOpen = !isOpen;
}
document.getElementById('toggleButton').addEventListener('click', c1);

function c2() {
    if (isOpen) {
        document.getElementById("ch2").style.display = "none";
    } else {
        document.getElementById("ch2").style.display = "block";
    }
    isOpen = !isOpen;
}
document.getElementById('toggleButton').addEventListener('click', c2);

function c3() {
    if (isOpen) {
        document.getElementById("ch3").style.display = "none";
    } else {
        document.getElementById("ch3").style.display = "block";
    }
    isOpen = !isOpen;
}
document.getElementById('toggleButton').addEventListener('click', c3);

function c4() {
    if (isOpen) {
        document.getElementById("ch4").style.display = "none";
    } else {
        document.getElementById("ch4").style.display = "block";
    }
    isOpen = !isOpen;
}
document.getElementById('toggleButton').addEventListener('click', c4);

function c5() {
    if (isOpen) {
        document.getElementById("ch5").style.display = "none";
    } else {
        document.getElementById("ch5").style.display = "block";
    }
    isOpen = !isOpen;
}
document.getElementById('toggleButton').addEventListener('click', c5);

function c6() {
    if (isOpen) {
        document.getElementById("ch6").style.display = "none";
    } else {
        document.getElementById("ch6").style.display = "block";
    }
    isOpen = !isOpen;
}
document.getElementById('toggleButton').addEventListener('click', c6);

function c7() {
    if (isOpen) {
        document.getElementById("ch7").style.display = "none";
    } else {
        document.getElementById("ch7").style.display = "block";
    }
    isOpen = !isOpen;
}
document.getElementById('toggleButton').addEventListener('click', c7);

function c8() {
    if (isOpen) {
        document.getElementById("ch8").style.display = "none";
    } else {
        document.getElementById("ch8").style.display = "block";
    }
    isOpen = !isOpen;
}
function load(){
    location.replace("page1.html");
}
document.getElementById('toggleButton').addEventListener('click', c8);