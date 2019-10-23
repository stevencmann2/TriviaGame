// Javascript for Rock and Roll Trivia

//The triva game contains arrays of all the questions, choices and correct answers to the trivia components//

const trivia = [{

        question: "In Don Mclean's 'American Pie,' he references 'the day the music died'. Who's death is he referencing?",
        choice: ["Billie Holiday", "Martin Luther King Jr.", "Buddy Holly", "John F. Kennedy"],
        correct: "Buddy Holly",
    },

    {
        question: "Jimi Hendrix, Janis Joplin and Kurt Cobain all died at what, now notorious, age?",
        choice: ["26", "27", "28", "25"],
        correct: "27",
    },
    {
        question: "What was the name of the road the Beatles crossed on their famous album dubbed from the same name?",
        choice: ["Noname St.", "Penny Ln.", "Abbey Rd.", "Main St."],
        correct: "Abbey Rd.",
    },
    {
        question: "Jerry Garica was the lead guitarist for which iconoclast American Rock and Roll Group?",
        choice: ["The Rolling Stones", "The Grateful Dead", "The Kinks", "The Yardbirds"],
        correct: "The Grateful Dead",
    },
    {
        question: "What is the largest grossing tour in Rock and Roll history, grossing nearly $740 million?",
        choice: ["U2 - 360 Tour (2009)", "Rolling Stones - Bigger Band Tour (2005)", "Pink Floyd -The Wall Tour (1980)", "Taylor Swift - 1989 Tour (2015)"],
        correct: "U2 - 360 Tour (2009)",
    },
    {

        question: "Although not credited on the album, which guitarist actually recorded the solo for the Beatles 'While My Guitar Gently Weeps', which appeared on the Beatle's 'White Album'?",
        choice: ["Eric Clapton", "Jimmy Paige", "Geroge Harrison", "Keith Richards"],
        correct: "Eric Clapton",
    },
    {
        question: "Which song was the first #1 hit of the 2000's, the last #1 hit of 1999, & ranked as the 2nd most succesful song of all-time by Billboard Magazine?",
        choice: ["'With Arms Wide Open' - Creed", "'Smooth' - Santana ft. Rob Thomas", "'Higher' - Creed", "'Kryptonite' - 3 Doors Down", ],
        correct: "'Smooth' - Santana ft. Rob Thomas",
    },
    {

        question: "Which drummer was found dead after consuming the equivalent of 40 vodka shots?",
        choice: ["Keith Moon", "Earl Palmer", "John Bonham", "Ginger Baker"],
        correct: "John Bonham",
    },
    {
        question: "Who is credited with recording the guitar solo for Michael Jackson's hit song 'Beat it'?",
        choice: ["Jeff Beck", "Angus Young", "Jimi Hendrix", "Eddie Van Halen"],
        correct: "Eddie Van Halen",
    },
    {
        question: "What Color was the 'bad acid' at the first Woodstock Festival?",
        choice: ["Black", "Yellow", "Clear", "Brown"],
        correct: "Brown",
    },

];

//images array that contains images to be displayed upon user response//
const images = ["assets/images/question0.jpg", "assets/images/question1.jpg", "assets/images/question2.jpg", "assets/images/question3.jpg", "assets/images/question4.jpg", "assets/images/question5.jpg", "assets/images/question6.jpg", "assets/images/question7.jpg", "assets/images/question8.jpg", "assets/images/question9.jpg", ];


// variables to be declared as of now//
//answers counters will record results for end slide//

let timeleft = 26;
let triviaInterval;
let playingGame = false;
let correctAnswers = 0;
let wrongAnswers = 0;
let timedoutAnswers = 0;

//similar to count variable used in slideshow example from class//
//this will dictate functions to be run and what question we are on, starting at 0//
let questionNumber = 0;

//By clicking the start button, we will hide the contents of the start screen completely from the user//
//Use jQuery to run "showQuestion" when we click the "start" button.
//this should show the first question function//
$(".start").click(showQuestion)

//Result Card labeled "end-game" hidden
$(".end-game").hide();
//image slide and click result hidden
$(".question-slide").hide();



//show question and choices function 
//will also hide all other elements not in question  and choices form user
function showQuestion() {
    playingGame === true;
    $(".startscreen").hide();
    $(".question-slide").hide();
    $(".card").show();
    endGame();
    $(".question-text").html(trivia[questionNumber].question);
    $(".choiceA-text").html(trivia[questionNumber].choice[0]);
    $(".choiceB-text").html(trivia[questionNumber].choice[1]);
    $(".choiceC-text").html(trivia[questionNumber].choice[2]);
    $(".choiceD-text").html(trivia[questionNumber].choice[3]);
    timeleft = 26;
    timeSetup();
    triviaInterval = setInterval(timeSetup, 1000);

};

//checking of the button click with user repsonse
$(".choice").click(userResponse);

//user response function, will use this to determine value click and compare with correct property
function userResponse() {
    const clicked = $(this);
    console.log(clicked.text());
    if (clicked.text() === trivia[questionNumber].correct) {
        console.log("they match");
        clearInterval(triviaInterval);
        correctAnswers++;
        imagesScreenCorrect(); 

    } else {
        wrongAnswers++;
        clearInterval(triviaInterval);
        imagesScreenIncorrect();
    }
};

//time function for answers that are not answered 
function timeSetup() {
    timeleft--;
    $(".timer").html("Time Left on this Question: " + timeleft);
    if (timeleft == 0) {
        timedoutAnswers++;
        imagesScreenTimeUp();
        clearInterval(triviaInterval);
    }
};


// function for the images screen when the users guess is correct
function imagesScreenCorrect() {
    //this is saying if the ansewer was right then
    $(".card").hide();
    $(".question-slide").show();
    $(".right-wrong").html("Correct, the answer is " + trivia[questionNumber].correct);
    $(".lead").html("<img src=" + images[questionNumber] + " width='400px'>");
    questionNumber++;
    setTimeout(showQuestion, 3000);
};
// function for the images screen when the users guess is incorrect
function imagesScreenIncorrect() {
    //this is saying the answer was wrong 
    $(".card").hide();
    $(".question-slide").show();
    $(".right-wrong").html("Incorrect, the answer is " + trivia[questionNumber].correct);
    $(".lead").html("<img src=" + images[questionNumber] + " width='400px'>");
    questionNumber++;
    setTimeout(showQuestion, 3000);
};
// function for the images screen when the users guess is not recorded before the time runs out
function imagesScreenTimeUp() {
    $(".card").hide();
    $(".question-slide").show();
    $(".right-wrong").html( "Times up! The answer is " + trivia[questionNumber].correct);
    $(".lead").html("<img src=" + images[questionNumber] + " width='400px'>");
    questionNumber++;
    setTimeout(showQuestion, 3000);

};

//replay function will set values to zero upon click event and restart the question from [0]
$(".replay").click(function replay() {
    correctAnswers = 0;
    wrongAnswers = 0;
    timedoutAnswers = 0;
    questionNumber = 0;
    $(".end-game").hide();
    showQuestion();
});

//ends the game and shows results page function //
function endGame() {
    if (questionNumber == 10) {
        //will update when I resolve the timer //
        $(".card").hide();
        $(".question-slide").hide();
        $(".end-game").show();
        $(".results-correct").html("Correct: " + correctAnswers);
        $(".results-incorrect").html("Incorrect: " + wrongAnswers);
        $(".results-unanswered").html("Unanswered: " + timedoutAnswers);
        clearInterval(triviaInterval);
    }
}
