
const btns =document.querySelectorAll('button')
let output = document.querySelector('.calculator__output')
let string = ''


for (btn of btns)
{

        btn.addEventListener("click", (e)=>{

            if (e.target.innerHTML == '=')
            {
                if(string.length == 0 )
                {
                    string =''
                    output.innerHTML =string
                }
                else 
                {
                
                    string=eval(string)
                    output.innerHTML = string    
                }
                
                
            }
            else if (e.target.innerHTML == 'AC')
            {
                string = ''
                output.innerHTML = string
            }

            else if (e.target.innerHTML == 'C')
            {   string = `${string}`
                string = string.slice(0,-1)
                output.innerHTML=string
            }

            else{
                string+=e.target.innerHTML
                output.innerHTML= string
            }
        })
}