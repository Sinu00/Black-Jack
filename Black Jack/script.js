
let Cards= []
let sum= 0
let isAlive= false
let cardId = document.getElementById("cardid")
let sumId = document.getElementById("sumid")
let resultId = document.getElementById("result")

//function for the startgame button
function startclick(){
    isAlive=true
    let Card1= randomnumber()
    let Card2= randomnumber()
    Cards = [
        Card1,
        Card2
    ]
    sum= Card1+Card2
    rendergame() 
}

//function for the newcard button
function newclick(){
    if ( isAlive === true ){
    let Card3= randomnumber()
    sum += Card3
    Cards.push(Card3)
    }
    rendergame()
}

//function for the displaying card values and sum
function rendergame(){
    cardId.textContent = "Card:"  
    for (let i = 0 ; i< Cards.length ; i++){
        cardId.textContent += Cards[i] +" "
    }
    sumId.textContent = "Sum:"+" "+ sum
    if (sum === 21){
        message="BLACK JACK"
        isAlive= false
    }else if (sum < 22){
        message="DRAW NEW CARD"
    }else{
        message="OOPS YOU ARE OUT"
        isAlive= false
    }
    resultId.textContent = message

}

//function for generating randomnumber
function randomnumber(){
    let randomno =  Math.floor(Math.random()*12)+1
    if (randomno === 1){
        return 11
    }else if (randomno > 10){
        return 10
    }else {
        return randomno
    }
}
