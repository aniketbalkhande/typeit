window.addEventListener('load', init);
const words = [
    'Hat',
    'chata',
    'ChotaBheem',
    'Kangaroo',
    'Dolphin',
    'Batman',
    'CaptainAmerica',
    'IronMan',
    'GodOfThunder',
    'MightyThor',
    'WolfOfWallStreet',
    'Tiger',
    'Alibaba',
    'Jakarta',
    'Penselvenia',
    'Vibranium',
    'BlackWidow',
    'RajKumar',
    'Force',
    'SevenDeadlySins',
    'BlackBook',
    'OnePunchMan',
    'Car'
];
//DOM Elements
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');
const start = document.querySelector('#start');
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const styleScore = document.querySelector('#styleScore');
const styleTime = document.querySelector('#styleTime');

//different levels
const levels = {
    easy: 6,
    medium: 5,
    hard: 4
};

//Globals
let currentLevel=levels.easy;
let time=currentLevel;
let score = 0;
let isPlaying;

// easy.addEventListener('click',()=>{
//     currentLevel = levels.easy;
//     document.getElementById('easy').style.backgroundColor = 'red';
//     document.getElementById('medium').style.backgroundColor = '#fff';
//     document.getElementById('hard').style.backgroundColor = '#fff';

//     time =  currentLevel;
//     seconds.innerHTML = currentLevel;

// });
// medium.addEventListener('click',()=>{
//     currentLevel = levels.medium;
//     document.getElementById('easy').style.backgroundColor = '#fff';
//     document.getElementById('medium').style.backgroundColor = 'red';
//     document.getElementById('hard').style.backgroundColor = '#fff';
//     time =  currentLevel;

//     seconds.innerHTML = currentLevel;
// });
// hard.addEventListener('click',()=>{
//     currentLevel = levels.hard;
//     document.getElementById('easy').style.backgroundColor = '#fff';
//     document.getElementById('medium').style.backgroundColor = '#fff';
//     document.getElementById('hard').style.backgroundColor = 'red';

//     time =  currentLevel;

//     seconds.innerHTML = currentLevel;
// });

// start.addEventListener('click', init);
// console.log(time);

wordInput.addEventListener('input',()=>{
    const arrayOfCharactor = currentWord.innerHTML.split('');
    const arrayOfValue = wordInput.value.split('');

    arrayOfValue.forEach((charactorSpan, index) =>  {
    const charactor = arrayOfValue[index];
    if (charactor === null) {
        charactorSpan.classList.remove('correct');
        charactorSpan.classList.remove('incorrect');

    }else if(charactor === charactorSpan.innerText){
        charactorSpan.classList.add('correct');
        charactorSpan.classList.remove('incorrect');
    }
    else{
        charactorSpan.classList.remove('correct');
        charactorSpan.classList.add('incorrect');
    }
})
});

//initialize Game 
function init()
{ 
    // seconds.innerHTML = currentLevel;

    showWord(words);

    wordInput.addEventListener('input',startMatch);

    wordInput.addEventListener('input', ()=> {
     
    })

    setInterval(countdown, 1000);

    setInterval(checkStatus, 50);
}

//Start Match 
function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    //if score is -1 then set it to 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
        message.innerHTML = '';
    }else{
        scoreDisplay.innerHTML = score;

    }
    
}

function matchWords(){
     
    if (wordInput.value === currentWord.innerHTML){
        return true;
    }else {
        return false;
    }
}

//Pick and show random words
function showWord(words){
    
    animate(currentWord, 'jackInTheBox');
    
    //Generate Random Array Index
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];   
}


//Countdown Timer
function countdown(){
    //make sure time is not run out
    if(time > 0){
        //Decrement
        time--;
    }else if(time === 0){
        //Game is over
        isPlaying = false;
    }
    //Show time
    
    timeDisplay.innerHTML = time;
    
}

//Check game status
function checkStatus(){
    
    if(!isPlaying && time === 0){
        // animate(message, 'bounceInRight');
        message.innerHTML = 'Game Over!!!';
        // animate(styleScore, 'bounceIn');
        score = -1;
    }
    else if(time>0)
    {   
        message.innerHTML = 'Go Go ///////';
    }
}

// animation function for all 
function animate(element, animation) {
    element.classList.add('animated', animation);
    
    const wait = setTimeout(() => {
      element.classList.remove('animated', animation);
    }, 1000);
  }