const tag = document.querySelector("h1")
tag.innerText = "abid"
const div = document.querySelector("div")
div.innerText = "Hamayoon"
let string = "" 

const buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "sub"){
        string = eval(string)
        document.querySelector("input").value = string
    }else if(e.target.innerHTML == "AC"){
        string= ""
        document.querySelector("input").value = string
    }
        
        else{
            string+=e.target.innerHTML
            document.querySelector("input").value = string

        }




    })
    
});
