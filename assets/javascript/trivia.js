$( document ).ready(function() {

    var time = 10;
    var wins = 0;
    var losses = 0;
    var quizPage = 0;

    var questions = [
        q1 = {
            question: "Which is a true statement with using a minimized version of jQuery?",
            choice: {
                  a:  "The minified code is easier to read",
                  b:  "You can not use a minified file in production",
                  c:  "The minified file is 50% smaller and more efficent",
                  d:  "You can only use a minifed file in production",
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
            question: "jWhich sign is used as a shortcut for jQuery?",
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

    function playAgain(){
        var button = $("<button></button>").text("PLAY AGAIN");   
        button.addClass("again btn btn-large btn-block btn-primary");  
        $("#buttons").append(button); 
        quizPage++;
        // $(".again").remove();
        $("#gif").append("<img src='assets/images/question.gif'/>");
        start();
        countDown();
        $("#question").html(questions[quizPage].question);
        $("#a").html(questions[quizPage].choice.a);
        $("#b").html(questions[quizPage].choice.b);
        $("#c").html(questions[quizPage].choice.c);
        $("#d").html(questions[quizPage].choice.d);
        
    }


    function start() {
        intervalTime = setInterval(countDown,1000);
    }

    function countDown(){
        time--;
        $("#timer").html(time);
        if (time === 0) {
            clearInterval(intervalTime);
            $("#play").html("Next question!");
            $("#gif").remove();
            losses++;
            $("#losses").
            $("#losses").html(losses);
        } else {
            time -1;
        }
    }
    

    
     $("#play").on("click",function() {
         $("#play").remove();
         $("#gif").append("<img src='assets/images/question.gif'/>");
         start();
         countDown();       
        $("#question").html(questions[quizPage].question);
        $("#a").html(questions[quizPage].choice.a);
        $("#b").html(questions[quizPage].choice.b);
        $("#c").html(questions[quizPage].choice.c);
        $("#d").html(questions[quizPage].choice.d);
    
     });
         
     $(".choice").on("click",function () {
         answerVal = $(this).val();
         if (answerVal === questions[quizPage].answer){
             alert("correct");
             clearInterval(intervalTime);
             time = 10;
             wins++;
             $("#wins").html(wins);
             $("#gif").remove();
             playAgain();
         }
       
        
         
     });

       





   
// console.log(questions[0].question);
// console.log(questions[0].choice[0]);

});


//var person = {
//    firstName:"John",
//    lastName:"Doe",
//    age:50,
//    eyeColor:"blue"
//};