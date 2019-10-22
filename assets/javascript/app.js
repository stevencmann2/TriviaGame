// Javascript for Rock and Roll Trivia
//$(".start") is the start button at the start of the game

//The triva game contains arrays of all the questions, choices and correct answers to the trivia components//

const trivia = [{

        question: "In Don Mclean's 'American Pie,' he references 'the day the music died'. Who's death is he referencing?",
        choice: ["Billie Holiday", "Martin Luther King Jr.", "Buddy Holly", "John F. Kennedy"],
        correct: "Buddy Holly",
    },

    {
        question: "Jimi Hendrix, Janis Joplin and Kurt Cobain all died at what, now notroious, age?",
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

        question: "Although not credited on the album, which guitarist actually recorded the solo for the Beatles 'While My Guitar Gently Weeps', which appeared on the Beatles 'White Album'?",
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
function showQuestion() {
    playingGame === true;
    $(".startscreen").hide();
    $(".card").show();
    $(".question-text").html(trivia[questionNumber].question);
    $(".choiceA-text").html(trivia[questionNumber].choice[0]);
    $(".choiceB-text").html(trivia[questionNumber].choice[1]);
    $(".choiceC-text").html(trivia[questionNumber].choice[2]);
    $(".choiceD-text").html(trivia[questionNumber].choice[3]);
};

//next question function?
function nextQuestion() {
    questionNumber++;

};

//checking of the button click with user repsonse
$(".choice").click(userResponse);

//user answer fucntion? use this to determine value click and compare with correct array//
function userResponse() {
    const clicked = $(this);
    console.log(clicked.text());
    if (clicked.text() === trivia[questionNumber].correct){
        console.log("they match");
        questionNumber++;
        showQuestion();
    correctAnswers++;
    }
    else{
        wrongAnswers++;
        questionNumber++;
        showQuestion();
    }
console.log(wrongAnswers);
console.log(correctAnswers);
    
    // need to put a comparative statement of button text and correct[questionNumber]//
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