let inp = document.getElementById('input');
let output=document.getElementById('output')
let timeId = null;
function main(){
    inp.addEventListener('keyup',(e)=>{
        let {value}=e.target;
        value === "" ? (output.innerHTML = null) : "";
        output.innerHTML = null;
       
        throttelFunction(value, 300)
       
    })
}
main();

function throttelFunction(query, delay) {
    if (!timeId) {
        timeId = setTimeout(() => {
            getData(query);
            clearTimeout(timeId);
            timeId = null;
        }, delay);
    } else {
        return;
    }
}

async function getData(inp) {


    let res = await fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${inp}&ts=1&apikey=d92863dd6c621917a2b193f1d2b98d37&hash=d0fa43c1e26a0eadb4febe51a788a073`);
    let data = await res.json();
    var {results}=data.data;
    for(item of results){
        let {id,title}=item;
        let div=document.createElement('div');
        let name=document.createElement('p');
        name.textContent=title;
        div.appendChild(name);

      div.addEventListener('onclick',()=>{
       console.log("hello")
       })
        output.append(div);

    }
    //console.log(results);
}


async function getComics(id) {
    let res = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=d92863dd6c621917a2b193f1d2b98d37&hash=d0fa43c1e26a0eadb4febe51a788a073`);
    let comics = await res.json();
    console.log(comics.data.results+"hi")
}



