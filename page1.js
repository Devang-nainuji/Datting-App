function heart1() {
    var heart1 = document.getElementById("pf").innerHTML = "<i class='fa-solid fa-heart'></i>";
    document.getElementById("p1").style.transform = "rotate(90deg)";
    document.getElementById("p1").style.animation = "myAnime 1s ease-out 0s 1 normal forwards";
}
function heart2() {
    var heart1 = document.getElementById("ps").innerHTML = "<i class='fa-solid fa-heart'></i>";
    document.getElementById("p2").style.transform = "rotate(90deg)";
    document.getElementById("p2").style.animation = "myAnime 1s ease-out 0s 1 normal forwards";
}
function heart3() {
    var heart1 = document.getElementById("pt").innerHTML = "<i class='fa-solid fa-heart'></i>";
    document.getElementById("p3").style.transform = "rotate(90deg)";
    document.getElementById("p3").style.animation = "myAnime 1s ease-out 0s 1 normal forwards";
}
function heart4() {
    var heart1 = document.getElementById("px").innerHTML = "<i class='fa-solid fa-heart'></i>";
    document.getElementById("p4").style.transform = "rotate(90deg)";
    document.getElementById("p4").style.animation = "myAnime 1s ease-out 0s 1 normal forwards";
}
function heart5() {
    var heart1 = document.getElementById("py").innerHTML = "<i class='fa-solid fa-heart'></i>";
    document.getElementById("p5").style.transform = "rotate(90deg)";
    document.getElementById("p5").style.animation = "myAnime 1s ease-out 0s 1 normal forwards";
}
function heart6() {
    var heart1 = document.getElementById("pz").innerHTML = "<i class='fa-solid fa-heart'></i>";
    document.getElementById("p6").style.transform = "rotate(90deg)";
    document.getElementById("p6").style.animation = "myAnime 1s ease-out 0s 1 normal forwards";
}
function heart7() {
    var heart1 = document.getElementById("pz1").innerHTML = "<i class='fa-solid fa-heart'></i>";
    document.getElementById("p7").style.transform = "rotate(90deg)";
    document.getElementById("p7").style.animation = "myAnime 1s ease-out 0s 1 normal forwards";
}
function heart8() {
    var heart1 = document.getElementById("pz2").innerHTML = "<i class='fa-solid fa-heart'></i>";
    document.getElementById("p8").style.transform = "rotate(90deg)";
    document.getElementById("p8").style.animation = "myAnime 1s ease-out 0s 1 normal forwards";
}




function cross1() {
    document.getElementById("p1").style.transform = "rotate(-90deg)";
    document.getElementById("p1").style.animation = "myAnim 1s ease-out 0s 1 normal forwards";
}

function cross2() {
    document.getElementById("p2").style.transform = "rotate(-90deg)";
    document.getElementById("p2").style.animation = "myAnim 1s ease-out 0s 1 normal forwards";
}

function cross3() {
    document.getElementById("p3").style.transform = "rotate(-90deg)";
    document.getElementById("p3").style.animation = "myAnim 1s ease-out 0s 1 normal forwards";
}

function cross4() {
    document.getElementById("p4").style.transform = "rotate(-90deg)";
    document.getElementById("p4").style.animation = "myAnim 1s ease-out 0s 1 normal forwards";
}
function cross5() {
    document.getElementById("p5").style.transform = "rotate(-90deg)";
    document.getElementById("p5").style.animation = "myAnim 1s ease-out 0s 1 normal forwards";
}
function cross6() {
    document.getElementById("p6").style.transform = "rotate(-90deg)";
    document.getElementById("p6").style.animation = "myAnim 1s ease-out 0s 1 normal forwards";
}
function cross7() {
    document.getElementById("p7").style.transform = "rotate(-90deg)";
    document.getElementById("p7").style.animation = "myAnim 1s ease-out 0s 1 normal forwards";
}
function cross8() {
    document.getElementById("p8").style.transform = "rotate(-90deg)";
    document.getElementById("p8").style.animation = "myAnim 1s ease-out 0s 1 normal forwards";
}

