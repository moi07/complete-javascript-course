//Coding challenge 1

var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
massMark = 74;
massJohn = 81;
heightMark = 1.75;
heightJohn = 1.85;

function calculateBMI(mass, height) {
  return mass / Math.pow(height, 2);
}

bmiMark = calculateBMI(massMark, heightMark);
bmiJohn = calculateBMI(massJohn, heightJohn);

var isMarkFatter = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + isMarkFatter);

//Coding challenge 2

var averageTeamJohn, averageTeamMike, averageTeamMary;
averageTeamJohn = (101 + 110 + 103) / 3;
averageTeamMike = (108 + 108 + 108) / 3;
averageTeamMary = (97 + 120 + 107) / 3;

switch (true) {
  case averageTeamJohn > averageTeamMary && averageTeamJohn > averageTeamMike:
    console.log("Team John wins with an average of " + averageTeamJohn);
    break;

  case averageTeamMike > averageTeamMary && averageTeamMike > averageTeamJohn:
    console.log("Team Mike wins with an average of " + averageTeamMike);
    break;

  case averageTeamMary > averageTeamJohn && averageTeamMary > averageTeamMike:
    console.log("Team Mary wins with an average of " + averageTeamMary);
    break;

  case averageTeamMike == averageTeamJohn && averageTeamMike > averageTeamMary:
    console.log(
      "Teams Mike and John win with an average of " + averageTeamMike
    );
    break;

  case averageTeamMike == averageTeamMary && averageTeamMike > averageTeamJohn:
    console.log(
      "Teams Mike and Mary win with an average of " + averageTeamMike
    );
    break;

  case averageTeamJohn == averageTeamMary && averageTeamJohn > averageTeamMike:
    console.log(
      "Teams John and Mary win with an average of " + averageTeamJohn
    );
    break;

  case averageTeamMike == averageTeamMary && averageTeamMike == averageTeamJohn:
    console.log(
      "No one wins, since everyone has the same average of " + averageTeamMike
    );
    break;

  default:
    break;
}

//Coding challenge 3
let bills = [124, 48, 268];
let tips = [];
let totals = [];
function calculateTip(bill) {
  switch (true) {
    case bill < 50:
      return bill * 0.2;

    case bill >= 50 && bill <= 200:
      return bill * 0.15;

    case bill > 200:
      return bill * 0.1;
  }
}

for (let i in bills) {
  let tip = Number(calculateTip(bills[i]).toFixed(1));
  let total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
}

console.log(tips);
console.log(totals);

//Coding challenge 4
var mark = {
  fullName: "Mark Doe",
  mass: 74,
  height: 1.75,
  BMIcalculate: function() {
    this.bmi = this.mass / Math.pow(this.height, 2);
    return this.bmi;
  }
};

var john = {
  fullName: "John Smith",
  mass: 81,
  height: 1.85,
  BMIcalculate: function() {
    this.bmi = this.mass / Math.pow(this.height, 2);
    return this.bmi;
  }
};

if (mark.BMIcalculate() > john.BMIcalculate()) {
  console.log(
    "The highest BMI belongs to " + mark.fullName + " with a BMI of " + mark.bmi
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    "The highest BMI belongs to " + john.fullName + " with a BMI of " + john.bmi
  );
} else {
  console.log("They have the same BMI");
}

//Coding challenge 5
var John = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  tips: [],
  totals: [],
  sumTips: 0,
  calcTip: function() {
    for (let i in this.bills) {
      let tip;
      let bill = this.bills[i];
      switch (true) {
        case bill < 50:
          tip = bill * 0.2;
          break;
        case bill >= 50 && bill <= 200:
          tip = bill * 0.15;
          break;
        case bill > 200:
          tip = bill * 0.1;
          break;
      }
      this.tips[i] = tip;
      this.totals[i] = bill + tip;
      this.sumTips += tip;
    }
  }
};
John.calcTip();
John.tipAverage = John.sumTips / John.bills.length;
console.log(John);

var Mark = {
  fullName: "Mark Miller",
  bills: [77, 375, 110, 45],
  tips: [],
  totals: [],
  sumTips: 0,
  calcTip: function() {
    for (let i in this.bills) {
      let tip;
      let bill = this.bills[i];
      switch (true) {
        case bill < 100:
          tip = bill * 0.2;
          break;
        case bill >= 100 && bill <= 300:
          tip = bill * 0.1;
          break;
        case bill > 300:
          tip = bill * 0.25;
          break;
      }
      this.tips[i] = tip;
      this.totals[i] = bill + tip;
      this.sumTips += tip;
    }
  }
};
Mark.calcTip();
Mark.tipAverage = Mark.sumTips / Mark.bills.length;
console.log(Mark);

if (John.tipAverage > Mark.tipAverage) {
  console.log(
    John.fullName + " paid more in tips with a an average of " + John.tipAverage
  );
} else
  console.log(
    Mark.fullName + " paid more in tips with a an average of " + Mark.tipAverage
  );
