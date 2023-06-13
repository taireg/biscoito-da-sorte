let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let cookie =  document.querySelector("#btnCookie");
const btnAgain = document.querySelector("#btnAgain");
let randomNumber = Math.round(Math.random() * 9);



cookie.addEventListener("click", handleClick);
btnAgain.addEventListener('click', handleClick);
document.addEventListener('keydown', handleEnterPress)


function handleClick() {

  const texts = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Siga os bons e aprenda com eles.",
    "O riso é a menor distância entre duas pessoas.",
    "A sorte favorece a mente bem preparada.",
    "Espere pelo mais sábio dos conselhos: o tempo.",
    "Você é do tamanho do seu sonho.",
  ]

  screen2.querySelector('p').innerText = texts[randomNumber]
  console.log(randomNumber)
  textReset();
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

function textReset(){
  randomNumber = Math.round(Math.random() * 9);
}