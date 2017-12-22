var time = 10;
var wins = 0;
var losses = 0;
var quizPage = 0;

var questions = [
    q1 = {
        question: "Which is a true statement with using a minimized version of jQuery?",
        choice: {
            a: "The minified code is easier to read",
            b: "You can not use a minified file in production",
            c: "The minified file is 50% smaller and more efficent",
            d: "You can only use a minifed file in production",
        },
        answer: 3,
    },
    q2 = {
        question: "jQuery can be used in following scenarios:",
        choice: {
            a: "Mainly for Animation effects",
            b: "Calling functions on events",
            c: "Apply CSS static or dynamic",
            d: "All of the above",
        },
        answer: 4,
    },
    q3 = {
        question: "Which sign is used as a shortcut for jQuery?",
        choice: {
            a: "%",
            b: "$",
            c: "#",
            d: "@",
        },
        answer: 2,
    },
    q4 = {
        question: "How many columns are there in a row using the Bootstrap grid system?",
        choice: {
            a: "12",
            b: "6",
            c: "1",
            d: "2",
        },
        answer: 1,
    },
    q5 = {
        question: "How many rows can you use with Bootstrap?",
        choice: {
            a: "12",
            b: "6",
            c: "Unlimited",
            d: "2",
        },
        answer: 3,
    },
];


function gameStop() {
    clearInterval(intervalTime);
    $(".choice").hide();
    $("#timer").hide();
    $("#question").hide();
}

function gameShow() {
    $(".choice").show();
    $("#timer").show();
    $("#question").show();
    
}

function start() {
    intervalTime = setInterval(countDown, 1000);
}

function countDown() {
    time--;
    $("#timer").html(time);
    if (time === 0) {
        $("#gif").hide();
        losses++;
        $("#losses").html(losses);
        gameStop();
        if (questions.length-1 === quizPage) {
            endGame();
        }else{
        playAgain();
    }
}
}

function playAgain() {
    var button = $("<button></button>").html("NEXT QUESTION");
    button.addClass("again btn btn-large btn-block btn-primary");
    $("#buttons").append(button);
    $(".again").on("click", function () {
        $(".message").hide();
        gameShow();
        $(".again").hide();
        time = 10;
        quizPage++;
        $("#gif").show();
        start();
        countDown();
        $("#question").html(questions[quizPage].question);
        $("#a").html(questions[quizPage].choice.a);
        $("#b").html(questions[quizPage].choice.b);
        $("#c").html(questions[quizPage].choice.c);
        $("#d").html(questions[quizPage].choice.d);
    })
}


function endGame() {
    if (questions.length -1  === quizPage) {
        $(".score").remove();
        finalScore();      
    }  
}

function reStart() {
    var doOver = $("<button></button>").html("TRY AGAIN?");
    doOver.addClass("again btn btn-large btn-block btn-primary");
    $("#redo").append(doOver);

}

function finalScore() {
    var percent = wins / questions.length * 100;
    reStart();
    if (percent >= 80) {
        $(".final").html("Congrats! You scored a " + percent + "%!");
        $(".final").append("<img src='assets/images/dollarsign.gif'/>")
    }else if (percent < 60) {
        $(".final").html("Time to study! You scored a " + percent + "%.");
        $(".final").append("<img src='assets/images/study.gif'/>")
    }else{
        $(".final").html("Not bad! You scored a " + percent + "%.");
        $(".final").append("<img src='assets/images/soso.gif'/>")
    }
    
}






$( document ).ready(function() {
    
     $("#play").on("click",function() {
         $("#play").remove();
         $("#gif").append("<img src='assets/images/question.gif'/>");
         start();
         countDown();
        $(".choice").css({"display":"block"});       
        $("#question").html(questions[quizPage].question);
        $("#a").html(questions[quizPage].choice.a);
        $("#b").html(questions[quizPage].choice.b);
        $("#c").html(questions[quizPage].choice.c);
        $("#d").html(questions[quizPage].choice.d);
    
     });
         
     $(".choice").on("click",function () {
         answerVal = $(this).val();
         if (+answerVal === questions[quizPage].answer){
             $(".message").show().html("CORRECT!!");
             clearInterval(intervalTime);
             wins++;
             $("#wins").html(wins);
             $("#gif").hide();
             gameStop();
             if (questions.length - 1 === quizPage) {
                 endGame();
             } else {
                 playAgain();
             }
             
         }else if (+answerVal != questions[quizPage].answer){
             $(".message").show().html("INCORRECT!!");
             $("#play").html("Next question!");
             $("#gif").hide();
             losses++;
             $("#losses").html(losses);
             gameStop();
             if (questions.length - 1 === quizPage) {
                 endGame();
             } else {
                 playAgain();
             }
            }
         })   
});



