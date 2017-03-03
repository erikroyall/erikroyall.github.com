var data = {
  name: "",
  score: 0
};

var questionNumber = 0;

var questions = [{
  q: "What is the name of India's National Aquatic Animal?",
  a: ['River Dolphin', 'Crocodile', 'Katla Fish', 'Green Frog'], c: 0
}, {
  q: "'Kuchipudi' is a dance associated with which state of India?",
  a: ['Mizoram', 'Nagaland', 'Kerala', 'Andhra Pradesh'], c: 3
}, {
  q: "Where is Fort William located?",
  a: ['Chennai', 'Goa', 'Kolkata', 'Mysore'], c: 2
}, {
  q: "Which state is known as India's Spice Garden?",
  a: ['Kerala', 'Karnataka', 'Bihar', 'Uttaranchal'], c: 0
}, {
  q: "What is the largest freshwater lake in India?",
  a: ['Dal Lake', 'Powai Lake', 'Wular Lake', 'Chilka Lake'], c: 2
}, {
  q: "What is the annual fair of Rajasthan that is famous for its camel" +
  " trading event?",
  a: ['Pushkar Mela', 'Kumbh Mela', 'Sonepur Mela', 'Suraj Kund Mela'], c: 0
}, {
  q: "In which century did Portuguese merchants first land in Goa?",
  a: ['17th Century', '14th Century', '15th Century', '16th Century'], c: 2
}, {
  q: "Who was the Speaker of the Lok Sabha before he became the President of" +
  " India?",
  a: ['R. Venkataraman', 'A. P. J. Abdul Kalam', 'N. Sanjeeva Reddy', 'K. R.' +
  ' Narayanan'], c: 2
}, {
  q: "Which is the first state to be formed on the basis of language?",
  a: ['Andhra Pradesh', 'Bombay', 'Madhya Pradesh', 'Meghalaya'], c: 0
}, {
  q: "Which state or union territory has French as official language?",
  a: ['Goa', 'Lakshadweep', 'Pondicherry', 'Diu and Daman'], c: 2
}, {
  q: "The words 'Satyameva Jayate' inscribed below the base plate of the" +
  " emblem of India are taken from?",
  a: ['Rigveda', 'Satpath Brahmana', 'Mundak Upanishad', 'Ramayana'], c: 2
}, {
  q: "The National Song of India was composed by",
  a: ['Rabindranath Tagore', 'Bankim Chandra Chatterji', 'Iqbal', 'Jai' +
  ' Shankar Prasad']
}, {
  q: "Who composed the famous song 'Sare Jahan SeAchha'?",
  a: ['Jaidev', 'Mohammad Iqbal', 'Bankim Chandra Chattopadhyay', 'Rabindranath Tagore'],
  c: 1
}, {
  q: "Which of the following places is famous for Chikankari work, which is" +
  " a traditional art of embroidery?",
  a: ['Lucknow', 'Hyderabad', 'Jaipur', 'Mysore'], c: 0
}, {
  q: 'What period is considered as the "Golden Age of Indian cinema", during' +
  ' which time some of the most critically acclaimed Indian films of all time were produced',
  a: ['1950s to 1970s', '1940s to 1960s', '1930s to 1950s', '1960s to 1980s'],
  c: 1
}, {
  q: "First Indian to win an Oscar award",
  a: ['Bhanu Athaiya', 'AR Rahman', 'Rasul Pookutty', 'None of the Above'], c: 0
}, {
  q: "Film and Television Institute of India is located at",
  a: ['Mumbai', 'Kolkata', 'Pune', 'Delhi'], c: 2
}, {
  q: "How many gold medals have been won by India in the Olympics so far?",
  a: ['7', '8', '9', '10'], c: 2
}, {
  q: "The 'Dronacharya Award' is given to...",
  a: ['Sportsmen', 'Coaches', 'Umpires', 'None of the Above'], c: 1
}, {
  q: "In which Indianstate did the game of Polo originate?",
  a: ['Meghalaya', 'Rajasthan', 'Manipur', 'West Bengal'], c: 2
}, {
  q: "The Indian football team made its first appearance at Olympics in...",
  a: ['1936', '1948', '1952', '1956'], c: 1
}, {
  q: "Which ofthe following state and UTs is also known as 'French Riviera" +
  " of the East'?",
  a: ['Daman and Diu', 'Puducherry', 'Goa', 'Kochi'], c: 1
}, {
  q: "What is the capital of the state of Tripura?",
  a: ['Agartala', 'Aizawl', 'Udaipur', 'Imphal'], c: 0
}, {
  q: "What is the capiral of Mizoram?",
  a: ['Agartala', 'Aizawl', 'Udaipur', 'Lunglei'], c: 1
}, {
  q: 'Which city is also called as "Tiger Capital of India"?',
  a: ['Nagpur', 'Ranchi', 'Kolkata', 'Jaipur'], c: 0
}, {
  q: "Which city is also called as pink city?",
  a: ['Nagpur', 'Ranchi', 'Kolkata', 'Jaipur'], c: 3
}, {
  q: "Which one of these is a Union territory?",
  a: ['Jaipur', 'Chandigarh', 'Thiruvanthapuram', 'Raipur'], c: 1
}];

// Shuffle and get the first 25 questions
questions = _.chunk(_.shuffle(questions), 25)[0];

var countdowntimer;

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
