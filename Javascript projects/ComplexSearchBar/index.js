let names = ["Sami", "Jake", "Kenneth", "Kiril", "Aamir", "Nathan", "Sam"]

let list = document.getElementById("list")
let content = ""

renderNames()

function renderNames(){

    for(let i=0; i<names.length; i++){

        content+=`<li class = "option">${names[i]}</li>`
        
    }
    
    list.innerHTML = content 
}


document.getElementById("searchInput").addEventListener("keyup",function(event){
    let queryText= event.target.value.toLowerCase()
    let content =""
    for (let i=0; i<names.length; i++){
        if((names[i].toLowerCase()).includes(queryText)){
            content+= `<li class = "option">${names[i]}</li>`
        }
    }
    list.innerHTML = content
})