"use strict";

function normalizeAnswer (answer) {
    // Gets the first character of an answer, which should be either 'y' or 'n', and then capitalizes it to prepare it for our conditional checks.
    let normalizedResponse = answer.charAt(0).toUpperCase();
    return normalizedResponse;
}

alert("Welcome to 'Wow, Who The Heck Is This Guy Anyways?' Where nothing is made up and the points don't matter.")

let userName = prompt("Hey, you. Yeah, you! What's your name?");

while (!userName) {
    userName = prompt("Oh, come on don't be shy. What's your name?");
}
//console.log("user's name is " + userName);
alert('Hey, ' + userName + '! Welcome to the show!')

const questionsArr = [
    'Do I have a pet?', 
    'Do I like spicy foods?',
    'Do I have a degree in Game Programming?',
    'Have I worked in the games industry?',
    'Would I listen to Spice Girls?',
];

const answersArr = [
    'Y',
    'Y',
    'N',
    'N',
    'Y',
];

const responseCorrect = [
    "Correct! Her name is Stardust and she's a spoiled little brat. +500 points",
    "Correct! Wow, it's like we're best friends. +0 points because being best friends should be enough.",
    'That is correct! I do not have a degree in Game Programming, its actually in Game Art & Design. +1 Expired Coupon for FruitStripe gum',
    "Correct! Get a load of this guy, I bet you'd be a great partner for Bar Trivia night. + 1 Gold Star sticker.",
    "Correct! Spice girls are a vibe and you can't change my mind. +1 point!!!",

];

const responseIncorrect = [
    'Wrong. Straight to jail. Do not pass go or collect $500.',
    'Incorrect! Draw 4 cards and skip your turn.',
    'Incorrect! You know, after spending 3 days in class together I thought you would know me better than this.',
    "Nope, wrong. I'm not a good enough artist :') I'm not crying, you are.",
    "Wrong. Spice girls are dope. Even if you answered the other 4 correctly you failed the test now."

];

const responseInvalidAnswer = [
    "It was a 'yes' or 'no' question...",
    "Really? Again? Dude... Pick 'yes' or 'no'.",
    "Okay, you actually owe me points now. 'YES' OR 'NO' ANSWERS",
    "I'm not een going to say anything anymore. You're being shunned.",
    '...',

]

const topFiveStarterPokemon = [
    'Fuecoco',
    'Chimchar',
    'Charmander',
    'Turtwig',
    'Totodile',
]

let score = 0;
let j = 0;

for (let i = 0; i < questionsArr.length; i++) {

    let answer = prompt(questionsArr[i]);

    while (!answer) {
        alert('Dude, you have to at least try to answer the question...');
        answer = prompt(questionsArr[i]);
    }

    alert(`${userName} answered ${answer}...`);
    answer = normalizeAnswer(answer);
    //console.log('normalized answer');

    if (answer === answersArr[i]) {
        //console.log('correct response')
        alert(responseCorrect[i]);
        score++;
    } else if ((answer != answersArr[i] && answer === 'N') || (answer != answersArr[i] && answer === 'Y')) {
        //console.log('incorrect response');
        alert(responseIncorrect[i]);
    } else {
        //console.log(j);
        if (j >= responseInvalidAnswer.length) {
            alert(responseInvalidAnswer[4]);
        } else {
            alert (responseInvalidAnswer[j]);
        }
        j++;
        i--;
        //console.log(j);
    }
}

let randomNumber = Math.round(Math.random() * 21); //Math.random returns a random number between 0 and 1. When we multiply it by a number it scales the max range. However, if we multiply it by 20 it will only produce a number between 0 and 19, so by scaling it by 21 we set the range of possible numbers between 0 and 20.
let attempts = 0;
let numberGuess = 0;

do {
    //console.log(randomNumber);
    numberGuess = prompt('Pick a number between 0 and 20.');
    // numberGuess = Number(numberGuess);
    // console.log(typeof numberGuess);

    while (/*numberGuess === NaN ||*/ numberGuess < 0 || numberGuess > 20) {
        numberGuess = prompt('Please enter a valid number between 0 and 20')
    }

    if (numberGuess > randomNumber) {
        alert('Too high!');
    } else if (numberGuess < randomNumber) {
        alert('Too low!');
    } else if (numberGuess == randomNumber) {
        alert('Whoa! You got it right!');
        score++;
        //console.log(score);
    }
    attempts++;
    //console.log(attempts);
} while (attempts < 4 && numberGuess != randomNumber)

if (attempts === 4 && numberGuess != randomNumber) {
    alert(`Sorry, too many attempts! No points given. The correct answer was ${randomNumber}!`);
}

attempts = 0;
let pokemonGuess;

do {
    pokemonGuess = prompt('Guess what one of my top 5 favorite pokemon starters are? (First stage evolutions only)');
    pokemonGuess = pokemonGuess.charAt(0).toUpperCase() + pokemonGuess.slice(1).toLowerCase();
    if (topFiveStarterPokemon.includes(pokemonGuess)) {
        alert(`Nice! Yeah, ${pokemonGuess} is pretty awesome!`);
        score++;
    } else {
        alert('Sorry, try again!')
    }
    attempts++;
} while (attempts < 7 && !topFiveStarterPokemon.includes(pokemonGuess))

alert(`The correct answers were ${topFiveStarterPokemon}`);
alert(`You got ${score} correct out of 7. Your grandma would be proud.`)
alert("Thank you for playing 'Wow, Who The Heck Is This Guy Anyways?', " + userName +" We'll see you next time!");
