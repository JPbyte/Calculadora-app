//variables
const body =  document.querySelector("body")
const toggle = document.getElementById("toggle")
const calc = document.querySelector(".calc")
const label = document.querySelectorAll("label")
const themeText = document.querySelector(".theme_text")
const tela = document.querySelector(".screen_value")
const option = document.getElementById("switch_option")

const themeSelect = document.querySelectorAll(".theme_click")
const valueScreen = document.querySelector("#value")
const number = document.querySelectorAll(".number")
const del = document.querySelector(".number_del")
const reset = document.getElementById("reset")
const igual = document.getElementById("igual")

//functions

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

del.addEventListener("click", () => {
    valueScreen.textContent = valueScreen.textContent.slice(0, -1)
})

themeSelect[0].addEventListener("click", () => {
    themeSelect[1].style.opacity = "0"
    themeSelect[2].style.opacity = "0"
    themeSelect[0].style.transition = "0.3s"
    themeSelect[0].style.opacity = "1"
    themeSelect[0].backgroundColor = "hsl(6, 63%, 50%)"
    calc.style.color = "hsl(0, 0%, 100%)"
    calc.style.transition = "0.4s"
    body.style.backgroundColor = "hsl(222, 26%, 31%)"
    body.style.transition = "0.4s"
    themeText.style.color = "hsl(0, 0%, 100%)"
    option.style.backgroundColor = "hsl(223, 31%, 20%)"
    tela.style.backgroundColor = "hsl(224, 36%, 15%)"
    tela.style.color = "white"
    toggle.style.backgroundColor = "hsl(223, 31%, 20%)"
    number.forEach(Element =>{
        Element.style.backgroundColor = "hsl(45, 7%, 89%)"
        Element.style.borderBottom = "0.26rem hsl(35, 11%, 61%) solid"
        Element.style.color = "hsl(60, 9%, 19%)"
    })
    reset.style.backgroundColor = "hsl(225, 21%, 49%)"
    reset.style.borderBottom = "0.26rem hsl(224, 28%, 35%) solid"
    del.style.backgroundColor = "hsl(225, 21%, 49%)"
    del.style.borderBottom = "0.26rem hsl(224, 28%, 35%) solid"
    igual.style.backgroundColor = "hsl(6, 63%, 50%)"
    igual.style.borderBottom = "0.26rem hsl(6, 70%, 34%) solid"
        label.forEach(la => {
            la.style.color = "hsl(0, 0%, 100%)"
        })
})

themeSelect[1].addEventListener("click", () => {
    themeSelect[0].style.opacity = "0"
    themeSelect[2].style.opacity = "0"
    themeSelect[0].style.transition = "0.3s"
    themeSelect[1].style.opacity = "1"
    themeSelect[1].backgroundColor = "hsl(25, 98%, 40%)"
    calc.style.color = "hsl(60, 10%, 19%)"
    calc.style.transition = "0.4s"
    body.style.backgroundColor = "hsl(0, 0%, 90%)"
    body.style.transition = "0.4s"
    themeText.style.color = "hsl(60, 10%, 19%)"
    option.style.backgroundColor = "hsl(0, 5%, 81%)"
    tela.style.backgroundColor = "hsl(0, 0%, 93%)"
    tela.style.color = "black"
    toggle.style.backgroundColor = "hsl(0, 5%, 81%)"
    number.forEach(Element =>{
        Element.style.backgroundColor = "hsl(45, 7%, 89%)"
        Element.style.borderBottom = "0.26rem hsl(35, 11%, 61%) solid"
        Element.style.color = "hsl(60, 9%, 19%)"
    })
    reset.style.backgroundColor = "hsl(185, 42%, 37%"
    reset.style.borderBottom = "0.26rem hsl(185, 58%, 25%) solid"
    del.style.backgroundColor = "hsl(185, 42%, 37%"
    del.style.borderBottom = "0.26rem hsl(185, 58%, 25%) solid"
    igual.style.backgroundColor = "hsl(25, 98%, 40%)"
    igual.style.borderBottom = "0.26rem hsl(25, 99%, 27%) solid"
        label.forEach(la => {
            la.style.color = "hsl(60, 10%, 19%)"
        })
})

themeSelect[2].addEventListener("click", () => {
    themeSelect[0].style.opacity = "0"
    themeSelect[1].style.opacity = "0"
    themeSelect[2].style.transition = "0.3s"
    themeSelect[2].style.opacity = "1"
    themeSelect[2].style.backgroundColor = "hsl(176, 100%, 44%)"
    calc.style.color = "hsl(52, 100%, 62%)"
    calc.style.transition = "0.4s"
    body.style.backgroundColor = "hsl(268, 75%, 9%)"
    body.style.transition = "0.4s"
    themeText.style.color = "hsl(52, 100%, 62%)"
    option.style.backgroundColor = "hsl(268, 71%, 12%)"
    tela.style.backgroundColor = "hsl(268, 71%, 12%)"
    tela.style.color = "hsl(52, 100%, 62%)"
    toggle.style.backgroundColor = "hsl(268, 71%, 12%)"
        number.forEach(Element =>{
            Element.style.backgroundColor = "hsl(268, 47%, 21%)"
            Element.style.color = "hsl(52, 100%, 62%)"
            Element.style.borderBottom = "0.26rem hsl(285, 91%, 52%) solid"
        })
    reset.style.backgroundColor = "hsl(281, 89%, 26%)"
    reset.style.borderBottom = "0.26rem hsl(285, 91%, 52%) solid"
    del.style.backgroundColor = "hsl(281, 89%, 26%)"
    del.style.borderBottom = "0.26rem hsl(285, 91%, 52%) solid"
    igual.style.backgroundColor = "hsl(176, 100%, 44%)"
    igual.style.borderBottom = "0.26rem hsl(177, 92%, 70%) solid"
        label.forEach(la => {
            la.style.color = "hsl(52, 100%, 62%)"
        })
})

