$( document ).ready(function() {

    var time = 15;

    var questions = [
        q1 = {
            question: "Which is a true statement with using a minimized version of jQuery?",
            choice: [ "The minified code is easier to read",
                     "You can not use a minified file in production",
                     "The minified file is 50% smaller and more efficent",
                     "You can only use a minifed file in production",
                     ],
            answer: 3,
        },
        q2 = {
            question: "jQuery can be used in following scenarios:",
            guess1: "Mainly for Animation effects",
            guess2: "Calling functions on events",
            guess3: "Apply CSS static or dynamic",
            guess4: "All of the above",
            answer: 4,
        },
        q3 = {
            question: "jWhich sign is used as a shortcut for jQuery?",
            guess1: "%",
            guess2: "$",
            guess3: "#",
            guess4: "@",
            answer: 2,
        },
        q4 = {
            question: "How many columns are there in a row using the Bootstrap grid system?",
            guess1: "12",
            guess2: "6",
            guess3: "1",
            guess4: "2",
            answer: 1,
        },
        q5 = {
            question: "How many rows can you use with Bootstrap?",
            guess1: "12",
            guess2: "6",
            guess3: "Unlimited",
            guess4: "2",
            answer: 3,
        },
        q6 = {
            question: "What class will apply float-left with Bootstrap?",
            guess1: "float-left",
            guess2: "text-center",
            guess3: "pull-left",
            guess4: "left",
            answer: 3,
        },
        q7 = {
            question: "How do you center an element horizontally using css?",
            guess1: "margin: 0 auto",
            guess2: "margin: 0 center",
            guess3: "margin: auto 0",
            guess4: "margin: center 0",
            answer: 1,
        },
    ];

    

    var countdown = setInterval(function(){
        $("#timer").html(time);
            if (time === 0){
                clearInterval();
            }else{
        time--;}},1000);

    

       





   
console.log(questions[0].question);
console.log(questions[0].choice[0]);

});


//var person = {
//    firstName:"John",
//    lastName:"Doe",
//    age:50,
//    eyeColor:"blue"
//};