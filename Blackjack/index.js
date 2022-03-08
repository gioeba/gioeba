let cards= [];
let sum=0;
let hasBlackJack= false;
let isAlive=false;
let message= "";
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el");
let sumEL=document.getElementById("sum-el");
let player={
    name: "Giorgi",
    chips: 200
}

let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name + ": $" + player.chips;

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1;
    if(randomCard>10){
        return 10;
    }else if(randomCard===1){
        return 11;
    }
    return randomCard;
}
function startGame(){
    isAlive=true;
    let firstCard= getRandomCard();
    let secondCard= getRandomCard();
    cards= [firstCard, secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent="Cards: ";
    for(i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    if(sum <= 20){
        message="Do you want to draw a new card?";
    }else if(sum ===21){
        hasBlackJack= true;
        message="You've got Blackjack!";
    }else{
        isAlive= false;
        message="You're out of the game!";
    }
    messageEl.textContent=message;
    sumEL.textContent="Sum: " + sum;
    console.log(message);
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let newCard= getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}
