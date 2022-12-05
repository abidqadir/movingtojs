/*let student = {Name: "abid", 
Marks:96,
sem:8,
age:22,
status:"single" ,
address:{ city:"karachi",
           postalacode:1234,
            postalAdd:"new pnt colony near altamash dental institute karachi"    }

}


    console.log(student,student.age,student.address.city)

*/

let sec =1
function sayHello()


{
    console.log("wait biru", sec)
    sec++

    if(sec==6)
    {
        clearInterval(id)
        console.log("wait is over 😂")
    }
    
}

let id = setInterval(sayHello,100)