const refreshButton = document.getElementById('ref');

refreshButton.addEventListener('click', function () {
    location.reload();
});


document.addEventListener("DOMContentLoaded", function () {
    const chatContent = document.getElementById("chat-content1");
    const messageInput = document.getElementById("message-input1");
    const sendButton = document.getElementById("send-button1");

    sendButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message.trim() !== "") {
        
            const messageElement = document.createElement("div");

            messageElement.textContent = message;

            messageElement.classList.add("message-user-a");

            chatContent.appendChild(messageElement);

            messageInput.value = "";

            chatContent.scrollTop = chatContent.scrollHeight;

            setTimeout(function () {
                const responseMessage = document.createElement("div");
                if (messageElement.textContent == "hi" || messageElement.textContent == "hello" || messageElement.textContent == "heyy" || messageElement.textContent == "hey" || messageElement.textContent == "hii" || messageElement.textContent == "helloo") {
                    responseMessage.textContent = "hello";
                }
                else if (messageElement.textContent == "Who are you?" || messageElement.textContent == "who are you" || messageElement.textContent == "who are you?" || messageElement.textContent == "what is your name?" || messageElement.textContent == "what's ur name?" || messageElement.textContent == "what's your name") {
                    responseMessage.textContent = "I am Shraddha Kapoor";
                }
                else if (messageElement.textContent == "how are you?" || messageElement.textContent == "how r u?" || messageElement.textContent == "how are u" || messageElement.textContent == "how are u?" || messageElement.textContent == "how are u?") {
                    responseMessage.textContent = "I'm fine How are you?";
                }
                else if (messageElement.textContent == "I love You" || messageElement.textContent == "I love you" || messageElement.textContent == "i love you" || messageElement.textContent == "i love u") {
                    responseMessage.textContent = "Omg!! I love you too";
                }
                else if (messageElement.textContent == "ok" || messageElement.textContent == "okk" || messageElement.textContent == "okiee") {
                    responseMessage.textContent = "Yup";
                }
                else if (messageElement.textContent == "Bye" || messageElement.textContent == "bye" || messageElement.textContent == "Bbye" || messageElement.textContent == "bbye" || messageElement.textContent == "byee") {
                    responseMessage.textContent = "Bbye see you again!!";
                }
                else {
                    responseMessage.textContent = "This is Shraddha's response.";
                }
                responseMessage.classList.add("message-user-b"); // Apply CSS class for User B's messages
                chatContent.appendChild(responseMessage);
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000); // Simulate a delay for the response
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const chatContent = document.getElementById("chat-content2");
    const messageInput = document.getElementById("message-input2");
    const sendButton = document.getElementById("send-button2");

    sendButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message.trim() !== "") {
        
            const messageElement = document.createElement("div");
            
            messageElement.textContent = message;

            messageElement.classList.add("message-user-a");

            chatContent.appendChild(messageElement);

            messageInput.value = "";

            chatContent.scrollTop = chatContent.scrollHeight;

            setTimeout(function () {
                const responseMessage = document.createElement("div");
                if (messageElement.textContent == "hi" || messageElement.textContent == "hello" || messageElement.textContent == "heyy" || messageElement.textContent == "hey" || messageElement.textContent == "hii" || messageElement.textContent == "helloo") {
                    responseMessage.textContent = "hello";
                }
                else if (messageElement.textContent == "Who are you?" || messageElement.textContent == "who are you" || messageElement.textContent == "who are you?" || messageElement.textContent == "what is your name?" || messageElement.textContent == "what's ur name?" || messageElement.textContent == "what's your name") {
                    responseMessage.textContent = "I am Kartik Aryan";
                }
                else if (messageElement.textContent == "how are you?" || messageElement.textContent == "how r u?" || messageElement.textContent == "how are u" || messageElement.textContent == "how are u?" || messageElement.textContent == "how are u?") {
                    responseMessage.textContent = "I'm fine How are you?";
                }
                else if (messageElement.textContent == "I love You" || messageElement.textContent == "I love you" || messageElement.textContent == "i love you" || messageElement.textContent == "i love u") {
                    responseMessage.textContent = "Omg!! I love you too";
                }
                else if (messageElement.textContent == "ok" || messageElement.textContent == "okk" || messageElement.textContent == "okiee") {
                    responseMessage.textContent = "Yup";
                }
                else if (messageElement.textContent == "Bye" || messageElement.textContent == "bye" || messageElement.textContent == "Bbye" || messageElement.textContent == "bbye" || messageElement.textContent == "byee") {
                    responseMessage.textContent = "Bbye see you again!!";
                }
                else {
                    responseMessage.textContent = "This is Kartik's response.";
                }
                responseMessage.classList.add("message-user-b"); // Apply CSS class for User B's messages
                chatContent.appendChild(responseMessage);
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000); // Simulate a delay for the response
        }
    });
});



