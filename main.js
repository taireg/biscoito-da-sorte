let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let cookie =  document.querySelector("#btnCookie");
const btnAgain = document.querySelector("#btnAgain");

cookie.addEventListener("click", handleClick);
btnAgain.addEventListener('click', handleClick);
document.addEventListener('keydown', handleEnterPress)


function handleClick() {


  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleEnterPress(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleClick()
  }
}