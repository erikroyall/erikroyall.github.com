var data = {
  name: "",
  score: 0
};

var questionNumber = 0;

var countdowntimer;

var questions = [{
  q: "What is (void*)0?",
  a: ['Representation of NULL pointer', 'Representation of NULL pointer', 'Error', 'None of above'], c: 0
}, {
  q: "Can you combine the following two statements into one? char p; p = (char) malloc(100); ",
  a: ['char p = *malloc(100); ', 'char *p = (char) malloc(100); ', 'char p = (char)malloc(100); ', ' char p = (char *)(malloc)(100);'], c: 2
}, {
  q: "Which data type is most suitable for storing a number 65000 in a 32-bit system?",
  a: ['short ', 'int ', 'long ', 'double  '], c: 0
}, {
  q: "A pointer is",
  a: ['A keyword used to create variables ', 'A variable that stores address of an instruction', 'A variable that stores address of other variable ', 'All of the above'], c: 2
}, {
  q: "by default a real number is treated as",
  a: ['Float', 'Double', 'Long double', 'Depends on the memory model you are using'], c: 1
}, {
  q: "In  C, static storage class cannot be used with:",
  a: ['Global variable ', 'Function parameter ', 'Function name ', 'Local variable'], c: 1
}, {
  q: "What is the similarity between a structure, union and enumeration?",
  a: ['All of them let you define new values', 'All of them let you define new data types', 'All of them let you define new pointers', ' All of them let you define new structures'], c: 2
}, {
  q: "The operator used to get value at address stored in a pointer variable is",
  a: ['', '&', '&&', '||'], c: 1
}, {
  q: "How would you print \n on the screen?",
  a: ['printf("\\n");', 'echo "\\n"', "printf('\\n')", 'printf("\\n")'], c: 0
}, {
  q: ' Which of the following is not a storage class',
  a: ['External', 'Automatic', 'Register', 'Define'], c: 3
}, {
  q: "What is the result of the expression ( 10/3 )*3+5%3 ?",
  a: ['10', '11', '8', '1'], c: 1
}];

// Shuffle and get the first 25 questions
questions = _.chunk(_.shuffle(questions), 10)[0];

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAWFPg61SI5rV84g2gRcfely85j7HCpR5Q",
  authDomain: "quiz-76f5f.firebaseapp.com",
  databaseURL: "https://quiz-76f5f.firebaseio.com",
  storageBucket: "quiz-76f5f.appspot.com",
  messagingSenderId: "710120294208"
};
var app = firebase.initializeApp(config);
var db = app.database();

$("#startQuiz").click(function (e) {
  e.preventDefault();
  if (!checkSpecialCases()) return;
  data.name = $("#inputName").val();
  $("#theintro").fadeOut(300, function () {
    loadQuestion(questionNumber++);
    $("#thequestion").fadeIn();
    countdowntimer = startCountdown();
  });
});

$("#next").click(function (e) {
  e.preventDefault();
  if ($("[name=optionsRadios]:checked").val() === "option" + questions[questionNumber - 1].c)
    data.score++;
  else if ($("[name=optionsRadios]:checked").val() === undefined) {
    showError('You must select an option');
    return;
  }
  if (!checkSpecialCases()) return;
  $("[name=optionsRadios]:checked").prop('checked', false);
  loadQuestion(questionNumber++);
});

function showError() {
  $("#error").fadeIn();
}

function checkSpecialCases() {
  if (questionNumber === questions.length) {
    showScore();
    return false;
  }

  if (questionNumber === questions.length - 1) {
    $("#next").text("Finish");
  }

  return true;
}

function loadQuestion(n) {
  const q = questions[n];
  $("#error").fadeOut();
  $("#tquestion").text(q.q);
  q.a.forEach(function (answer, index) {
    $("#label" + index).text(answer);
  });
}

function showScore() {
  clearInterval(countdowntimer);
  $("#timer").text("Time limit: 10:00");
  $("#thequestion").hide();
  $(".card-title").text("Your score is " + data.score + "/" + questions.length);
  $("#scoreboard").show();
  saveScore();
}

function saveScore() {

}

function restart () {
  data.score = 0;
  data.name = "";
  questionNumber = 0;
  $("#next").text("Next");
  $("#scoreboard").fadeOut(function () {
    $("#inputName").val("");
    $("#theintro").fadeIn();
    $("#thequestion").hide();
  });
}

$("#restart").click(restart);

function startCountdown() {
  var seconds = 10 * 60;
  var lol = setInterval(function () {
    seconds -= 1;
    document.getElementById("timer").textContent = "Time left: " + Math.floor(seconds / 60) + ":" + seconds % 60;
    if (seconds <= 0) {
      clearInterval(lol);
      showScore();
    }
  }, 1000);

  return lol;
}
