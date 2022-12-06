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

let sec =10
function sayHello()
{
console.log(sec)
sec--
if(sec == 0){
    clearInterval(timer)
    console.log("times up 😜")
}
}


timer = setInterval(sayHello,1000)
