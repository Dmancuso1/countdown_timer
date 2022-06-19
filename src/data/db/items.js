// Implement a script that lets the user choose an option and based on that option, another list mutates

// options can be active or inactive depending on the configuation of the relationships between options.

class OptionsList {
  constructor(title, category) {
    this.title = title;
    this.category = category;
    this.active = false
  }
}


let categories = {
  color: 'color',
  shape: 'shape',
  car: 'car',
}

// seed OptionsList
let opOne = new OptionsList("Red", categories.color);
let opTwo = new OptionsList("Yellow", categories.color);
let opThree = new OptionsList("Blue", categories.color);
let opFour = new OptionsList("Organge", categories.color);
let opFive = new OptionsList("Red!", categories.color);
let opSix = new OptionsList("Black", categories.color);

let opSeven = new OptionsList("Circle", categories.shape);
let opEight = new OptionsList("Square", categories.shape);
let opNine = new OptionsList("Rectangle", categories.shape);
let opTen = new OptionsList("Triangle", categories.shape);
let opEleven = new OptionsList("Semi-circle", categories.shape);
let opTwelve = new OptionsList("Diamond", categories.shape);

let opThirteen = new OptionsList("Viper", categories.car);
let opFourteen = new OptionsList("Corvette", categories.car);


const AllLists = [
  opOne,
  opTwo,
  opThree,
  opFour,
  opFive,
  opSix,
  opSeven,
  opEight,
  opNine,
  opTen,
  opEleven,
  opTwelve,
  opThirteen,
  opFourteen,

]


export default AllLists;