class Categories {
  constructor(title) {
    this.title = title;
    this.active = false
  }
}


let category_001 = new Categories('color');
let category_002 = new Categories('shape');
let category_003 = new Categories('car');
let category_004 = new Categories('department');



let allCategories = [
  category_001,
  category_002,
  category_003,
  category_004,

]

export default allCategories