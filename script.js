/**Vamos criar uma variavel para armazenar as imagens */
const img = document.getElementById('img');


/**Agora vamos pegar os botões, mas nao vamos pegar cada botão individualmente, nao. Vamos pegar o (pai deles) 
 * Se você ir na html vai ver que os botões estão dentro de uma div, que tem um (id)= buttons
 * vamos pegar esse div 
 */
const buttons = document.getElementById('buttons');


/**Aqui é as variaveis globais */
let colorIndex = 0;
let intervalId = null


/**vamos criar uma funcão para o evento do buttons*/
const trafficLight = ( event) => {
  stopAutomatic();
  turnOn[event.target.id]();
  
}


/** aqui vamos fazer um funçao de condicoes, e executar ela dentro da funçao changeColor */
const nextIndex = () => {

  //colorIndex = colorIndex < 2 ? ++colorIndex : 0

  if (colorIndex < 2) {
    colorIndex++
  }else {
    colorIndex = 0
  }
}


//**aqui vai ser à função de automatic */
const changeColor =  () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex ]
    turnOn[color]();

    nextIndex();
}


const stopAutomatic = () => {
    clearInterval(intervalId)
}


//**aqui é um objeto */
const turnOn  = {
  'red':       () => img.src = './img/vermelho.png',
  'yellow':    () => img.src =  './img/amarelo.png',
  'green':     () => img.src =  './img/verde.png',
  'automatic': () => intervalId = setInterval( changeColor, 1000)
}


/**Vamos cria um evento para esse botões */
buttons.addEventListener('click', trafficLight);

