const readline = require("readline");

const readline1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

readline1.question("What is your name ", function(name){
    readline1.question("what is your city ",function(city){
        console.log(`Hello ${name} you are from ${city}` );
       readline1.close();
    })
   
})



readline1.on("close",function(){
    console.log('say hello');
})