function chatopen() {
    document.getElementById("m").style.display = "block";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("ld").style.display = "none";
    document.getElementById("likeprofile").style.display='none';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
    document.getElementById("myprofile").style.display='none';
}

function devhome() {
    document.getElementById("m").style.display = "none";
    document.getElementById("profilinfo").style.display = "flex";
    document.getElementById("ld").style.display = "none";
    document.getElementById("likeprofile").style.display='none';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
    document.getElementById("myprofile").style.display='none';
}


function likeopen() {
    document.getElementById("ld").style.display = "grid";
    document.getElementById("m").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("likeprofile").style.display='none';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
    document.getElementById("myprofile").style.display='none';
}


function pl1(){
    document.getElementById("likeprofile").style.display='flex';
    document.getElementById("x1").style.display='flex';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("ld").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
}


function pl2(){
    document.getElementById("likeprofile").style.display='flex';
    document.getElementById("x3").style.display='flex';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("ld").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
}


function pl3(){
    document.getElementById("likeprofile").style.display='flex';
    document.getElementById("x4").style.display='flex';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("ld").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
}


function pl4(){
    document.getElementById("likeprofile").style.display='flex';
    document.getElementById("x2").style.display='flex';
    document.getElementById("x1").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("ld").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
}

function pl5(){
    document.getElementById("likeprofile").style.display='flex';
    document.getElementById("x5").style.display='flex';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("ld").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
}

function pl6(){
    document.getElementById("likeprofile").style.display='flex';
    document.getElementById("x7").style.display='flex';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("ld").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
}

function pl7(){
    document.getElementById("likeprofile").style.display='flex';
    document.getElementById("x6").style.display='flex';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("x8").style.display='none';
    document.getElementById("ld").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
}

function pl8(){
    document.getElementById("likeprofile").style.display='flex';
    document.getElementById("x8").style.display='flex';
    document.getElementById("x1").style.display='none';
    document.getElementById("x2").style.display='none';
    document.getElementById("x3").style.display='none';
    document.getElementById("x4").style.display='none';
    document.getElementById("x5").style.display='none';
    document.getElementById("x6").style.display='none';
    document.getElementById("x7").style.display='none';
    document.getElementById("ld").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("chatdiv1").style.display='none';
    document.getElementById("chatdiv2").style.display='none';
}


function back(){
    document.getElementById("ld").style.display='grid';
    document.getElementById("likeprofile").style.display='none';
}

function message1(){
    document.getElementById("chatdiv1").style.display='block';
    document.getElementById("x1").style.display='none';
    document.getElementById("likeprofile").style.display='none';
}

function message2(){
    document.getElementById("chatdiv2").style.display='block';
    document.getElementById("x2").style.display='none';
    document.getElementById("likeprofile").style.display='none';
}

function sha(){
    document.getElementById("chatdiv1").style.display='block';
    document.getElementById("m").style.display='none';
    document.getElementById("likeprofile").style.display='none';
}

