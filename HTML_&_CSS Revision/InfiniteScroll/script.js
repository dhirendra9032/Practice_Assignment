
const main = document.getElementById('main');
let count = 1;

//for generating 25 item 

async function loadItems() {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${count}`);
    const data = await res.json();
    const { results } = data;
    count++;
    console.log(count)
    
    results.map((el) => {
        createItem(el.name,el.image)
    })

}
loadItems();


//for creating new Item 
function createItem(name,img) {
    const item = document.createElement('div');
    const image=document.createElement('img');
  
    image.src=img
    item.append(image, name);
    main.appendChild(item)
}

//for calling loaditem function on scroll at bottom
main.addEventListener('scroll', () => {

    if (main.clientHeight + main.scrollTop >= main.scrollHeight) {
        setTimeout(()=>{
            
            loadItems();
        },2000)
        
      
    }
})






