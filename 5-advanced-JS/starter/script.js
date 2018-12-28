//Object Literal constructor

// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };

//Function constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Object.create constructor

var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var mike = Object.create(personProto);
mike.name = "Mike";
mike.yearOfBirth = 1990;
mike.job = "developer";

var jill = Object.create(personProto, {
  name: { value: "Jill" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});

// Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects
var obj1 = {
  name: "John",
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon"
};
function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}
change(age, obj);
console.log(age);
console.log(obj);

// First Class functions

//FCF - Functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

// FCF: Functions returning functions

/*
function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + " ?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do");
    };
  }
}
*/

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");
var designerQuestion = interviewQuestion("designer");
designerQuestion("John");

interviewQuestion("teacher")("Mark");

//Frequent JS interview question
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(7)(70));

// IIFE - can only be called once
//helps create scope that is hidden from the outside scope, data privacy

//Normal function declaration
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

// Closures
// an inner function has access to all the variables and
// parameters of the outer function even after the latter
// has returned.
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

// retirement(65)(1990);

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
retirementGermany(1990);
var retirementIceland = retirement(67);
retirementIceland(1990);

// Closure practice
function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + " ?");
    } else {
      console.log("Hello " + name + ", what do you do");
    }
  };
}

var mary = {
  name: "Mary",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up ? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

mary.presentation("friendly", "evening");

//Method borrowing, call and apply methods
mary.presentation.call(emily, "formal", "morning");
mary.presentation.apply(emily, ["friendly", "afternoon"]);

//bind helps create copy of functions with preset values
//currying - creating functions based on other functions with preset value/s
var maryFriendly = mary.presentation.bind(mary, "friendly");
maryFriendly("morning");

var emilyFormal = mary.presentation.bind(emily, "formal");
emilyFormal("morrow");

//bind Function example with previous code
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var isFullAgeJP = isFullAge.bind(this, 20);
var fullAgesJP = arrayCalc(ages, isFullAgeJP);
console.log(fullAgesJP);

///////////////////
//Coding challenge 7

(function() {
  var Question = function(question, answers, correctAnswer) {
    (this.question = question),
      (this.answers = answers),
      (this.correctAnswer = correctAnswer);
  };
  var score = 0;
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(a, callback) {
    if (a === this.correctAnswer) {
      score++;
      var sc;
      console.log("Correct answer!");
      sc = callback(true);
      this.displayCurrentScore(sc);
    } else {
      console.log("Wrong! Try again.");
      sc = callback(false);
    }
  };

  Question.prototype.displayCurrentScore = function(cscore) {
    console.log("------------------------------");
    console.log("The current score is " + cscore);
    console.log("------------------------------");
  };

  Question.prototype.displayTotalScore = function() {
    console.log("*****************************");
    console.log("The total score is " + score);
    console.log("*****************************");
  };

  var q1 = new Question("Is JS a programming language?", ["Yes", "No"], 0);
  var q2 = new Question(
    "What is HTML?",
    ["a markup language", "a stylesheet", "a programming language"],
    0
  );
  var q3 = new Question(
    "What does DRY mean?",
    ["bla bla", "Do not repeat yourself", "no humidity"],
    1
  );

  var questions = [q1, q2, q3];

  function calcScore() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = calcScore();

  function nextRandomQuestion() {
    var qnumber = Math.floor(Math.random() * questions.length);
    questions[qnumber].displayQuestion();
    var answer = prompt("What is your answer?");

    if (answer !== "exit") {
      questions[qnumber].checkAnswer(parseInt(answer), keepScore);
      nextRandomQuestion();
    } else {
      questions[qnumber].displayTotalScore();
    }
  }

  nextRandomQuestion();
})();
