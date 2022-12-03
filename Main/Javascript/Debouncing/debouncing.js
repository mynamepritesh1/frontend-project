function debounce(func, delay){
    let timeout;
    return function(...args){
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            func.call(this,...args);
        
        }, delay)
    }  
}

const myInput = document.getElementById("input-event")

function findSuggestions(e){
    console.log("suggestions for" , e.target.value);
}

const decoratedFunc = debounce(findSuggestions, 300);

myInput.addEventListener("input", decoratedFunc);