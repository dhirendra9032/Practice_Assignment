
async function images(){
    let res=await fetch('https://pixabay.com/api/?key=24389221-1e07949265c403facd9f6ce52')
    let data=await res.json();
    return data.hits
   
   
}

let data=images()

async function DataShow(){

    let imgData=["sjgf",1,2,2];
    console.log(imgData)

    let grid=document.getElementById("main");

    imgData.forEach(element => {
        let gridItem=document.createElement('div');
        gridItem.className="grid-item";

        let image=document.createElement('img');
        image.scr="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

        let h1=document.createElement('h1');
        h1.textContent="hello dom"

        //console.log(element.userImageURL)
        gridItem.append();
        grid.appendChild(image)
    });
}

DataShow(data);

function check(){
    let grid=document.getElementById("main");
    
    [1,2,3].forEach(element=>{
        let h1=document.createElement('h1');
        h1.textContent="hello dom"
    
        grid.appendChild(h1)
    })
   
}
//check();

