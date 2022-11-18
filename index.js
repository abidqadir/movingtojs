const btns = document.querySelectorAll('button')
let string = ''
let output = document.querySelector('.calculator__output')
for(btn of btns)
{

    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=')

        {
            string=eval(string)
            output.innerHTML = string


        }
        else if (e.target.innerHTML == 'AC')
        {
            string = ''
            output.innerHTML = string
        }

        else if ( e.target.innerHTML == 'C')
        {
            if(typeof string == 'number')
            {
                string=eval(string)
                string=string.slice(0,-1)
                output.innerHTML= string
            }
            else {
                string.slice(0,-1)
                output.innerHTML= string
            }
        }

        else {
            string+=e.target.innerHTML
            output.innerText = string
        }

    })

} 