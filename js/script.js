let text = document.querySelector(".textpole")

let action = document.querySelectorAll(".action")
    action.forEach((i) => i.addEventListener('click',function(){
            text.value += this.value
    }))

let number = document.querySelectorAll(".number")
    number.forEach((i) => i.addEventListener('click',function(){
       text.value += this.value
    }))

let clearAll = document.querySelector(".clearAll")
    clearAll.addEventListener("click", function(){
        text.value = ""
    })

let clear = document.querySelector(".clear")
    clear.addEventListener("click", function(){
        text.value = text.value.substring(0, text.value.length - 1)
    })
let result = document.querySelector(".result")
    result.addEventListener("click", function(){
        text.value = eval(text.value)
    })


