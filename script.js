// Challenge 1: Your Age in Days

function ageInDays(){
    let year = new Date();
    let birthYear = prompt('What is your birth year... Good friend?');
    let daysInTotal = (year.getFullYear() - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + daysInTotal + ' days old!');
    h1.setAttribute('id', 'daysOld');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('daysOld').remove();
}

// Challenge 2: Cat Generator

function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice){
    console.log('Human choice ' + yourChoice.id);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberT0Choice(randToRpsInt());
    console.log('Computer Choice ' + botChoice);
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log('Results ' + results);
    message = finalMessage(results); // '['message': You Won!, 'color': blue]'
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberT0Choice(number){
    return ['rock', 'paper', 'scissors'] [number]
}

function decideWinner(yourChoice, computerChoice){
    let rpsDatabase = {
        'rock': {
            'scissors': 1, 'rock': 0.5, 'paper': 0 
        },
        'scissors': {
            'scissors': 0.5, 'rock': 0, 'paper': 1
        },
        'paper': {
            'scissors': 0, 'rock': 1, 'paper': 0.5
        }
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore,computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    } else if( yourScore === 0.5){
        return {'message': 'You tied!', 'color' : 'yellow'};
    }else{
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humageImageChoice, botImageChoice, message){
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    // remove initial images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // create a few div element
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    // insert inner html
    humanDiv.innerHTML = "<img id='humageImageChoice'src='" + imagesDatabase[humageImageChoice] + "' style='box-shadow: 0px 10px 50px blue;'>"
    botDiv.innerHTML = "<img id='botImageChoice'src='" + imagesDatabase[botImageChoice] + "' style='box-shadow: 0px 10px 50px red;'>"
    messageDiv.innerHTML = "<h1 id='message'style='color: " + message['color'] + "; font-size: 60px; padding: 30px;'>" + message['message'] + "</h1>"
    console.log(messageDiv);

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

function resetRpsGame(){
    document.getElementById('humageImageChoice').remove();
    document.getElementById('message').remove();
    document.getElementById('botImageChoice').remove();

    let rockImage = document.createElement('img');
    let paperImage = document.createElement('img');
    let scissorsImage = document.createElement('img');
    // rock image attributes
    rockImage.setAttribute('id', 'rock');
    rockImage.setAttribute('src', 'https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png');
    rockImage.setAttribute('onClick', 'rpsGame(this)');
    // paper image attributes
    paperImage.setAttribute('id', 'paper');
    paperImage.setAttribute('src', 'https://lt.vector.me/files/images/1/4/147852/notebook_paper_leaf_cartoon_loose_writing_piece_sheet_nexxuz_looseleaf.jpg');
    paperImage.setAttribute('onClick', 'rpsGame(this)');
    // scissors image attributes
    scissorsImage.setAttribute('id', 'scissors');
    scissorsImage.setAttribute('src', 'https://www.pngitem.com/pimgs/m/109-1094383_cartoon-scissors-hd-png-download.png');
    scissorsImage.setAttribute('onClick', 'rpsGame(this)');

    document.getElementById('flex-box-rps-div').appendChild(rockImage);
    document.getElementById('flex-box-rps-div').appendChild(paperImage);
    document.getElementById('flex-box-rps-div').appendChild(scissorsImage);
}

//Challenge 4: Change the color of all buttons

let all_buttons = document.getElementsByTagName('button');          // Get all buttons
//console.log(all_buttons);                                           // Outputs an array of all the buttons

let copyAllButtons = [];                                            // Copy variable to store all buttons for reset function

for(let i=0; i < all_buttons.length; i++){                          
    copyAllButtons.push(all_buttons[i].classList[1]);               // Copy all_buttons to copyAllButtons
}
//console.log(copyAllButtons)

function buttonColorChange(option){                                 // which select option is selected ?
    if(option.value === 'red'){
        buttonRed();
    }else if(option.value === 'green'){
        buttonGreen();
    }else if(option.value === 'reset'){
        buttonColorReset();
    }else if(option.value === 'random'){
        randomColors();
    }
}

function buttonRed(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);           // Remove all buttons second class ie, "btn- "
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);           // Remove all buttons second class ie, "btn- "
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);           // Remove all buttons second class ie, "btn- "
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-success', 'btn-info', 'btn-light', 'btn-dark', 'btn-danger', 'btn-secondary', 'btn-warning'];        // array of all colors

    for(let i=0; i<all_buttons.length;i++){
        let randomNumber = Math.floor(Math.random() * 8);                                                                                   // compute random integer for array index
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);                                                                       // Remove all buttons second class ie, "btn- "
        all_buttons[i].classList.add(choices[randomNumber]);                                                                                // add the color classes
    }
}

// Challenge 5: BlackJack ---------------------------------------------------------------------

let blackjackGame ={
    'you': {'div': '#your-box', 'scoreSpan': '#your-blackjack-result', 'score': 0},
    'dealer': {'div': '#dealer-box', 'scoreSpan': '#dealer-blackjack-result', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'K': 10, 'Q': 10, 'A': [1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const HITSOUND = new Audio('sounds/swish.m4a');
const WINSOUND = new Audio('sounds/cash.mp3');
const LOSSSOUND = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDeal);

function blackjackHit(){
    if(blackjackGame['isStand'] === false){
        let card = randomCard();
        showCard(card,YOU);
        updateScore(card,YOU);
        showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        HITSOUND.play();
    }
}

function blackJackDeal(){
    // showResult(computeWinner());  ---------->         uncomment when playing multiplayer 
    if(blackjackGame['turnsOver'] === true){
       
        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector(YOU['div']).querySelectorAll('img');
        let dealerImages = document.querySelector(DEALER['div']).querySelectorAll('img');

        for(let i=0; i< yourImages.length; i++){
            yourImages[i].remove();
        }

        for(let i=0; i< dealerImages.length; i++){
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(DEALER['scoreSpan']).textContent = 0;
        document.querySelector(YOU['scoreSpan']).style.color = 'white';
        document.querySelector(DEALER['scoreSpan']).style.color = 'white';
        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';


        blackjackGame['turnsOver'] = false;
    
    }
}

function updateScore(card,activePlayer){
    if(card === 'A'){
    // If adding 11 keeps me below, add 11. Otherwise, add 1
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }

    } else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

// Compute winner and return who won
// Update the wins, losses and draws
function computeWinner(){
    let winner;

    if(YOU['score'] <= 21){
        // condition: higher score than dealer or when dealer busts but you're under 21
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            blackjackGame['wins']++;
            winner = YOU;
        } else if(YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;
            winner = DEALER;
        }else if(YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }

        // condition : when user busts but dealer doesn't
    }else if(YOU['score'] > 21 &&  DEALER['score'] <= 21){
        blackjackGame['losses']++;
        winner = DEALER;
        
        // condition: when you AND dealer busts
    }else if(YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
    }
    console.log(blackjackGame);
    // console.log(winner['score']);
    return winner;
}

function showResult(result){
    let message, messageColor;
    
    if(blackjackGame['turnsOver'] === true){
        if(result === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            WINSOUND.play();

        } else if (result === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            LOSSSOUND.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You Drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}

