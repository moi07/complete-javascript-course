// Coding challenge 8
class TownElement {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}
class Park extends TownElement {
  constructor(name, buildYear, parkArea, numberOfTrees) {
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.parkArea = parkArea;
  }
  calcTreeDensity() {
    const density = this.numberOfTrees / this.parkArea;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
  hasMoreThan1000() {
    return this.numberOfTrees > 1000;
  }
}

class Street extends TownElement {
  constructor(name, buildYear, streetLength, size = "3") {
    super(name, buildYear);
    this.streetLength = streetLength;
    this.size = size;
  }
  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, built in ${this.buildYear} is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const parks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1983, 0.4, 949)
];
const streets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen Street", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8),
  new Street("Sunset Boulevard", 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("--------PARKS REPORT--------");
  //Density
  p.forEach(el => el.calcTreeDensity());

  //Average age
  const ages = p.map(el => 2016 - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  //Which park has more than 1000 trees
  const i = p.map(el => el.numberOfTrees).findIndex(el => 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
  console.log("--------STREETS REPORT--------");
  const [totalLength, avgLength] = calc(s.map(el => el.streetLength));
  console.log(
    `Our ${
      streets.length
    } streets have a total length of ${totalLength} km, with an average length of ${avgLength} km.`
  );
  s.forEach(el => el.classifyStreet());
}

reportParks(parks);
reportStreets(streets);
