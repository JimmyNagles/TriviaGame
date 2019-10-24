window.onload = function () {

  $("#next").on("click", nextQuestion);
  $("#timer").text("");
  $("#start").on("click", start);
  $("#next").on("click", run);
  $("#next").on("click",reset)
};


//for timer

var number = 20;
var clock;
$("#start").on("click", run);
//runs the timer
function run() {
  if (!clock) {
    clock = setInterval(decrement, 1000);
  }
  $("#timer").text(number);
}
//decreases a second 
function decrement() {

  number--;
  //live count on screen under timer
  $("#timer").html(number + " seconds");

  if (number < 10) {

    $("#timer").css("color", "red")
  }
  //once time runs out then 
  if (number === 0) {
    //runs next question function
    reset();

  }
}
//resets count down
function reset(){
  nextQuestion();
  //resets time
  number = 20;
  $("#timer").css("color", "black")
  }


function start() {

  x = 0;
  $("#question").text(myQuestions[x].question);
  $("#answers").text(myQuestions[x].answers);
}


//when next is clicked
function nextQuestion() {

  x = x + 1;
  $("#question").text(myQuestions[x].question);


}









const myQuestions = [{
    question: "1. First laptop computer avaible to the public? ",
    answers: {
      a: "Osborne-1",
      b: "Apple-1",
      c: "HP 9100A",
    },
    correctAnswer: "a"
  },
  {
    question: "2. When was Apple founded? ",
    answers: {
      a: "SApril 1,1975",
      b: "April 20,1979",
      c: "April 1,1976"
    },
    correctAnswer: "c"
  },
  {
    question: "3. When was microsoft founded?",
    answers: {
      a: "April 14, 1975",
      b: "April 10, 1975",
      c: "April 4, 1975",

    },
    correctAnswer: "c"
  },
  {
    question: "4. Whats the first programming language ever? ",
    answers: {
      a: "C",
      b: "Plankalkul",
      c: "FORTRAN"
    },
    correctAnswer: "b"
  },
  {
    question: "5. who created javascript? ",
    answers: {
      a: "Dennis Ritchie",
      b: "Cleve Moler",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "6. which of the following languages was release first? ",
    answers: {
      a: "c++",
      b: "JAvascript",
      c: "Python"
    },
    correctAnswer: "a"
  },
  {
    question: "7. which of the following languages was release first? ",
    answers: {
      a: "c++",
      b: "JAvascript",
      c: "Python"
    },
    correctAnswer: "a"
  },
  {
    question: "8. which of the following languages was release first? ",
    answers: {
      a: "c++",
      b: "JAvascript",
      c: "Python"
    },
    correctAnswer: "a"
  },
];