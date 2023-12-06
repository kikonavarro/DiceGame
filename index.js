let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomDiceImage = "dice" + randomNumber1 + ".png"
let randomImageSource = "./images/" + randomDiceImage

const img1 = document.querySelectorAll('img')[0]
img1.setAttribute("src", randomImageSource)


let randomNumber2 = Math.floor(Math.random() * 6) + 1
let randomDiceImage2 = "dice" + randomNumber2 + ".png"
let randomImageSource2 = "./images/" + randomDiceImage2

const img2 = document.querySelectorAll('img')[1]
img2.setAttribute("src", randomImageSource2)

let ganador = document.querySelector('h1')
console.log(ganador)

if (randomNumber1 > randomNumber2 ) {
    ganador.innerText = 'El jugador 1 es el ganador'
}
else if (randomNumber1 < randomNumber2 ){
    ganador.innerText = 'El jugador 2 es el ganador'
}
else {
    ganador.innerText = 'Empate, sigue jugando'
}


