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
