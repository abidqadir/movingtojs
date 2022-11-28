
const input1 = document.querySelector('.in1')
const h1 = document.querySelector("h1")



const div1 = document.querySelector('.a')

input1.addEventListener('click', ()=>{
    h1.innerHTML = input1.value

    div2.style.background=input1.value
    div2.style.height = '200px'
    div2.style.width = '200px'
})






const div2 = document.querySelector('.b')
const input2 = document.querySelector('.in2')
input2.addEventListener('click', ()=>{
    
div1.style.background=input2.value
div1.style.height = '200px'
div1.style.width = '200px'
div1.style.margin = '200px'

})


