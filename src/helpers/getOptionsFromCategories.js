// let list = [
//   {
//     title: "One",
//     category: "number",
//   },
//   {
//     title: "Two",
//     category: "number",
//   },
//   {
//     title: "Anyword",
//     category: "word",
//   },
//   {
//     title: "Someword",
//     category: "word",
//   },
//   {
//     title: "Mars",
//     category: "planets",
//   },
//   {
//     title: "Jupiter",
//     category: "planets",
//   },
// ]

// categories = {
//   planets: "planets",
//   word: "word",
// }


const getOptionsFromCategories = (list, categories) => {
  let results = [];
  let categoryList = Object.keys(categories)
  for (const category of categoryList) {
    list.filter((item) => {
      if (item.category === category) {
        return results.push(item)
      };
    })
  }
  return results;
}



export default getOptionsFromCategories;