'use strict';

/*
console.log(document.querySelector(".message").textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.numbetr').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber =Math.trunc(Math.random()* 20) + 1;

let highscore = 0;

let score = 20;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', function(){ 
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

document.querySelector('.again').addEventListener
('click',function(){
    let score = 20;
    let secretNumber =Math.trunc(Math.random()* 20) + 1;
    
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent ='';
})    

//No Input    
if (!guess){
    displayMessage('No number!');
}
//Correct Input
else if(guess === secretNumber){
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score>highscore){
        highscore=score;
    }
    document.querySelector('.highscore').textContent = highscore;

} 
else if(guess !== secretNumber){
    if(score > 1){
        displayMessage(guess > secretNumber ? 'Too High'
        : 'Too Low');
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost!');
            document.querySelector('.score').textContent = 0;
        }
}
});