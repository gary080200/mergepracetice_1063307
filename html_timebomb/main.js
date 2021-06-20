let timer = document.getElementsByTagName("div")[2];
let userInput = document.getElementsByTagName("input")[1];
let hint = document.getElementsByTagName("p")[0];
let button = document.getElementsByTagName("button")[2];
let count = 10;

timer.innerHTML = count;
let myVar = setInterval(myTimer, 1000);

function myTimer(){
    count--;
    timer.innerHTML = count;
    if(count==0){
        hint.innerHTML="Game Over!";
        clearInterval(myVar);
    }
}

function checkPassword(){
    hint.innerHTML="";
    if(parseInt(userInput.value)==1234){
        alert("You got it!");
        clearInterval(myVar);
    }else{
        hint.innerHTML="Try again!";
    }
    userInput.value = null;
}
button.addEventListener("click", checkPassword);