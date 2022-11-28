let quantity = 1
let price = 20
let result = 0
const btn1 =document.querySelector(".plus")
const btn2 =document.querySelector(".minus")

btn1.addEventListener("click",()=>{
    quantity ++
    result = price * quantity
    document.querySelector(".quantity").innerHTML= quantity
    document.querySelector(".price").innerText=result


})


btn2.addEventListener("click",()=>{
    if (quantity ==1)
    {
        document.querySelector(".quantity").innerHTML = quantity
        document.querySelector(".price").innerHTML = price
    }
    else{

        quantity -=1
        result = result- price
        document.querySelector(".quantity").innerHTML= quantity
        document.querySelector(".price").innerText=result
        
    }


})
