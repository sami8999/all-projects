let array = []

const washCarbtn = document.getElementById("wash-car")
const mowLawnbtn = document.getElementById("mow-lawn")
const pullWeedsbtn = document.getElementById("pull-weeds")
const invoice = document.getElementById("list")
const price = document.getElementById("price")
const sendInvoice = document.getElementById("send")

function checkArray(option, arr){
    for (let i=0; i<arr.length; i++)
    {
        if(arr[i]===option){
            return true
        }
    }
}

function addTask(option, price){
    array.push(option)
    invoice.innerHTML+= `<div class = "receipt-container">
                            <div>
                                <p class = "receipt-text">${option}</p> 
                            </div>
                            <div class = "move-right">
                                <p class = "receipt-text">${price}</p> 
                            </div>
                        </div>`
}



function calculateCost(arr){
    let total = 0
    for(let i=0; i<arr.length; i++){
        if (arr[i]==="Wash Car"){
            total +=10
        }
        
        else if (arr[i]==="Mow Lawn"){
            total +=20
        }
        
        else if (arr[i]==="Pull Weeds"){
            total +=30
        }
    }
    price.innerHTML =  "$"+total
    
}

washCarbtn.addEventListener("click", function(){
    if (!checkArray("Wash Car", array)){
        addTask("Wash Car", "$10")
        calculateCost(array)
    }
    
   
})

mowLawnbtn.addEventListener("click", function(){ 
    if (!checkArray("Mow Lawn", array)){
        addTask("Mow Lawn", "$20")
        calculateCost(array)
    }
})

pullWeedsbtn.addEventListener("click", function(){
    if (!checkArray("Pull Weeds", array)){
        addTask("Pull Weeds", "$30")
        calculateCost(array)
    }
})

sendInvoice.addEventListener("click", function(){
    
    array = []
    invoice.innerHTML = null
    calculateCost(array)
})