function kar(){
    document.getElementById("chatdiv2").style.display='block';
    document.getElementById("m").style.display='none';
    document.getElementById("likeprofile").style.display='none';
}

function profile(){
    document.getElementById("myprofile").style.display='flex';
    document.getElementById("m").style.display = "none";
    document.getElementById("profilinfo").style.display = "none";
    document.getElementById("ld").style.display = "none";
    document.getElementById("likeprofile").style.display='none';
}






function add1(){
    let a = document.getElementById("add1");
    if(a.innerHTML == "Add Friend"){
        a.innerHTML='Request sent';
        a.style.background='deeppink';
        a.style.color='aliceblue';
        a.style.border='2px solid aliceblue';
    }
    else{
        a.innerHTML='Add Friend';
        a.style.background='aliceblue';
        a.style.color='black';
        a.style.border='none';
    }
}
function add2(){
    let a = document.getElementById("add2");
    if(a.innerHTML == "Add Friend"){
        a.innerHTML='Request sent';
        a.style.background='deeppink';
        a.style.color='aliceblue';
        a.style.border='2px solid aliceblue';
    }
    else{
        a.innerHTML='Add Friend';
        a.style.background='aliceblue';
        a.style.color='black';
        a.style.border='none';
    }
}
function add3(){
    let a = document.getElementById("add3");
    if(a.innerHTML == "Add Friend"){
        a.innerHTML='Request sent';
        a.style.background='deeppink';
        a.style.color='aliceblue';
        a.style.border='2px solid aliceblue';
    }
    else{
        a.innerHTML='Add Friend';
        a.style.background='aliceblue';
        a.style.color='black';
        a.style.border='none';
    }
}
function add4(){
    let a = document.getElementById("add4");
    if(a.innerHTML == "Add Friend"){
        a.innerHTML='Request sent';
        a.style.background='deeppink';
        a.style.color='aliceblue';
        a.style.border='2px solid aliceblue';
    }
    else{
        a.innerHTML='Add Friend';
        a.style.background='aliceblue';
        a.style.color='black';
        a.style.border='none';
    }
}
function add5(){
    let a = document.getElementById("add5");
    if(a.innerHTML == "Add Friend"){
        a.innerHTML='Request sent';
        a.style.background='deeppink';
        a.style.color='aliceblue';
        a.style.border='2px solid aliceblue';
    }
    else{
        a.innerHTML='Add Friend';
        a.style.background='aliceblue';
        a.style.color='black';
        a.style.border='none';
    }
}
function add6(){
    let a = document.getElementById("add6");
    if(a.innerHTML == "Add Friend"){
        a.innerHTML='Request sent';
        a.style.background='deeppink';
        a.style.color='aliceblue';
        a.style.border='2px solid aliceblue';
    }
    else{
        a.innerHTML='Add Friend';
        a.style.background='aliceblue';
        a.style.color='black';
        a.style.border='none';
    }
}
function add7(){
    let a = document.getElementById("add7");
    if(a.innerHTML == "Add Friend"){
        a.innerHTML='Request sent';
        a.style.background='deeppink';
        a.style.color='aliceblue';
        a.style.border='2px solid aliceblue';
    }
    else{
        a.innerHTML='Add Friend';
        a.style.background='aliceblue';
        a.style.color='black';
        a.style.border='none';
    }
}
function add8(){
    let a = document.getElementById("add8");
    if(a.innerHTML == "Add Friend"){
        a.innerHTML='Request sent';
        a.style.background='deeppink';
        a.style.color='aliceblue';
        a.style.border='2px solid aliceblue';
    }
    else{
        a.innerHTML='Add Friend';
        a.style.background='aliceblue';
        a.style.color='black';
        a.style.border='none';
    }
}
function lgo(){
    location.replace("home.html");
}

const searchInput = document.getElementById("searchInput");
const list = document.getElementById("list");
const items = list.getElementsByTagName("li");


searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();
        if (itemText.includes(searchText)) {
            items[i].style.display = "block"; 
        } else {
            items[i].style.display = "none"; 
        }
    }
});