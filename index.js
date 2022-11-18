let input = document.querySelector('input')
const btns = document.querySelectorAll('button')
string = "" 

for(btn of btns)
{

 btn.addEventListener('click',(e)=>{
   
    if(e.target.innerHTML == "=") {
        string=eval(string)
        input.value = string
        
    }
else if (e.target.innerHTML == 'ac')
{
    string = ""
    input.value =string
}
    else if (e.target.innerHTML == 'del')
    {
        if ( typeof string == 'number'  )
        
        
        {
            string = `${string}`
            string =string.slice(0,-1)  
            input.value=string
           
           
            
        }
        else {
            
            string =string.slice(0,-1)  
            input.value=string
           
            
        }
      }

    else{
        string+=e.target.innerHTML
        input.value = string

    }
 }
 )
}


