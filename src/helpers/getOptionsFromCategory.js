const getOptionsFromCategory = (list, category) => {

  return list.filter(listCategory => listCategory.category === category)
}

export default getOptionsFromCategory;