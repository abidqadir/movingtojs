
const h1 = document.querySelector(".h1")
const h2 = document.querySelector(".h2")
const input =document.querySelector(".a")
const input1 =document.querySelector(".b")

input.addEventListener("click",()=>{
    h2.innerHTML = input.value
})



input1.addEventListener("click",()=>{
    h1.innerHTML = input1.value
})