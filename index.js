
 
let btns = document.querySelectorAll("button")
let user = "player1" 

let btn1 
let btn2
let btn3
let btn4
let btn5
let btn6
let btn7
let btn8
let btn9


for(btn of btns){

 btn.addEventListener("click", (b)=>{
    if(user == "player1")
    {
        if (btn1 == "X" && btn2 == "X"&& btn3 == "X" )
        {
            
        b.target.innerHTML= "X"
        user= "player"
        document.getElementById("print").innerHTML = "X won"
        
    }
    }
    else {
        b.target.innerHTML ="0"
        user = "player1"
        
    }

 })   
}