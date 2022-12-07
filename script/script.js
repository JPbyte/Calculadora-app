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

//functions

number.forEach(Element =>{
    Element.addEventListener("click", (e) =>{
        const valueBtn = e.target.innerText;
        valueScreen.innerText += valueBtn 
            soma.addEventListener("click", (s) => {
                if(s) {
                    valueScreen.innerText = valueBtn + "+"
                }
        })
    })
})

function calculate(cal) {
    const somatoria = valueBtn + valueBtn
}

del.addEventListener("click", () => {
    valueScreen.textContent = ""
})

igual.addEventListener("click", () => {
    cal()
})

