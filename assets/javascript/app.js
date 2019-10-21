// Javascript for Rock and Roll Trivia
//$(".start") is the start button at the start of the game

//The Triva game contains arrays of all the questions, choices and correct answers to the trivia components//

const question = ["In Don Mclean's 'American Pie,' he references the day the music died. Who's death is he referencing?", "Kirk Cobain, Jimi Hendrix, Jim Morrison and Janis Joplin all died at what, now notorious, age?",
        "What color was the 'bad acid' at Woodstock?", "What was the name of the road the Beatles crossed on their famous album dubbed from the same name?", "Jerry Garica was the lead guitarist for which iconoclast American Rock and Roll Group?",
        "What is the largest grossing tour in Rock and Roll history, grossing nearly $740 million?", "Although not credited on the album, which guitarist actually recorded the solo for the Beatles 'While My Guitar Gently Weeps', which appeared on the Beatles 'White Album'?",
        "Which song was the first #1 hit of the 2000's, the last #1 hit of 1999, & ranked as the 2nd most succesful song of all-time by Billboard Magazine?", "Which drummer was found dead after consuming the equivalent of 40 vodka shots?", "Who is credited with recording the guitar solo for Michael Jackson's hit song 'Beat it'?",
    ];
let correct = ["Buddy Holly", "27", "Brown", "Abbey Rd.", "The Grateful Dead", "U2 - 360 Tour (2009)", "Eric Clapton", "'Smooth' - Santana ft. Rob Thomas", "John Bonham", "Eddie Van Halen", ];
const choiceA = ["Martin Luther King Jr.", "26", "Yellow", "Main St.", "The Kinks", "U2 - 360 Tour (2009)", "Jimmy Paige", "'Higher' - Creed", "Keith Moon", "Jimi Hendrix", ];
const choiceB = ["Buddy Holly", "25", "Blue", "Noname St.", "The Grateful Dead", "Rolling Stones - Bigger Band Tour (2005)", "Geroge Harrison", "'Smooth' - Santana ft. Rob Thomas", "John Bonham", "Angus Young", ];
const choiceC = ["John F. Kennedy", "27", "Red", "Abbey Rd.", "The Yardbirds", "Pink Floyd -The Wall Tour (1980)", "Keith Richards", "'Kryptonite' - 3 Doors Down", "Earl Palmer", "Jeff Beck", ];
const choiceD = ["Billie Holiday", "28", "Brown", "Penny Ln.", "Velvet Underground", "Taylor Swift - 1989 Tour (2015)", "Eric Clapton", "'With Arms Wide Open' - Creed", "Ginger Baker", "Eddie Van Halen", ];

//how to set correct Array to a value of true//
for (i=0; i< length.correct;i++) {
    let correct = true;
};
console.log(correct);

//will eventually make correct choice = Choice[i;thisclick]//
// variables to be declared as of now//


let playingGame = false;
let correctAnswers = 0;
let wrongAnswers = 0;
let timedoutAnswers = 0;

//similar to count variable used in slideshow example from class//
let questionNumber = 0;


//By clicking the start button, we will hide the contents of the start screen completely from the user//
//Use jQuery to run "showQuestion" when we click the "start" button.
$(".start").click(showQuestion) 
//this should show the first question function?

//show question and choices function?
function showQuestion (){
    playingGame === true;
    $(".startscreen").hide();
    $(".card").show();
    $(".question-text").html(question[questionNumber]);
    $(".choiceA-text").html(choiceA[questionNumber]);
    $(".choiceB-text").html(choiceB[questionNumber]);
    $(".choiceC-text").html(choiceC[questionNumber]);
    $(".choiceD-text").html(choiceD[questionNumber]);
};

//next question function?
function nextQuestion () {
    questionNumber++;

};



//user answer fucntion? use this to determine value click and compare with correct array//
function userResponse () {

    if ($(this).click() = correct[questionNumber]) {
        console.log("You did it");
        correctAnswers++;
    }
    else{
        wrongAnswers++;
    }

};
console.log(correctAnswers);


//start game function after start click?
/*function gameStart(){
 if playingGame = true {
     
 }
}; */

// need to display the first question and choices for the user//
//but need to make a function for that//



//foor loop of questions//