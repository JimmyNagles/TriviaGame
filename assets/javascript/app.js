window.onload = function () {
  
 
  $("#timer").text("");
  $("#start").on("click", start);
  
};


$("#start").on("click", run);
//for timer
var wrong = 0;
var right = 0;
var x = 0;
var number = 20;
var clock;
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
//when theres 10 seconds left it changes the color to red
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
function reset() {
  nextQuestion();
  //resets time
  number = 20;
  $("#timer").css("color", "black")
}


//starts the game
function start() {


  x = 0;
  $("#question").text(myQuestions[x].question);
  
  var html =
  `
  <br>
  <div class="row">
      <div class="col">
      <button class="multipleChoice" data-value="a" >A-${myQuestions[x].answers.a}</button>
      <button class="multipleChoice" data-value="b" >B-${myQuestions[x].answers.b}</button>
      <button class="multipleChoice" data-value="c" >C-${myQuestions[x].answers.c} </button>  
          
      </div>
  </div>`
  $("#question").text(myQuestions[x].question);
  $("#answers").html(html)
  $(".multipleChoice").on("click",compareAnswers)
  $("#start").hide();

}


//when next is clicked
function nextQuestion() {
 number= 20;
 $("#timer").css("color", "black")
  x = x  + 1;
  var html =`<br>
  <div class="row">
      <div class="col">
          <button class="multipleChoice" data-value="a" >A-${myQuestions[x].answers.a}</button>
          <button class="multipleChoice" data-value="b" >B-${myQuestions[x].answers.b}</button>
          <button class="multipleChoice" data-value="c" >C-${myQuestions[x].answers.c} </button>  
      </div>
  </div>`
  $("#question").text(myQuestions[x].question);
  $("#answers").html(html)
  $(".multipleChoice").on("click",compareAnswers)

  //when game is done
  


}
 
///
function compareAnswers(){
 
  var sol = myQuestions[x].correctAnswer;
  var solution = $(this).data("value");
  if (sol===solution){
    right ++;
    $("#correct").html(right);
    nextQuestion();

  }
  else{
    wrong ++;
    console.log(myQuestions[x].correctAnswer)
    console.log(solution)
    $("#incorrect").html(wrong);
    nextQuestion();
  }
  

}
//
function results(){

  alert("you got "+right+ "question right and "+wrong+"wrong")



}





//questions
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
    question: "2. When was microsoft founded?",
    answers: {
      a: "April 14, 1975",
      b: "April 10, 1975",
      c: "April 4, 1975",

    },
    correctAnswer: "c"
  },
  {
    question: "3. Whats the first programming language ever? ",
    answers: {
      a: "C",
      b: "Plankalkul",
      c: "FORTRAN"
    },
    correctAnswer: "b"
  },
  {
    question: "4. When was Apple founded? ",
    answers: {
      a: "April 1,1975",
      b: "April 20,1979",
      c: "April 1,1976"
    },
    correctAnswer: "c"
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