let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")
let passwordCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9,"@","£","$","%","^","&","*","(",")","_","-"]

let buttonEl = document.getElementById("button-el")

buttonEl.addEventListener("click", function(){
    generatePasswords()
})
function generatePasswords(){
    
    password1.textContent = ""
    password2.textContent = ""
    password3.textContent = ""
    password4.textContent = ""
    
    for (let i=0; i<16; i+=1){
        password1.textContent += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)]
    }
    
    for (let i=0; i<16; i+=1){
        password2.textContent += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)]
    }
    
    for (let i=0; i<16; i+=1){
        password3.textContent += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)]
    }
    
     for (let i=0; i<16; i+=1){
        password4.textContent += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)]
    }
    
}

