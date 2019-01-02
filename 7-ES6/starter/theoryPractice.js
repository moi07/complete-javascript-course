
//let vs const vs var examples

//ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5); //"Jane Miller"

//ES6
const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6); //Assignment to constant variable

//ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    console.log(firstName); //undefined
    var firstName = "John";
    var yearOfBirth = 1990;
  }
  console.log(
    firstName +
      " born in " +
      yearOfBirth +
      " is now officialy allowed to drive a car."
  );
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
  console.log(firstName); //firstName not defined, ReferenceError: can't access lexical declaration `firstName' before initialization
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = "John";
  }
  console.log(
    firstName +
      " born in " +
      yearOfBirth +
      " is now officialy allowed to drive a car."
  ); //firstName and yearOfBirth are not defined f the variables are inside the if block
}

driversLicence6(true);

//ES6
let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i); //0,1,2,3,4
}
console.log(i); //23

//ES5
var i = 23;
for (var i = 0; i < 5; i++) {
  console.log(i); //0,1,2,3,4
}
console.log(i); //5


// Blocks and IIFEs

//ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(a + b); //a and b are not defined
console.log(c); //3

//ES5
(function() {
  var d = 3;
})();

console.log(d); //d is not defined


// Strings

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;
function calcAge(year) {
  return 2016 - year;
}

//ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today he is " +
    calcAge(yearOfBirth) +
    " years old."
);

//ES6
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(
    yearOfBirth
  )} years old.`
);

//New ES6 string methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith("J"));
console.log(n.endsWith("h"));
console.log(n.includes(" "));
console.log(`${firstName} `.repeat(5));


//Arrow functions

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);

//ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};
box5.clickMe();

//ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str = `This is box number ${this.position} and it is ${this.color}.`;
      alert(str);
    });
  }
};
box6.clickMe();

//ES6 - be careful when turning obj methods to arrow functions
const box66 = {
  color: "green",
  position: 1,
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      var str = `This is box number ${this.position} and it is ${this.color}.`;
      alert(str);
    });
  }
};
box66.clickMe(); this will point to the global object and return undefined


function Person(name) {
  this.name = name;
}

//ES5
//with self = this
Person.prototype.myFriends5 = function(friends) {
  var self = this;
  var arr = friends.map(function(el) {
    return self.name + " is friends with " + el;
  });
  console.log(arr);
};

var friends5 = ["John", "Mark"];
var mike = new Person("Michael");
mike.myFriends5(friends5);

//with bind
Person.prototype.myFriends5bind = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends5 = ["John", "Mark"];
var mike = new Person("Michael");
mike.myFriends5bind(friends5);

//ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} est ami avec ${el}`);
  console.log(arr);
};

const friends6 = ["Jean", "Marc"];
const michel = new Person("Michel");
michel.myFriends6(friends6);


//Destructuring

//ES5
var john5 = ["John", 26];
var name5 = john5[0];
var age5 = john5[1];
console.log(name5, age5);

//ES6
const john6 = ["John", 26];
const [name6, age6] = john6;
console.log(name6, age6);

const obj = {
  firstName: "John",
  lastName: "Smith"
};

const { firstName, lastName } = obj;
console.log(firstName, lastName);

const { firstName: a, lastName: b } = obj;
console.log(a, b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}
const [age, retirement] = calcAgeRetirement(1990);
console.log(age, retirement);


//Arrays
const boxes = document.querySelectorAll(".box");

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
console.log(boxesArr5);

boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.backgroundColor = "dodgerblue"));
//shorter version
//Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

//ES5
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
  } else {
    boxesArr5[i].textContent = "I changed to blue";
  }
}

//ES6
for (const item of boxesArr6) {
  if (item.className.includes("blue")) {
    continue;
  } else {
    item.textContent = "I changed to blue";
  }
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//New ES6 Array methods
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


// Spread Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];

const familyMiller = ["Mary", "Bob", "Ann"];
const bigFamily = [...familySmith, "Lily", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

Array.from(all).forEach(cur => (cur.style.color = "purple"));


//Function parameters

//Rest parameters - exact opposite of the spread operators

//ES5
function isFullAge5() {
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= 18);
  });
}
isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years) {
  years.forEach(cur => console.log(2016 - cur >= 18));
}
isFullAge6(1990, 1999, 1965, 2016, 1987);

//With age limit as a variable
//ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= limit);
  });
}
// isFullAge5(21, 1990, 1999, 1965);
// isFullAge5(21, 1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2016 - cur >= limit));
}
isFullAge6(16, 1990, 1999, 1965, 2016, 1987);


//Default parameters

//ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : lastName;
  nationality === undefined ? (nationality = "american") : nationality;
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

//ES6
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diaz", "spanish");


//Maps ES6
const question = new Map();
question.set(
  "question",
  "What is the official name of the latest major JavaScript version ?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer :D");
question.set(false, "Wrong, please try again!");
console.log(question.get("question"));
console.log(question.size);

if (question.has(4)) {
  //question.delete(4);
  console.log("Answer 4 is here");
}

//question.clear(); //clear all elements from the map

question.forEach((value, key) =>
  console.log(`This is ${key}, and it's set to ${value}`)
);

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Write the correct answer"));
console.log(question.get(ans === question.get("correct")));


// Classes and SubClasses

//ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};
var john5 = new Person5("John", 1990, "teacher");

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
  static greeting() {
    console.log("Hey there!");
  }
}

const john6 = new Person6("John", 1992, "designer");
Person6.greeting();

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6("John", 1990, "footballer", 2, 7);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
