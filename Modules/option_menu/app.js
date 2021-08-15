const readline = require('readline');

const books=["Power of Subconcious Mind","Javascript Book"];



const readline1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function fun(){
    readline1.question("Press 1 2 or 3 ",function(value){
    if(value==1){
        books.forEach((el)=>{
            console.log(el);
            readline1.close();
        })
    }else  if(value==2){
        readline1.question("Enter Book Name ",function(book){
            books.push(book);
            books.forEach((el)=>{
                console.log(el);
               
               
            })
            fun();
        })
    }else if(value==3){
        readline1.question("Do you want to quit ? ",function(yes){
            if(yes=="Y"||"y"||"yes"||"YES"){

                console.log("Bye Bye");
                readline1.close();
            }
        })
    }else{
        console.log("You have selected an invalid entry so please press 1, 2 or 3")
        fun();
    }  
   
})

}
fun();
