// Javascript for Rock and Roll Trivia
//$(".start") is the start button at the start of the game

//Triva contains all the questions, choices and correct answers to the trivia components//
let Trivia = [

    {
        question: "In Don Mclean's 'American Pie,' he references the day the music died. Who's death is he referencing?",
        choiceA: "Martin Luther King Jr.",
        choiceB: "Buddy Holly",
        choiceC: "John F. Kennedy",
        choiceD: "Billie Holiday",
        correct: "Buddy Holly",

    },

    {
        question: "Kirk Cobain, Jimi Hendrix, Jim Morrison and Janis Joplin all died at what, now notorious, age?",
        choiceA: "26",
        choiceB: "25",
        choiceC: "27",
        choiceD: "28",
        correct: "27",

    },

    {
        question: "What color was the 'bad acid' at Woodstock?",
        choiceA: "Yellow",
        choiceB: "Blue",
        choiceC: "Red",
        choiceD: "Brown",
        correct: "Brown",
    },

    {
        question: "What was the name of the road the Beatles crossed on their famous album dubbed from the same name?",
        choiceA: "Main St.",
        choiceB: "Noname St.",
        ChoiceC: "Abbey Rd.",
        ChoiceD: "Penny Ln.",
        correct: "Abbey Rd.",

    },

    {
        questoin: "Jerry Garica was the lead guitarist for which iconoclast American Rock and Roll Group?",
        choiceA: "The Kinks",
        choiceB: "The Grateful Dead",
        choiceC: "The Yardbirds",
        choiceD: "Velvet Underground",
        correct: "The Grateful Dead",

    },

    {
        question: "What is the largest grossing tour in Rock and Roll history, grossing nearly $740 million?",
        choiceA: "U2 - 360 Tour (2009)",
        choiceB: "Rolling Stones - Bigger Band Tour (2005)",
        choiceC: "Pink Floyd -The Wall Tour (1980)",
        choiceD: "Taylor Swift - 1989 Tour (2015)",
        correct: "U2 - 360 Tour (2009)",

    },

    {
        question: "Although not credited on the album, which guitarist actually recorded the solo for the Beatles 'While My Guitar Gently Weeps', which appeared on the Beatles 'White Album'?",
        choiceA: "Jimmy Paige",
        choiceB: "Geroge Harrison",
        choiceC: "Keith Richards",
        ChoiceD: "Eric Clapton",
        correct: "Eric Clapton",

    },

    {
        question: "Which song was the first #1 hit of the 2000's, the last #1 hit of 1999, & ranked as the 2nd most succesful song of all-time by Billboard Magazine?",
        choiceA: "'Higher' - Creed",
        choiceB: "'Smooth' - Santana ft. Rob Thomas",
        choiceC: "'Kryptonite' - 3 Doors Down",
        choiceD: "'With Arms Wide Open' - Creed",
        correct: "'Smooth' - Santana ft. Rob Thomas",

    },

    {
        question: "Which drummer was found dead after consuming the equivalent of 40 vodka shots?",
        choiceA: "Keith Moon",
        choiceB: "John Bonham",
        choiceC: "Earl Palmer",
        choiceD: "Ginger Baker",
        correct: "John Bonham",

    },

    {
        question: "Who is credited with recording the guitar solo for Michael Jackson's hit song 'Beat it'?",
        choiceA: "Jimi Hendrix",
        choiceB: "Angus Young",
        choiceC: "Jeff Beck",
        ChoiceD: "Eddie Van Halen",
        correct: "Eddie Van Halen",

    },


];

let playingGame = false;


//By clicking the start button, we will hide the contents of the start screen completely from the user//
const StartBtn = $(".start").click(function () {
    $(".startscreen").hide();
});