// var abc = document.querySelector('#sub');
// var ml = document.querySelectorAll('input[id="ml"]');
// abc.addEventListener("click", () => {
//     for (radioButton of ml) {
//         if (radioButton.checked) {
//             location.replace("boy.html");
//         }
//     }
// }
// )

// var abc = document.querySelector('#sub');
// var fl = document.querySelectorAll('input[id="fl"]');
// abc.addEventListener("click", () => {
//     for (radioButton of fl) {
//         if (radioButton.checked) {
//             location.replace("girl.html");
//         }
//     }
// }
// )

function load(){
    var fn=document.getElementById('fn').value;
    var ln=document.getElementById('ln').value;
    var mob_no = document.getElementById("mob_no").value;
    if(fn.length==0){
        document.getElementById('note1').innerHTML = "*Please enter your first name";
    }
    if(ln.length==0){
        document.getElementById('note2').innerHTML ="*Please enter your last name";
    }
    if (mob_no.length != 10) {
        document.getElementById('note3').innerHTML = "*Please enter valid mobile number";
    }
    else {
        location.replace("main.html");
    }
}
