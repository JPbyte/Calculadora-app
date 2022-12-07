//variables

const themeSelect = document.querySelectorAll("#theme_click")
const valueScreen = document.querySelector("#value")
const number = document.querySelectorAll(".number")
const del = document.querySelector(".number_del")
const soma = document.querySelector(".number_soma")
const sub = document.querySelector(".number_sub")
const multiplicacao = document.querySelector(".number_multiplicacao")
const divisao = document.querySelector(".number_divisao")
const point = document.querySelector(".number_point")
const reset = document.getElementById("reset")
const igual = document.getElementById("igual")
console.log(igual)
//functions

function calculate() {
    return valueBtn + valueBtn
}

number.forEach(Element =>{
    Element.addEventListener("click", (e) =>{
        const valueBtn = e.target.innerText;
        valueScreen.innerText += valueBtn 
    })
})


reset.addEventListener("click", () => {
    valueScreen.textContent = ""
})

igual.addEventListener("click", () => {
    valueScreen.textContent = eval(valueScreen.textContent)
})

